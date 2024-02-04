import { dim, green, link } from 'kolorist'
import type { TemplateList } from './type'

export const templateList: TemplateList[] = [
  {
    title: `unibest${green('(推荐)')}`,
    description: `多个TAB的完整项目`,
    value: {
      type: 'unibest',
      url: {
        gitee: 'https://gitee.com/codercup/unibest.git',
        github: 'https://github.com/codercup/unibest.git',
      },
    },
  },
  // {
  //   title: `unibest simple`,
  //   description: `单个TAB的简单项目`,
  //   value: {
  //     type: 'unibest simple',
  //     url: {
  //       gitee: 'https://gitee.com/codercup/unibest.git',
  //       github: 'https://github.com/codercup/unibest.git',
  //     },
  //   },
  // },
]
