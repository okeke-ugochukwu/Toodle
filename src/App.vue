<template>
    <sideBar />
    <appFrame />
    <newTaskModal />

</template>

<script>
  import sideBar from './components/parents/sideBar.vue';
  import appFrame from './components/parents/appFrame.vue';
  import newTaskModal from './components/parents/addNewTask.vue';



  export default {
    name: 'App',

    components: {
      sideBar,
      appFrame,
      newTaskModal
    },

  }
</script>

<style lang="scss">
   @import './styles/style.scss'
</style>
