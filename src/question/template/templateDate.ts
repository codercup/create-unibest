import { green } from 'kolorist'
import type { TemplateList } from './type'

export const templateList: TemplateList[] = [

  {
    title: `base${green('(推荐)')}`,
    description: `多TAB项目`,
    value: {
      type: 'unibest base',
      branch: 'base',
      url: {
        gitee: 'https://gitee.com/codercup/unibest.git',
        github: 'https://github.com/codercup/unibest.git',
      },
    },
  },
  {
    title: `demo${green('(演示项目)')}`,
    description: `多TAB演示项目`,
    value: {
      type: 'unibest demo',
      branch: 'demo',
      url: {
        gitee: 'https://gitee.com/codercup/unibest.git',
        github: 'https://github.com/codercup/unibest.git',
      },
    },
  },
  {
    title: `i18n`,
    description: `多TAB多语言项目`,
    value: {
      type: 'unibest base+i18n',
      branch: 'i18n',
      url: {
        gitee: 'https://gitee.com/codercup/unibest.git',
        github: 'https://github.com/codercup/unibest.git',
      },
    },
  },
]
