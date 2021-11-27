import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import UserHunts from "../pages/UserHunts.vue";
import SignIn from "../pages/SignIn.vue";
import Register from "../pages/Register.vue";
import Profile from "../pages/Profile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user-hunts",
    name: "UserHunts",
    component: UserHunts,
  },
  {
    path: "/sign-in",
    name: "Sign-In",
    component: SignIn
   },
   {
    path: "/register",
    name: "Register", 
    component: Register 
   },
   {
    path: "/profile",
    name: "Profile", 
    component: Profile 
   }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;