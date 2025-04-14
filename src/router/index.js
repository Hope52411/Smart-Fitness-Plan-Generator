import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import About from "../views/About.vue";

// 子页面组件
import FitnessPlanner from "@/views/FitnessPlanner.vue";
import Community from "@/views/Community.vue";
import ContactUs from "@/views/ContactUs.vue";
import BMICalculator from "@/views/tools/BMICalculator.vue";
import CalorieCalculator from "@/views/tools/CalorieCalculator.vue";
import WaterCalculator from "@/views/tools/WaterCalculator.vue";
import HIITTimer from "@/views/tools/HIITTimer.vue";
import RMCalculator from "@/views/tools/RMCalculator.vue";
import Tools from "@/views/Tools.vue";
import MuscleMap from "@/views/MuscleMap.vue";
import Friends from "@/views/Friends.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },

  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "friends",
        name: "Friends",
        component: Friends,
      },
      {
        path: "fitness-planner",
        component: FitnessPlanner,
      },
      {
        path: '',
        name: 'MuscleMap',
        component: MuscleMap,
      },
      {
        path: "community",
        component: Community,
      },
      {
        path: "contact",
        component: ContactUs,
      },
      {
        path: 'tools',
        component: Tools,
      },
      {
        path: "tools/bmi",
        name: "BMICalculator",
        component: BMICalculator,
      },
      {
        path: "tools/calorie",
        name: "CalorieCalculator",
        component: CalorieCalculator,
      },
      {
        path: "tools/water",
        name: "WaterCalculator",
        component: WaterCalculator,
      },
      {
        path: "tools/hiit",
        name: "HIITTimer",
        component: HIITTimer,
      },
      {
        path: "tools/rm",
        name: "RMCalculator",
        component: RMCalculator,
      },
      {
        path: 'muscle/:part',
        name: 'MusclePart',
        component: () => import('@/views/DynamicMuscleLoader.vue'),
        props: true
      },
      
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

// ✅ 路由守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");
  const userRole = sessionStorage.getItem("userRole");

  if (to.path === "/admin" && userRole !== "Admin") {
    next({ path: "/" });
  } else if ((to.path.startsWith("/home") || to.path === "/admin") && !isAuthenticated) {
    next({ path: "/" });
  } else {
    next();
  }
});

export default router;
