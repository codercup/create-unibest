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
  // {
  //   title: `base${green('(推荐)')}`,
  //   description: `${red('(多TAB base项目)')}`,
  //   value: {
  //     type: 'base',
  //     branch: 'main',
  //     url: {
  //       gitee: 'https://gitee.com/codercup/unibest-base.git',
  //       github: 'https://github.com/codercup/unibest-base.git',
  //     },
  //   },
  // },
  {
    title: `js${green('(非ts版本)')}`,
    description: `${red('(多TAB base + js项目)')}`,
    value: {
      type: 'js',
      branch: 'js',
      url: {
        gitee: 'https://gitee.com/codercup/unibest.git',
        github: 'https://github.com/codercup/unibest.git',
      },
    },
  },
  {
    title: `ucharts${green('(图表库)')}`,
    description: `${red('(多TAB base + ucharts项目)')}`,
    value: {
      type: 'js',
      branch: 'js',
      url: {
        gitee: 'https://gitee.com/codercup/unibest.git',
        github: 'https://github.com/codercup/unibest.git',
      },
    },
  },
  {
    title: `tabbar${green('(自定义tabbar)')}`,
    description: `${red('(多TAB base + tabbar项目)')}`,
    value: {
      type: 'js',
      branch: 'js',
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
  {
    title: `hbx-base${green('(hbx版-base项目)')}`,
    description: `${red('(hbx的base项目)')}`,
    value: {
      type: 'hbx-base',
      branch: 'base',
      url: {
        gitee: 'https://gitee.com/codercup/unibest-hbx.git',
        github: 'https://github.com/codercup/unibest-hbx.git',
      },
    },
  },
  {
    title: `hbx-demo${green('(hbx版-demo项目)')}`,
    description: `${red('(hbx的demo项目)')}`,
    value: {
      type: 'hbx-demo',
      branch: 'demo',
      url: {
        gitee: 'https://gitee.com/codercup/unibest-hbx.git',
        github: 'https://github.com/codercup/unibest-hbx.git',
      },
    },
  },
]
