# Vue 3 + Typescript + Vite

- 如何配置 Lint 工具: https://juejin.cn/post/7084810877618094094

## 注意

- import vue 文件时, 不能省略.vue(会导致 TS 无法识别)
- defineProps<Props>(), Props 类型只能在当前 vue 文件中定义: vue 文件是独立编译的, 目前版本不会抓取导入的文件分析源类型
