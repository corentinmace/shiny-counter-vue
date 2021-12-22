import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import UserHunts from "../pages/UserHunts.vue";
import SignIn from "../pages/SignIn.vue";
import Register from "../pages/Register.vue";
import Profile from "../pages/Profile.vue";
import Hunt from "../pages/Hunt.vue";
import Settings from "../pages/Settings.vue";

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
   },
   {
     path: "/hunt/:id",
     name: "Hunt", 
     component: Hunt
   },
   {
     path: "/settings",
     name: "Settings", 
     "component" : Settings
   }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;