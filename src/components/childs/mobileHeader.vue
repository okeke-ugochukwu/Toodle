<template>
  <header>
    <div
      class="hamburger"
      @click="toggleSideBarStatus"
    >
      <menu-icon class="header-icons menu-icon"/>
    </div>

    <div class="colorSwitch">
      <moon-stars-icon class="header-icons dark-mode-icon"/>
    </div>

  </header>
</template>

<script>

  export default {

    name: "mobileHeader",

    data() {
      return {};
    },

    methods: {
      toggleSideBarStatus() {
        this.$store.commit('toggleSideBar');
      }
    }

  };
</script>