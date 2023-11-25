import particleStore from "./Canvas/particleStore";

export default function useStore() {
    return {
        particle: particleStore()
    }
}