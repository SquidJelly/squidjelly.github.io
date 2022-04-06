import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PortfolioView from "../views/PortfolioView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "portfolio",
    component: PortfolioView,
    meta: {
      title: "SquidJelly - Portfolio",
      metaTags: [
        {
          name: "description",
          content: "A collection of projects I've worked on over the years.",
        },
        {
          property: "og:description",
          content: "A collection of projects I've worked on over the years.",
        },
      ],
    },
  },
  {
    path: "/tech",
    name: "tech",
    component: () =>
      import(/* webpackChunkName: "tech" */ "../views/TechView.vue"),
    meta: {
      title: "SquidJelly - Tech",
      metaTags: [
        {
          name: "description",
          content:
            "A list of technologies and techniques I've used in projects.",
        },
        {
          property: "og:description",
          content:
            "A list of technologies and techniques I've used in projects.",
        },
      ],
    },
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      title: "SquidJelly - About",
      metaTags: [
        {
          name: "description",
          content: "A quick introduction about myself.",
        },
        {
          property: "og:description",
          content: "A quick introduction about myself.",
        },
      ],
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ContactView.vue"),
    meta: {
      title: "SquidJelly - Contact",
      metaTags: [
        {
          name: "description",
          content: "How to get in touch!",
        },
        {
          property: "og:description",
          content: "How to get in touch!",
        },
      ],
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../views/404View.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//type for meta.metaTags object
type metaType = {
  [key: string]: string;
};

//set title and meta tags
router.beforeEach((to, from, next) => {
  //Set doc title
  if (typeof to.meta.title == "string") document.title = to.meta.title;

  // Remove any meta tags from the document we previously added
  Array.from(document.querySelectorAll("[data-vue-meta]")).map((el) =>
    el.parentNode?.removeChild(el)
  );

  // Turn the metaTag definitions into elements in the head.
  if (to.meta.metaTags instanceof Array) {
    to.meta.metaTags
      .map((tagDef: metaType) => {
        const tag = document.createElement("meta");

        Object.keys(tagDef).forEach((key: string) => {
          tag.setAttribute(key, tagDef[key] as string);
        });

        //track created metaTags for removal on subsequent pages
        tag.setAttribute("data-vue-meta", "");

        return tag;
      })
      // Add the meta tags to the document head.
      .forEach((tag: HTMLElement) => document.head.appendChild(tag));
  }

  next();
});

export default router;
