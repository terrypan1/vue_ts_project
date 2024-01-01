<!-- <script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import Vue3Datatable from '@bhplugin/vue3-datatable';
import '@bhplugin/vue3-datatable/dist/style.css';
import { $useGet } from '../../http/axios'
// const config = useRuntimeConfig();
const loading: any = ref(true);
const total_rows = ref(0);

const params = reactive({
    current_page: 1,
    pagesize: 10,
    column_filters: [],
});
const rows: any = ref(null);
const cols = ref([
    { field: 'id', title: 'ID', isUnique: true },
    { field: 'name', title: 'Name' },
    { field: 'email', title: 'Email' },
]) || [];
let controller: any;
let timer: any;
const filterUsers = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        getUsers();
    }, 300);
}
const getUsers = async () => {
    try {
        loading.value = true;
        const res = await $useGet('https://jsonplaceholder.typicode.com/comments');
        
        // 首先應用過濾條件
        let filteredData = applyFilters(res);

        // 然後應用分頁
        const startIndex = (params.current_page - 1) * params.pagesize;
        const endIndex = startIndex + params.pagesize;
        rows.value = filteredData.slice(startIndex, endIndex).map(({ id, name, email }) => ({
            id, name, email
        }));

        total_rows.value = filteredData.length;
        loading.value = false;

    } catch (err) {
        console.error(err);
        loading.value = false;
    }
};

const applyFilters = (data: any[]) => {
    if (!params.column_filters.length) return data;

    return data.filter(item => 
        params.column_filters.every(filter => {
            const itemValue = item[filter.field];
            if (typeof itemValue === 'string') {
                return itemValue.includes(filter.value);
            } else if (itemValue !== null && itemValue !== undefined) {
                return itemValue.toString().includes(filter.value);
            }
            return false;
        })
    );
};
const changeServer = (data: any) => {
    params.current_page = data.current_page;
    params.pagesize = data.pagesize;
    params.column_filters = data.column_filters;

    if (data.change_type === 'filter') {
        filterUsers();
    } else {
        getUsers();
    }
};
onMounted(() => {
    getUsers();
});
</script> -->
<script setup lang="ts">
import { onMounted, ref,reactive } from 'vue';
import Vue3Datatable from '@bhplugin/vue3-datatable';
import '@bhplugin/vue3-datatable/dist/style.css';
import { $useGet } from '../../http/axios'
interface IUser {
  id: string;
  name: string;
  email: string;
}
const total_rows = ref(0);
const loading: any = ref(true);
const cols = ref([
    { field: 'id', title: 'ID', isUnique: true },
    { field: 'name', title: 'Name' },
    { field: 'email', title: 'Email' },
]) || [];
const rows = ref<IUser[]>([]);
const params = reactive({
    current_page: 1,
    pagesize: 10,
    column_filters: [],
});
const getUsers = async () => {
    try {
        loading.value = true;
        const res: IUser[] = await $useGet('https://jsonplaceholder.typicode.com/comments');
        rows.value = res.map(({id,name,email})=>{
            return {id,name,email}
        })
        total_rows.value = rows.value.length
        loading.value = false;
    } catch (err) {
        console.error(err);
        loading.value = false;
    }
}
onMounted(() => {
    getUsers()
});
</script>
<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Column Filter</h2>
            <a target="_blank" class="btn">
                View Source
            </a>
        </div>
        <vue3-datatable :rows="rows" :columns="cols" :totalRows="total_rows" :columnFilter="true"
            class="column-filter" :pageSize="params.pagesize" :loading="loading">
        </vue3-datatable>
    </div>
</template>
<style lang="scss">
// .bh-datatable .bh-table-responsive {
//     @apply min-h-[380px];
// }
</style>