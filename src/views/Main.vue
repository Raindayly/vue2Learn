<template>
  <div class="container-main-main">
    <div>
      <Sidebarmenu></Sidebarmenu>

    </div>
    <div>
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
</style>