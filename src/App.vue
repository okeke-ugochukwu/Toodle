<template>
    <sideBar />
    <router-view></router-view>
    <newTaskModal />

</template>

<script>
  import sideBar from './components/parents/sideBar.vue';
  import newTaskModal from './components/parents/addNewTask.vue';



  export default {
    name: 'App',

    components: {
      sideBar,
      newTaskModal
    },

  }
</script>

<style lang="scss">
   @import './styles/style.scss'
</style>
