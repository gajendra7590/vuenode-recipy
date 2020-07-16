import Vue from 'vue'
import VueRouter from 'vue-router';
//Import All component Here
import Dashboard from './components/protected/Dashboard';
//Categories
import CategoriesList from './components/protected/categories/CategoriesList';
//Users
import UsersList from './components/protected/users/UsersList';
//Auth
import Login from './components/public/Login';
import ForgotPassword from './components/public/ForgotPassword';
import SetNewPassword from './components/public/SetNewPassword';
//Logout
import LogOut from './components/protected/LogOut';
//Admin Profile
import UpdateProfile from './components/protected/user-profile/UpdateProfile';
import ChangePassword from './components/protected/user-profile/ChangePassword';

Vue.use(VueRouter)
const router = new VueRouter({
    base: '/admin',
    mode: "history",
    linkExactActiveClass: "active",
    routes: [
        { name: "login-admin", path: "/login", component: Login, meta: { protectedURL: false } },
        { name: "forgot-password-admin", path: "/forgot-password", component: ForgotPassword, meta: { protectedURL: false } },
        { name: "forgot-password-new", path: "/set-new-password", component: SetNewPassword, meta: { protectedURL: false } },
        { name: "loggedout-admin", path: "/logout", component: LogOut, meta: { protectedURL: true } },
        { name: "update-profile", path: "/update-profile", component: UpdateProfile, meta: { protectedURL: true } },
        { name: "change-password", path: "/change-password", component: ChangePassword, meta: { protectedURL: true } },
        { name: "index", path: "/", redirect: "/dashboard", meta: { protectedURL: true } },
        { name: "dashboard", path: "/dashboard", component: Dashboard, meta: { protectedURL: true } },
        { name: "categories-list", path: "/categories", component: CategoriesList, meta: { protectedURL: true } },
        { name: "users-list", path: "/users", component: UsersList, meta: { protectedURL: true } },
        { name: "users-list", path: "**", redirect: 'dashboard' }
    ],
    // scrollBehavior(to, from, savedPosition) {
    //     return { x: 0, y: 0 }
    // }
});

export default router;