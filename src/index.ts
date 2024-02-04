#!/usr/bin/env node

import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmdirSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs'
import { join, resolve } from 'node:path'
import process from 'node:process'
import ejs from 'ejs'
import { bold, red } from 'kolorist'
import minimist from 'minimist'
import prompts from 'prompts'
import figures from 'prompts/lib/util/figures.js'
import { question } from './question'
import filePrompt from './question/file'
import { templateList } from './question/template/templateDate'
import type { BaseTemplateList } from './question/template/type'
import type { Ora } from './utils'
import {
  canSkipEmptying,
  dowloadTemplate,
  ora,
  preOrderDirectoryTraverse,
  printBanner,
  printFinish,
  renderTemplate,
  replaceProjectName,
} from './utils'
import { postOrderDirectoryTraverse } from './utils/directoryTraverse'

let loading: Ora
async function init() {
  printBanner()

  const argv = minimist(process.argv.slice(2), {
    alias: {
      templateType: ['t'],
    },
    string: ['_'],
  })
  const projectName = argv._[0]

  let result: {
    projectName?: string
    shouldOverwrite?: boolean
    templateType?: BaseTemplateList['value']
  } = {}

  if (!projectName) {
    try {
      result = await question()
    }
    catch (cancelled) {
    // eslint-disable-next-line no-console
      console.log((<{ message: string }>cancelled).message)
      process.exit(1)
    }
  }
  else {
    const templateType = templateList.find(item => item.value.type === argv?.t)?.value
    if (!templateType && argv?.templateType) {
      // eslint-disable-next-line no-console
      console.log(`${red(figures.cross)} ${bold(`未获取到${templateType}模板`)}`)
      process.exit(1)
    }

    result = {
      projectName,
      shouldOverwrite: canSkipEmptying(projectName)
        ? true
        : (await prompts(filePrompt(projectName))).shouldOverwrite,
      templateType: templateType || <BaseTemplateList['value']>{ type: 'custom' },
    }
  }

  loading = ora(`${bold('正在创建模板...')}`).start()
  const cwd = process.cwd()
  const root = join(cwd, result.projectName!)
  const userAgent = process.env.npm_config_user_agent ?? ''
  const packageManager = /pnpm/.test(userAgent) ? 'pnpm' : /yarn/.test(userAgent) ? 'yarn' : 'npm'

  function emptyDir(dir: string) {
    if (!existsSync(dir))
      return

    postOrderDirectoryTraverse(
      dir,
      dir => rmdirSync(dir),
      file => unlinkSync(file),
    )
  }

  if (existsSync(root) && result.shouldOverwrite)
    emptyDir(root)

  else if (!existsSync(root))
    mkdirSync(root)

  if (result.templateType!.type !== 'custom') {
    const { templateType, projectName } = result
    await dowloadTemplate(templateType!, projectName!, root, loading)
    printFinish(root, cwd, packageManager, loading)
    return
  }

  type Callback = (dataStore: Record<string, any>) => void
  const callbacks: Callback[] = []

  const dataStore: Record<string, any> = {}
  // Process callbacks
  for (const cb of callbacks)
    await cb(dataStore)

  preOrderDirectoryTraverse(
    root,
    () => {},
    (filepath) => {
      if (filepath.endsWith('.ejs')) {
        const template = readFileSync(filepath, 'utf-8')
        const dest = filepath.replace(/\.ejs$/, '')
        const content = ejs.render(template, dataStore[dest])

        writeFileSync(dest, content)
        unlinkSync(filepath)
      }
    },
  )

  replaceProjectName(root, result.projectName!)

  printFinish(root, cwd, packageManager, loading)
}

init().catch((e) => {
  loading.fail(`${bold('模板创建失败！')}`)
  console.error(e)
})
