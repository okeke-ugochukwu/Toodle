<template>
  <header>
    <div
    class="hamburger"
    @click="callSideBarEvent()"
    >
      <div class="ham-line"></div>
    </div>

    <div class="colorSwitch">

      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon-stars dark-mode-icon" >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
        <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
        <path d="M19 11h2m-1 -1v2"></path>
      </svg>

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