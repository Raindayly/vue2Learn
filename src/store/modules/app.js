const app = {
  state:{
    testList:[]
  },
  mutations:{
    showTestList(state){
      console.log(state.testList);
    },
    addTestList(state){
      state.testList.push(1)
    }
  }
}

export default app;