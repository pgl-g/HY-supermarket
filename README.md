# vue_shop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


1.首先安装vuex，axios，vue-router
#####home
        1.底部按钮:
            a.tabbar(底部盒子的样式，在用slot占一个位置),tabbaritem（设置五个按钮的样式，在设置每一个按钮的样式，在用具名插槽，来命名icon，activeicon，text）,commenttabbar（导入上面两个组件在两个组件中，在tabbaritem中导入在利用具名插槽来进行插入）