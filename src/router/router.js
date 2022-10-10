
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
  }]
}

export const routes = [
  homeRoute
]
