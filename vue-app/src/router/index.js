import {createRouter, createWebHistory} from "vue-router";

import Dashboard from "@/views/Dashboard.vue";
import AllSubjects from "@/views/AllSubjects.vue";
import Subject from "@/views/Subject.vue";
import Login from "@/views/Login.vue";
import DataTest from "@/views/DataTest.vue";
import Users from "@/views/Users";
import NotFound from "@/views/NotFound";

const routes = [
    {
        path: "/:catchAll(.*)",
        name: 'Default path',
        component: Dashboard,
        meta: {
            title: 'Twoje przedmioty - Resource Manager',
            requireAuth: true,
        }
    },
    {
        path: "/404",
        name: "NotFound",
        component: NotFound,
        meta: {
            title: '404 - GradesApp',
            requireAuth: true,
        }
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            title: 'Twoje przedmioty - GradesApp',
            requireAuth: true,
        }
    },
    {
        path: "/subjects",
        name: "Subjects",
        component: AllSubjects,
        meta: {
            title: 'Wszystkie przedmioty - GradesApp',
            requireAuth: true,
        }
    },
    /*    {
            path: "/students",
            name: "Students",
            component: Students,
            meta: {
                title: 'Students - GradesApp',
                requireAuth: true,
            }
        },*/
    {
        path: "/users",
        name: "Users",
        component: Users,
        meta: {
            title: 'Użytkownicy - GradesApp',
            requireAuth: true,
        }
    },
    {
        path: "/subject/:id",
        name: "Subject",
        component: Subject,
        meta: {
            title: 'Przedmiot - GradesApp',
            requireAuth: true,
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: 'Login - GradesApp',
            requireAuth: false
        }
    },
    {
        path: "/test",
        name: "Test",
        component: DataTest,
        meta: {
            title: 'Test subpage',
            requireAuth: false
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;