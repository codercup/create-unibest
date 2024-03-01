# 开发

- npm run build，得到 `outfile.cjs`
- 在控制台中执行 `npm link`，就能在本地执行 `bin` 中设定的指令了
- 查看全局软连 `npm ls -g`
- 删除本项目的软连 `npm un create-unibest -g`

## git clone

```sh
git clone repoUrl
git clone -b <branch_name> repoUrl
```

## degit

[degit 文档](https://github.com/Rich-Harris/degit)

degit user/repo

```sh
degit github:user/repo
degit <git@github.com>:user/repo
degit <https://github.com/user/repo>
```

degit 某个分支

```sh
degit user/repo#dev       # branch
degit user/repo#v1.2.3    # release tag
degit user/repo#1234abcd  # commit hash
```
