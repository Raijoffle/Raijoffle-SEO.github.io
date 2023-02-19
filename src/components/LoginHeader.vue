<template>
    <div class="LoginHeader">
        <div class="logo">
            <img src="../assets/RaijoffleLogo.png" alt="Raijoffle Web Logo" />
        </div>
        <div>
            <nav>
                <router-link to="/">Home</router-link>
            </nav>
        </div>
    </div>
</template>

<style scoped>
#LoginHeader {
    width: 200px;
    height: 100%;
    background-color: red;
    display: flex !important;
    box-sizing: border-box;
    padding: 0 20px;
}
nav {
    transform: rotate(-90deg);
}
.logo {
    height: 40px;
    transform: rotate(-90deg);
    margin-bottom: 80px;
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
