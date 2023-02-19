import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../Layouts/MainLayout.vue";
import LoginLayout from "../Layouts/LoginLayout.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/HomeView.vue"),
            meta: {
                layout: MainLayout,
            },
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../views/AboutView.vue"),
            meta: {
                layout: MainLayout,
            },
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../views/LoginView.vue"),
            meta: {
                layout: LoginLayout,
            },
        },
    ],
});

export default router;
