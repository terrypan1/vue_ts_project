<script setup lang="ts">
import BaseBlock from "../../components/BaseBlock.vue";

</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 md-wd" style="margin-top:50px;width:450px">
                <div class="card fw-bold" style="border: 0px;">
                    <div class="card-header" style="border: 0px;">
                        <span>Sign In</span>
                    </div>
                    <div class="card-body p-sm-3 px-lg-4 px-xxl-5 py-lg-5">
                        <h1 class="fw-bold">WelCome</h1>
                        <p class="fw-medium text-muted">please login</p>
                        <div class="mb-4">
                            <input type="text" class="form-control form-control-alt" placeholder="Username">
                        </div>
                        <div class="mb-4">
                            <input type="text" class="form-control form-control-alt" placeholder="Password">
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-6 col-xl-5">
                                <button type="button" class="btn w-100 btn-primary">
                                    <i class="fa fa-fw fa-sign-in-alt me-1 opacity-50"></i>
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
@media (max-width: 768px) {
    .md-wd {
        width: 800px !important;
    }
}
</style>
  