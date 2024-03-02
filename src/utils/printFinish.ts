/* eslint-disable no-console */
import { relative } from 'node:path'
import { bold, green } from 'kolorist'
import { getCommand } from './getCommand'
import type { Ora } from './loading'

export function printFinish(
  root: string,
  cwd: string,
  packageManager: 'pnpm' | 'npm' | 'yarn',
  loading: Ora,
) {
  loading.succeed(`${bold('模板创建完成！')}`)
  console.log()
  if (root !== cwd) {
    const cdProjectName = relative(cwd, root)
    console.log(
      `  ${bold(green(`cd ${cdProjectName.includes(' ') ? `"${cdProjectName}"` : cdProjectName}`))}`,
    )
  }
  console.log(`  ${bold(green(getCommand(packageManager, 'i')))}`)
  console.log(`  ${bold(green(getCommand(packageManager, 'dev')))}`)
  console.log(`  ${bold(green('切记！执行完 pnpm dev 之后，再开始第一次 git commit，否则报错！'))}`)
  console.log()
}
