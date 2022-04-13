<template>
  <header>
    <div
    class="hamburger"
    @click="callSideBarEvent()"
    >
      <div class="ham-line"></div>
    </div>

    <div class="colorSwitch">

      <bold-icon />

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
      callSideBarEvent() {

          // send an event name to parent
          //  call is recievd in child component tag in parent
          this.$emit('sideBarCall');
      },
    },
  };
</script>