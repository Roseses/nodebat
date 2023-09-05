# 使用情景
使用脚本发布或构建等需求

# 依赖模块
项目依赖

```
// package.json

"gulp": "^4.0.2"
```

如果用esmodule语法需要引入其他依赖

```
// package.json

"sucrase": "^3.34.0"
```

如果是在ts文件中使用需要引入声明模块

```
// package.json

"@types/gulp": "^4.0.13"
```


如果需要通过命令行执行文件需要安装的依赖

```
npm i -g gulp-cli
```

可能使用到的其他模块

```
// package.json

"gulp-autoprefixer": "^8.0.0",
"gulp-less": "^5.0.0",
```

# 使用示例
- 全局模块
```
"scripts": {
    "push": "gulp -f script/publish/build.js"
 }
```
1. -f: 指定执行的文件, 不使用的话默认根目录下的gulpfile.js文件

