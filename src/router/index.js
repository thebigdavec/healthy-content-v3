import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: ""
    }
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "About Us"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/services",
    name: "Service",
    meta: {
      title: "Services"
    },
    component: () =>
      import(/* webpackChunkName: "services" */ "../views/Services.vue")
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    meta: {
      title: "Portfolio"
    },
    component: () =>
      import(/* webpackChunkName: "portfolio" */ "../views/Portfolio.vue")
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    meta: {
      title: "Testimonials"
    },
    component: () =>
      import(/* webpackChunkName: "testimonials" */ "../views/Testimonials.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    meta: {
      title: "Contact Us"
    },
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
