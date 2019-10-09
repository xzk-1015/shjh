<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import hello from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    hello
  }
}
</script>

<style>

</style>
