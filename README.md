# vue_ts

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------- | --------- | --------- | --------- | --------- |
| Edge | last 2 versions | last 2 versions | last 2 versions| last 2 versions

Documentation and examples
https://vue-ts-project-psi.vercel.app/#/layout/todo


### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
### 解決找不到APP的方式
- env.d.ts
declare module '*.vue' {
    import { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
  }
### Sass
- npm add -D sass

### Bootstrap5
- npm install bootstrap
- main.ts
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
- npm install bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css';

### Eslint
### rules
- off
- warn
- error

### axios
```sh
npm install axios -S
```

### todo
- https://github.com/tastejs/todomvc-app-template

### json-server 
```sh
json-server --watch db.json
```
### Flatpickr
```
npm install vue-flatpickr-component@^11
```

### draggable
```
npm i -S vuedraggable@next
```

### Vuelidate
- Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate

```
npm install @vuelidate/core @vuelidate/validators
```
### SweetAlert2 
- Sweetalert2, for more info and examples, you can check out https://github.com/sweetalert2/sweetalert2
- https://sweetalert2.github.io/#icons
```
npm install sweetalert2
```

### vue-dataset
- Vue Dataset, for more info and examples you can check out https://github.com/kouts/vue-dataset/tree/next

```
npm install vue-dataset@next --save
```
- ts 無法辨識 vue-dataset.d.ts 告訴vue declare module 'vue-dataset';