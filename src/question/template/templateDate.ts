import { green, red } from 'kolorist'
import type { TemplateList } from './type'

export const templateList: TemplateList[] = [

  {
    title: `base${green('(推荐)')}`,
    description: `${red('(多TAB base项目)')}`,
    value: {
      type: 'base',
      branch: 'base',
      url: {
        gitee: 'https://gitee.com/codercup/unibest.git',
        github: 'https://github.com/codercup/unibest.git',
      },
    },
  },
  {
    title: `demo${green('(演示项目)')}`,
    description: `${red('(多TAB演示项目)')}`,
    value: {
      type: 'demo',
      branch: 'demo',
      url: {
        gitee: 'https://gitee.com/codercup/unibest.git',
        github: 'https://github.com/codercup/unibest.git',
      },
    },
  },
  {
    title: `i18n${green('(多语言)')}`,
    description: `${red('(多TAB多语言项目)')}`,
    value: {
      type: 'i18n',
      branch: 'i18n',
      url: {
        gitee: 'https://gitee.com/codercup/unibest.git',
        github: 'https://github.com/codercup/unibest.git',
      },
    },
  },
]
