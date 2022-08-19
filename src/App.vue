<template>
    <sideBar />

    <div 
      class="toodleApps"
      :class="{ sideBarShown: sideBarStatus }"
    >
      <router-view></router-view>
    </div>


</template>

<script>
  import sideBar from './components/parents/sideBar.vue';

  export default {
    name: 'App',

    components: {
      sideBar,
    },

    computed: {
       sideBarStatus() {
          return this.$store.state.sideBarStatus
        },
    },

  }
</script>

<style lang="scss">
   @import './styles/style.scss'
</style>
