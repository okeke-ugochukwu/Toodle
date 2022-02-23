<template>
  <mobileHeader />
  <helloSection />
  <catgSection />
  <taskSection />
</template>

<script>
import mobileHeader from './components/mobileHeader.vue'
import helloSection from './components/helloSection.vue'
import catgSection from './components/catgSection.vue'
import taskSection from './components/taskSection.vue'

export default {
  name: 'App',
  components: {
    mobileHeader,
    helloSection,
    catgSection,
    taskSection
  }
}
</script>

<style lang="scss">
   @import './styles/style.scss'
</style>
