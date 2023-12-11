import { defineStore } from 'pinia';
import users from '../../data/usersDataset.json'
const datasetStore = defineStore('dataset', {
    state: () => {
        return {
            users,
            index:0,
            target:''//edit or delete
        }
    }
})

export default datasetStore