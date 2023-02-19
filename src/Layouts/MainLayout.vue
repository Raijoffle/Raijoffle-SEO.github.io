<script lang="ts" setup>
import MainHeader from "../components/MainHeader.vue";
</script>

<template>
    <div class="MainLayout">
        <MainHeader />
        <div class="PageViewer"><slot /></div>
        <div>Footer</div>
    </div>
</template>

<style scoped>
.PageViewer {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 60px;
}
</style>
