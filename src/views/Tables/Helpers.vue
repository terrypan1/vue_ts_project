<script setup lang="ts">
import { reactive, computed, onMounted } from 'vue'
import { helpers } from './useHeadering';//使用BaseHeadering
import { card } from './useBaseBlock';//BaseBlock
import {
    Dataset,
    DatasetItem,
    DatasetInfo,
    DatasetPager,
    DatasetSearch,
    DatasetShow,
} from "vue-dataset";
import users from '../../data/usersDataset.json';
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
]);
// Sort by functionality
const sortBy = computed(() => {
    return cols.reduce((acc, o) => {
        if (o.sort) {
            o.sort === "asc" ? acc.push(o.field) : acc.push("-" + o.field);
        }
        return acc;
    }, []);
});

// On sort th click
function onSort(event, i) {
    let toset;
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
    <BaseHeadering :header=helpers></BaseHeadering>
    <div class="container mt-xl-5 mt-3 w-100">
        <div class="d-flex justify-content-center">
            <BaseBlock :show="card.show" style="width: 80%;">
                <template #header>
                    <div class="card-header border-0 fw-bolder"
                        style="color:rgb(22, 26, 31);font-size:14px;letter-spacing:0.0625rem;line-height:1.75rem;">
                        VUE DATASET
                    </div>
                </template>
                <template #content>
                    <Dataset v-slot="{ ds }" :ds-data="users" :ds-sortby="sortBy"
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
                                    <table class="table table-striped mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th v-for="(th, index) in cols" :key="th.field" :class="['sort', th.sort]"
                                                    @click="onSort($event, index)">
                                                    {{ th.name }} <i class="gg-select float-end"></i>
                                                </th>
                                            </tr>
                                        </thead>
                                        <DatasetItem tag="tbody" class="fs-sm">
                                            <template #default="{ row, rowIndex }">
                                                <tr>
                                                    <th scope="row">{{ rowIndex + 1 }}</th>
                                                    <td style="min-width: 150px">{{ row.name }}</td>
                                                    <td>{{ row.email }}</td>
                                                    <td style="min-width: 150px">{{ row.company }}</td>
                                                    <td style="min-width: 150px">{{ row.birthdate }}</td>
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
            </BaseBlock>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.gg-select {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(1);
  width: 22px;
  height: 22px;
}
.gg-select::after,
.gg-select::before {
  content: '';
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 8px;
  height: 8px;
  left: 7px;
  transform: rotate(-45deg);
}
.gg-select::before {
  border-left: 2px solid;
  border-bottom: 2px solid;
  bottom: 4px;
  opacity: 0.3;
}
.gg-select::after {
  border-right: 2px solid;
  border-top: 2px solid;
  top: 4px;
  opacity: 0.3;
}
th.sort {
  cursor: pointer;
  user-select: none;
  &.asc {
    .gg-select::after {
      opacity: 1;
    }
  }
  &.desc {
    .gg-select::before {
      opacity: 1;
    }
  }
}
</style>
