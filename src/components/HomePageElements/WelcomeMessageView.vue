<script lang="ts" setup></script>

<template>
    <div>
        <div class="welcomeMessage">
            <div>Welcome to Raijoffle SEO Tools</div>
            <div>Raijoffle</div>
            <div>Seo Tools</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.welcomeMessage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100%;
    background-color: red;
    padding: 20px;
    box-sizing: border-box;
    & div:nth-child(1) {
        color: #fff;
        font-size: 12px;
        letter-spacing: 1px;
        line-height: 24px;
    }
    & div:nth-child(2) {
        color: #fff;
        font-size: 96px;
        line-height: 96px;
        letter-spacing: 1px;
        background: linear-gradient(90deg, #630505, #050000);
        -moz-background-clip: text;
        background-clip: text;
    }
    & div:nth-child(3) {
        color: #fff;
        font-size: 12px;
        line-height: 48px;
        letter-spacing: 1px;
    }
}
</style>
