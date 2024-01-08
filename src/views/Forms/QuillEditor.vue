<script setup lang="ts">
import { quillHelpers } from './useHeadering';//使用BaseHeadering
import { card } from './useBaseBlock';//BaseBlock
import { ref } from 'vue'
import BlotFormatter from 'quill-blot-formatter'
import { Delta } from '@vueup/vue-quill'

const modules = {
  name: 'blotFormatter',
  module: BlotFormatter,
  options: {
    /* options */
  },
}
const content = ref<Delta>(
  new Delta([
    {
      insert: 'About Quill Blot Formatter',
    },
    {
      attributes: {
        header: 2,
      },
      insert: '\n',
    },
    {
      insert: '\n',
    },
    {
      attributes: {
        color: '#24292f',
      },
      insert:
        'A module for Quill that allows editor elements to be resized, repositioned, etc.',
    },
    {
      insert: '\nLink: ',
    },
    {
      attributes: {
        link: 'https://github.com/Fandom-OSS/quill-blot-formatter',
      },
      insert: 'https://github.com/Fandom-OSS/quill-blot-formatter',
    },
    {
      insert: '\n\n',
    },
    {
      attributes: {
        height: '188.13151041666666',
        width: '370',
      },
      insert: {
        image: 'https://picsum.photos/id/10/370/188',
      },
    },
    {
      insert: '\n',
    },
  ])
)
const contentDelta = ref<Delta>(
  new Delta([
    { insert: 'Gandalf', attributes: { bold: true } },
    { insert: ' the ' },
    { insert: 'Grey', attributes: { color: '#ccc' } },
  ])
)
const contentHTML = ref('<h1>This is html header</h1>')
const contentText = ref('This is just plain text')
</script>
<template>
    <BaseHeadering :header="quillHelpers"></BaseHeadering>
    <div class="container mt-xl-5 mt-3 w-100 mb-4">
        <div class="d-flex justify-content-center">
            <BaseBlock :show="card.show" style="width: 90%;">
                <template #header>
                    <div class="card-header border-0 fw-bold">
                        QuillEditor Modules
                    </div>
                </template>
                <template #content>
                    <QuillEditor v-model:content="content" :modules="modules" toolbar="full" />
                </template>
            </BaseBlock>
        </div>
    </div>
    <div class="container mt-xl-5 mt-3 w-100 mb-4">
        <div class="d-flex justify-content-center">
            <BaseBlock :show="card.show" style="width: 90%;">
                <template #header>
                    <div class="card-header border-0 fw-bold">
                        QuillEditor Content Types
                    </div>
                </template>
                <template #content>
                  <QuillEditor v-model:content="contentDelta" contentType="delta" /><br>
                  <div>
                    {{ contentDelta }}            
                  </div><br>    
                  <QuillEditor v-model:content="contentHTML" contentType="html" /><br>
                  <div>
                    {{contentHTML}}
                  </div><br>
                  <QuillEditor v-model:content="contentText" contentType="text" /><br>
                  <div>
                    {{contentText}}
                  </div><br>
                </template>
            </BaseBlock>
        </div>
    </div>
</template>