<script setup lang="ts">
import { reactive, computed, onMounted, ref } from 'vue'
import {
    Dataset,
    DatasetItem,
    DatasetInfo,
    DatasetPager,
    DatasetSearch,
    DatasetShow,
} from "vue-dataset";
// import users from '../../data/usersDataset.json';
import useDatasetStore from '../../stores/Tables/datasetStore'
import Addmodal from './Addmodal.vue'
import { Modal } from 'bootstrap';
const store = useDatasetStore()

interface IUser {
    name: string | null;
    email: string | null;
    company: string | null;
    birthdate: string | null;
}
interface IdataSet {
    data: IUser[];
}
const user = reactive<IdataSet>({
    data: []
});
user.data = store.users
// Helper variables
const cols = reactive([
    {
        name: "Name",
        field: "name",
        sort: "",
    },
    {
        name: "Email",
        field: "email",
        sort: "",
    },
    {
        name: "Company",
        field: "company",
        sort: "",
    },
    {
        name: "Birth date",
        field: "birthdate",
        sort: "",
    },
    {
        name: "Edit",
        field: "eDit",
        sort: "",
    },
]);
const sortBy = computed(() => {
    return cols.reduce((acc: string[], o) => {
        if (o.sort) {
            o.sort === "asc" ? acc.push(o.field) : acc.push("-" + o.field);
        }
        return acc;
    }, [] as string[]); // 明确指定初始值类型为 string[]
});
// On sort th click
function onSort(event: any, i: any) {
    let toset: any;
    const sortEl = cols[i];
    if (!event.shiftKey) {
        cols.forEach((o) => {
            if (o.field !== sortEl.field) {
                o.sort = "";
            }
        });
    }

    if (!sortEl.sort) {
        toset = "asc";
    }

    if (sortEl.sort === "desc") {
        toset = event.shiftKey ? "" : "asc";
    }

    if (sortEl.sort === "asc") {
        toset = "desc";
    }

    sortEl.sort = toset;
}

interface IdataSetAdd {
    user: {
        name: string | null,
        email: string | null,
        company: string | null,
        birthdate: string | null,
        index: number
    }
}
const props = reactive<IdataSetAdd>({
    user: {
        name: '',
        email: '',
        company: '',
        birthdate: '',
        index: 0
    }
}

)
// const initPopup = () => {
//     addModal.value = new window.bootstrap.Modal(document.getElementById("dataSetModal"));
// };
//編輯
const handleEdit = (item: number) => {
    store.index = item
    props.user = {
        name: user.data[item].name,
        email: user.data[item].email,
        company: user.data[item].company,
        birthdate: user.data[item].birthdate,
        index: item
    }
    // addModal.value.show()
}
//刪除
const handleEditDel = (item: number) => {
    console.log(item);
    console.log(user.data[item])
}
// Apply a few Bootstrap 5 optimizations
onMounted(() => {
    // Remove labels from
    document.querySelectorAll("#datasetLength label").forEach((el) => {
        el.remove();
    });

    // Replace select classes
    let selectLength = document.querySelector("#datasetLength select");

    if (selectLength instanceof HTMLElement) {
        // 現在 TypeScript 知道 selectLength 是 HTMLElement，它有 style 屬性
        selectLength.className = "";
        selectLength.classList.add("form-select");
        selectLength.style.width = "80px";
    }
});
</script>
<template>
    <Dataset v-slot="{ ds }" :ds-data="user.data" :ds-sortby="sortBy"
        :ds-search-in="['name', 'email', 'company', 'birthdate']">
        <div class="row" :data-page-count="ds.dsPagecount">
            <div id="datasetLength" class="col-md-8 py-2">
                <DatasetShow />
            </div>
            <div class="col-md-4 py-2">
                <DatasetSearch ds-search-placeholder="Search..." />
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col-md-12">
                <div class="table-responsive">
                    <table class="table table-striped table-hover mb-0">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th v-for="(th, index) in cols" :key="th.field" :class="['sort', th.sort]"
                                    @click="onSort($event, index)">
                                    {{ th.name }} <i class="gg-select float-end"></i>
                                </th>
                            </tr>
                        </thead>
                        <DatasetItem tag="tbody" style="font-size: 15px;font-family:;" class="fw-bold p-1">
                            <template #default="{ row, rowIndex }">
                                <tr>
                                    <th scope="row">{{ rowIndex + 1 }}</th>
                                    <td style="min-width: 150px">{{ row.name }}</td>
                                    <td>{{ row.email }}</td>
                                    <td style="min-width: 150px">{{ row.company }}</td>
                                    <td style="min-width: 150px">{{ row.birthdate }}</td>
                                    <td>
                                        <div class="btn-group">
                                            <Addmodal :user="props.user"></Addmodal>
                                            <!-- Modal -->
                                            <!-- <div class="modal fade" id="exampleModal" tabindex="-1"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                                aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            ...
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary"
                                                                data-bs-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-primary">Save
                                                                changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> -->
                                            <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal">
                                                Launch demo modal
                                            </button> -->
                                            <button type="button" class="btn btn-sm btn btn-primary me-1"
                                                data-bs-toggle="modal" data-bs-target="#dataSetModal"
                                                @click="handleEdit(rowIndex)">
                                                <i class="bi bi-pencil-square"></i>
                                            </button>
                                            <button type="button" class="btn btn-sm btn-danger"
                                                @click="handleEditDel(rowIndex)">
                                                <i class="bi bi-trash3"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </DatasetItem>
                    </table>
                </div>
            </div>
        </div>
        <div class="d-flex flex-md-row flex-column justify-content-between align-items-center">
            <DatasetInfo class="py-3 fs-sm" />
            <DatasetPager class="flex-wrap py-3 fs-sm" />
        </div>
    </Dataset>
</template>