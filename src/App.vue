<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import home from '@/components/main'
export default {
  name: 'App',
  data(){
    return {
      msg:'test'
    }
  },
  components:{
    home
  }
}
</script>

<style>
#app {
  height:100%;
}
</style>
