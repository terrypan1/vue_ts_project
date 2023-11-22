import mainStore from "./Todo/mainStore";
import footerStore from './Todo/footerStore';

export default function useStore() {
    return {
        main: mainStore(),
        footer: footerStore()
    }
}