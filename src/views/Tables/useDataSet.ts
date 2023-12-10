import { reactive, computed, onMounted } from 'vue'
import {
    Dataset,
    DatasetItem,
    DatasetInfo,
    DatasetPager,
    DatasetSearch,
    DatasetShow,
} from "vue-dataset";


export function useTableSort() {
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
    return { cols, sortBy, onSort }
}   