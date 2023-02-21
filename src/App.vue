<script setup lang="ts"></script>

<template>
    <component :is="$route.meta.layout" class="RouterView">
        <RouterView />
    </component>
</template>

<style lang="scss">
.RouterView {
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-content: space-between;
    align-items: space-between;
    left: 50%;
    transform: translateX(-50%);
    & *::selection {
        background: #cf0061;
        color: #fff;
    }
}
</style>
