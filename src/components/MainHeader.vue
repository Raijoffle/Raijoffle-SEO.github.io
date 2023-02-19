<script lang="ts" setup></script>

<template>
    <div id="MainHeader">
        <div class="logo">
            <img src="../assets/RaijoffleLogo.png" alt="Raijoffle Web Logo" />
        </div>
        <div>
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/login">Login</router-link>
            </nav>
        </div>
    </div>
</template>
<style scoped>
#MainHeader {
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
}
.logo {
    height: 40px;
}
.logo img {
    height: 100%;
}
nav a {
    color: #141414;
    padding: 0px 10px;
    text-decoration: none;
}
nav a:last-of-type {
    padding: 0px 0px;
}
nav a.router-link-exact-active {
    color: red;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}
</style>
