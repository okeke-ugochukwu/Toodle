<template>
  <header>
    <div
    class="hamburger"
    @click="callSideBarEvent()"
    >
      <div class="ham-line"></div>
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