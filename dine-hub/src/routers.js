import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import AddCafe from './components/AddCafe.vue'
import UpdateCafe from './components/UpdateCafe.vue'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LoginPage',
        component: LoginPage,
        path: '/login'
    },
    {
        name: 'AddCafe',
        component: AddCafe,
        path: '/add'
    },
    {
        name: 'UpdateCafe',
        component: UpdateCafe,
        path: '/update/:id'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;