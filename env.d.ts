/// <reference types="vite/client" />
//解決找不到APP的方式
declare module '*.vue' {
    import { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
  }