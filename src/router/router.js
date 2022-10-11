
const homeRoute = {
  path: "/",
  name: "main",
  redirect: "/home",
  component: () => import("@/views/Main"),
  children: [{
    path: "home",
    name: "home",
    component: () => import("@/views/Home.vue")
  },{
    path:"content_list",
    name: "content_list",
    component: () => import("@/views/List/contentList.vue")
  },{
    path:"tabs_tab",
    name: "tabs_tab",
    component: () => import("@/views/tabs/tab.vue")
  },{
    path:"excel",
    name: "excel",
    component: () => import("@/views/excel/excel.vue")
  }]
}

export const routes = [
  homeRoute
]
