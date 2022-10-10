
const homeRoute = {
  path:"/",
  name:"main",
  component:import("@/views/Main.vue"),
  children:[{
    path:"home",
    name:"home",
    component:import("@/views/View1.vue")
  }]
}

export const routes = [
  homeRoute
]
