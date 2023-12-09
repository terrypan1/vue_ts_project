<script setup lang="ts">
import type { PropType } from 'vue';

interface ShowProps {
    header: boolean;
    content: boolean;
    footer: boolean;
}
const prop = defineProps({
    show: {
        type: Object as PropType<ShowProps>,
        required: true
    },
})
console.log(prop);

</script>

<template>
    <div class="card border-0">
        <div class="block-header" v-if="show.header">
            <slot name="header">
                <!-- <div class="card-header border-0">
                    Featured
                </div> -->
            </slot>
        </div>
        <div class="block-content" v-if="show.content">
            <div class="card-body">
                <slot name="content"></slot>
            </div>
        </div>
        <div class="block-footer" v-if="show.footer">
            <div class="card-footer border-0">
                <slot name="footer">
                </slot>
            </div>
        </div>
    </div>
</template>