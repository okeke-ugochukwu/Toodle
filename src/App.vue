<template>
    <sideBar />
    <appFrame />
</template>

<script>
import sideBar from './components/parents/sideBar.vue'
import appFrame from './components/parents/appFrame.vue'


export default {
  name: 'App',

  components: {
    appFrame,
    sideBar
  },

  methods: {
    showSideBar() {

    }
  }


}
</script>

<style lang="scss">
   @import './styles/style.scss'
</style>
