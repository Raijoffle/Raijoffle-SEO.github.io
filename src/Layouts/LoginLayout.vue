<script lang="ts" setup></script>
<template>
    <div class="LoginLayout">
        <div>Login Header</div>
        <div class="PageViewer"><slot /></div>
        <div>Login Footer</div>
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
}
</style>
