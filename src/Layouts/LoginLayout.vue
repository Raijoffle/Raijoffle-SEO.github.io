<script lang="ts" setup>
import LoginHeader from "@/components/LoginHeader.vue";
</script>
<template>
    <div class="LoginLayout">
        <LoginHeader />
        <div class="PageViewer"><slot /></div>
    </div>
</template>
<style scoped>
.LoginLayout {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
}
.PageViewer {
    height: 100%;
    width: 100%;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center; */
}
</style>
