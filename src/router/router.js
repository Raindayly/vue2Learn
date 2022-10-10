
const homeRoute = {
  path:"/",
  name:"main",
  redirect:"/home",
  component:()=>import("@/views/Main"),
  children:[{
    path:"home",
    name:"home",
    component:()=>import("@/views/View1.vue")
  }]
}

export const routes = [
  homeRoute
]
