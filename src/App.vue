<template>
  <div class="app">
      <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue'
    import CreateTheme from './open/theme/createTheme.js'

    // 导入主题样式文件
    onMounted(()=>{
        CreateTheme();
    })

</script>


<style scoped>
.app{
    width: 100vw;
    height: 100vh;
}
::-webkit-scrollbar{
        display: none;
    }
</style>
