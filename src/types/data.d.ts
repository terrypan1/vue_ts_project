export interface ITodoItem {
    id: numer
    name: string
    done: boolean
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