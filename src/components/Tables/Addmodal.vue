<script setup lang="ts">
import { reactive, watch, watchEffect } from 'vue';
import useDatasetStore from '../../stores/Tables/datasetStore'
const store = useDatasetStore()
const props = defineProps({
    user: { type: Object, required: true, default: '' },
});

// interface IdataSetAdd {
//     user: {
//         name: string | '',
//         email: string | '',
//         company: string | '',
//         birthdate: string | '',
//         index: number
//     }
// }
// const status = reactive<IdataSetAdd>({
//     user: {
//         name: '',
//         email: '',
//         company: '',
//         birthdate: '',
//         index: 0
//     }
// })
interface IUserFields {
    [key: string]: string;  // 索引签名
    name: string;
    email: string;
    company: string;
    birthdate: string;
}

interface IdataSetAdd {
    user: IUserFields;
    index: number;  // 将 index 移到外层
}

const status = reactive<IdataSetAdd>({
    user: {
        name: '',
        email: '',
        company: '',
        birthdate: ''
    },
    index: 0
});
const fields = [
    { label: 'Name', model: 'name' },
    { label: 'Email', model: 'email' },
    { label: 'Company', model: 'company' },
    { label: 'Birthdate', model: 'birthdate' }
];
const handleClick = () => {
    // console.log(store.users);
    store.users[status.index] = {
        name: status.user.name,
        email: status.user.email,
        company: status.user.company,
        birthdate: status.user.birthdate,
    }
}
watch(() => props.user, (newVal) => {
    status.user = {
        name: newVal.name,
        email: newVal.email,
        company: newVal.company,
        birthdate: newVal.birthdate,
    }
    status.index = newVal.index
    // console.log(status.user);
})
</script>
<template>
    <div class="modal fade" id="dataSetModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Data</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row justify-content-center">
                        <div class="col-sm-10 col-md-10"  v-for="field in fields" :key="field.model">
                            <div class="mb-4">
                                <label class="form-label"><span style="color: red;">*</span>{{ field.label }}</label>
                                <input type="text" v-model="status.user[field.model]" class="form-control form-control-alt">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="handleClick">Savechanges</button>
                </div>
            </div>
        </div>
    </div>
</template>