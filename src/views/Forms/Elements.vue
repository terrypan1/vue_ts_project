<script setup lang="ts">
import { elemantsHelpers } from './useHeadering';//使用BaseHeadering
import { card } from './useBaseBlock';//BaseBlock
import { reactive, ref } from 'vue';
import SingleSelect from '../../components/Forms/SingleSelect.vue'
import MultipleSelect from '../../components/Forms/MultipleSelect.vue'
import FilterSelect from '../../components/Forms/FilterSelect.vue'
import CityFilterSelect from '../../components/Forms/CityFilterSelect.vue'
const selectedSingleOption = ref("select menu"); // 用於綁定選中的選項
const singleOptions = ref([
  { value: 5, text: '5' },
  { value: 10, text: '10' },
  { value: 25, text: '25' },
  { value: 50, text: '50' },
  { value: 100, text: '100' }
])
interface IsingleSelect{
  label:string,
  value:string,
  disabled:boolean
}
// 定義一個具有多個 IsingleSelect 對象的數組的類型
interface SingleSelectState {
  options: IsingleSelect[];
}
const singleSelect = reactive<SingleSelectState>({
  options: [
    {
      label: "台灣",
      value: "Taiwan",
      disabled: false,
    },
    {
      label: "美國",
      value: "America",
      disabled: true,
    },
    {
      label: "日本",
      value: "Japan",
      disabled: false,
    },
    {
      label: "俄羅斯",
      value: "Russia",
      disabled: false,
    },
  ]
})
</script>
<template>
  <BaseHeadering :header="elemantsHelpers"></BaseHeadering>
  <div class="container mt-xl-5 mt-3 w-100 mb-4">
    <div class="d-flex justify-content-center">
      <BaseBlock :show="card.show" style="width: 90%;">
        <template #header>
          <div class="card-header border-0 fw-bold">
            Basic
          </div>
        </template>
        <template #content>
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <p style="color: rgb(113, 122, 130);">The most often used inputs you know</p>
              </div>
              <div class="col-lg-8 col-xl-5">
                <div class="mb-4">
                  <label class="fw-bold mb-2">Text</label>
                  <input type="text" placeholder="Text Input" class="form-control form-control-alt">
                </div>
                <div class="mb-4">
                  <label class="fw-bold mb-2">Email</label>
                  <input type="email" placeholder="Email Input" class="form-control form-control-alt">
                </div>
                <div class="mb-4">
                  <label class="fw-bold mb-2">Password</label>
                  <input type="password" placeholder="Password Input" class="form-control form-control-alt">
                </div>
                <div class="mb-4">
                  <label class="fw-bold mb-2">Textarea</label>
                  <textarea class="form-control" id="example-textarea-input" name="example-textarea-input" rows="4"
                    placeholder="Textarea content.."></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <p style="color: rgb(113, 122, 130);">Select boxes, showcasing both simple and multiple
                  selections</p>
              </div>
              <div class="col-lg-8 col-xl-5">
                <div class="mb-4">
                  <label class="fw-bold mb-2">Select</label>
                  <select class="form-select" id="example-select" name="example-select" v-model="selectedSingleOption">
                    <option selected>select menu</option>
                    <option v-for="option in singleOptions" :key="option.value" :value="option.value">
                      {{ option.text }}
                    </option>
                  </select>
                </div>
                <div class="mb-4">
                  <label class="fw-bold mb-2">Customized Select</label>
                  <SingleSelect :options="singleSelect.options"></SingleSelect>
                </div>
                <div class="mb-4">
                  <label class="fw-bold mb-2">Customized MultipleSelect</label>
                  <MultipleSelect ></MultipleSelect>
                </div>
                <div class="mb-4">
                  <label class="fw-bold mb-2">Customized FilterSelect</label>
                  <FilterSelect ></FilterSelect>
                </div>
                <div class="mb-4">
                  <label class="fw-bold mb-2">Customized CityFilterSelect</label>
                  <CityFilterSelect ></CityFilterSelect>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <p style="color: rgb(113, 122, 130);">
                  Checkboxes, radios and switches in various layouts
                </p>
              </div>
              <div class="col-lg-8 col-xl-5">
                <div class="mb-4">
                  <label class="fw-bold mb-2">Checkboxes</label>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      Option 1
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                    <label class="form-check-label" for="flexCheckChecked">
                      Option 2
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" disabled>
                    <label class="form-check-label" for="flexCheckChecked">
                      Option 3
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </BaseBlock>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>