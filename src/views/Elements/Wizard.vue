<script setup lang="ts">
import { wizardHelpers } from './useHeadering';//使用BaseHeadering
import { card } from './useBaseBlock';//BaseBlock
import { ref } from 'vue'
const activeStep = ref(0);
const steps = ref(['Eeny', 'Miny', 'Moe']);

function nextStep() {
    if (activeStep.value < steps.value.length - 1) activeStep.value++;
}

function prevStep() {
    if (activeStep.value > 0) activeStep.value--;
}

function resetSteps() {
    activeStep.value = 0;
}
</script>
<template>
    <BaseHeadering :header=wizardHelpers></BaseHeadering>
    <div class="container mt-xl-5 mt-3 w-100 mb-4">
        <div class="d-flex justify-content-center">
            <BaseBlock :show="card.show" style="width: 80%;">
                <template #header>
                    <div class="card-header border-0 fw-bold">
                        Wizard
                    </div>
                </template>
                <template #content>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <h5 class="mb-4 fw-bold">Custom Wizard</h5>
                            </div>
                            <div class="col-md-8">
                                <div class="wizard">
                                    <div class="wizard-header">
                                        <p>Fully customizable wizard component</p>
                                    </div>
                                    <div class="wizard-content">
                                        <div v-for="(step, index) in steps" :key="index" class="step"
                                            :class="{ 'is-active': index === activeStep }">
                                            <div class="step-number">{{ index + 1 }}</div>
                                            <div class="step-title">{{ step }}</div>
                                            <div class="step-description">Lorem ipsum dolor sit amet...</div>
                                            <div v-if="index < steps.length - 1" class="step-line"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="wizard-footer d-flex justify-content-around">
                                    <button class="btn btn-primary" @click="prevStep">Previous</button>
                                    <button class="btn btn-primary" @click="nextStep">Next</button>
                                    <button class="btn btn-primary" @click="resetSteps">Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </BaseBlock>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$color-loginButton: rgb(11, 94, 215);

.wizard {
    .wizard-header {
        text-align: center;

        p {
            color: #aaa;
        }
    }

    .wizard-content {
        display: flex;
        justify-content: space-between;
        padding: 2rem 0;

        .step {
            text-align: center;
            width: 100%;
            position: relative;

            .step-number {
                background-color: #fff;
                border: 2px solid #3498db;
                border-radius: 50%;
                width: 3rem;
                height: 3rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
                font-weight: bold;
                position: relative;
                z-index: 1;
            }

            .step-line {
                position: absolute;
                top: 1.5rem; // 確保這是圓圈的中心點
                left: 50%;
                width: 100%;
                height: 2px;
                background-color: #3498db;
                z-index: 0; // 低於圓圈的層級
            }

            .step-title {
                margin-top: 0.5rem;
                color: #fff;
            }

            .step-description {
                color: #aaa;
            }

            &.is-active .step-number {
                background-color: #3498db;
                color: #fff;
            }
        }
    }

    .wizard-footer {
        display: flex;
        justify-content: space-around;

        button {
            background-color: #3498db;
            color: #fff;
            border: none;
            padding: 0.5rem 1rem;
            margin: 0 0.5rem;


        }
    }
}

.btn-primary {

    &:hover {
        background-color: darken($color-loginButton, 5%);
    }

    &:focus {
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }
}
</style>