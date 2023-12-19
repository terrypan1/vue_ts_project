export interface ITodoItem {
    id: numer
    name: string
    done: boolean
}
export interface ITodoResponse {
    info: ITodoItem[];
}
//login
export interface IVuelidate {
    username: null | string,
    password: null | string
}
//sidebar
export interface INavMenu {
    lable: string,
    target: string,
    target2: string,
    sub: {
        title: string,
        path: string
    }[]
}
//card
interface IShowProps {
    show: {
        header: boolean,
        content: boolean,
        footer: boolean
    },
}
//BaseHeadering
interface IBaseHeader {
    label:string,
    desctiption:string,
    title: string,
    sub: string
    url: string
}
declare global {
    interface Window {
      bootstrap: any;
    }
  }