<template>
  <div>
    <button @click="handleMutationShowTestList">MutationShowTestList</button>
    <button @click="handleAddMutationTestList">AddMutationTestList</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    handleMutationShowTestList(){
      this.$store.commit("showTestList")
    },
    handleAddMutationTestList(){
      this.$store.commit("addTestList")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
