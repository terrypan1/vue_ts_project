<script setup lang="ts">
import { reactive, watch, ref, onMounted } from 'vue';
import useDatasetStore from '../../stores/Tables/datasetStore'
const store = useDatasetStore()
const props = defineProps({
    user: { type: Object, required: true, default: '' },
});
interface IUserFields {
    [key: string]: string;  // 索引簽名
    name: string;
    email: string;
    company: string;
    birthdate: string;
}

interface IdataSetAdd {
    user: IUserFields;
    index: number;  // 將 index 移到外層
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
const isClose = ref<HTMLButtonElement>(null)
const handleClick = (target: string) => {
    if (target == 'edit') {
        store.users[status.index] = {
            name: status.user.name,
            email: status.user.email,
            company: status.user.company,
            birthdate: status.user.birthdate,
        }
        isClose.value.click()
    }else{
        store.users.splice(status.index,1)
        isClose.value.click()
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
                    <h5 class="modal-title" id="exampleModalLabel">
                        <span v-if="store.target === 'edit'">Edit Data</span>
                        <span v-else-if="store.target === 'delete'">Delete Data</span>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="isClose"></button>
                </div>
                <div class="modal-body">
                    <div class="row justify-content-center">
                        <div class="col-sm-10 col-md-10" v-for="field in fields" :key="field.model">
                            <div class="mb-4">
                                <label class="form-label"><span style="color: red;">*</span>{{ field.label }}</label>
                                <input type="text" v-model="status.user[field.model]" class="form-control form-control-alt">
                            </div>
                        </div>
                        <div class="col-md-4 w-35 mb-4">
                            <button type="button" class="btn btn-secondary me-5 w-100"
                                data-bs-dismiss="modal">Close</button>
                        </div>
                        <div class="col-md-4 w-35">
                            <button type="button" class="btn btn-primary w-100" @click="handleClick(store.target)"
                                v-if="store.target === 'edit'">Save</button>
                            <button type="button" class="btn btn-primary w-100" @click="handleClick(store.target)"
                                v-else-if="store.target === 'delete'">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>