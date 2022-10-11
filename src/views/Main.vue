<template>
  <div class="container-main-main">
    <div class="sidebarmenu">
      <Sidebarmenu></Sidebarmenu>
    </div>
    <div class="main-center">
      <h1>view组件训练场</h1>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Sidebarmenu from '@/components/menu/sidebarmenu.vue';
export default {
  components: { Sidebarmenu }
}
</script>

<style>
  .container-main-main{
    display: flex;
    
  }
  .main-center{
      width: calc(100vw - 240px);

  }
  /* .sidebarmenu{
      flex-basis: 30%;
  } */
</style>