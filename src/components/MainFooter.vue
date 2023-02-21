<script lang="ts" setup>
// ! deneme
</script>

<template>
    <div id="MainFooter">
        <div>footer</div>
    </div>
</template>
<style scoped lang="scss">
#MainFooter {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    box-sizing: border-box;
    padding: 0 20px;
    border-bottom: 1px solid #141414;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: red;
    }
}
</style>
