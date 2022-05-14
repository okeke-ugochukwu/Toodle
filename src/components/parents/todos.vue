<template>
  <div
  class="todoApp"
  :class="{ sideBarShown: sideBarStatus }"
  >

    <mobileHeader />

    <helloSection />

    <catgSection />

    <taskSection />

    <newTaskBtn />

  </div>
</template>

<script>
    import mobileHeader from "../childs/sharedComponents/mobileHeader.vue";
    import helloSection from "../childs/todoComponents/helloSection.vue";
    import catgSection from "../childs/todoComponents/catgSection.vue";
    import taskSection from "../childs/todoComponents/taskSection.vue";
    import newTaskBtn from "../childs/todoComponents/newTaskBtn.vue";


    export default {
      name: "todos",

      components: {
        mobileHeader,
        helloSection,
        catgSection,
        taskSection,
        newTaskBtn,
      },

      data() {
        return {
          username: 'User',

        }
      },

      computed: {
        sideBarStatus() {
          return this.$store.state.sideBarStatus
        },

        allTasks() {
          return this.$store.state.allTasks;
        },

        allTasksWithoutCatg() {
          return [].concat.apply([], Object.values(this.allTasks[0]))
        }
      },


      methods: {

        //SIDE BAR CONTROLS. Event recieved from 'mobileHeader'
        showSideBar() {
          if (screen.width < 450) {
            if (this.sideBarStatus == false) {
              this.sideBarStatus = true;
            } else {
              this.sideBarStatus = false;
            }
          }
        },

        hideSideBar() {
            if (screen.width < 450) {
              if (this.sideBarStatus == false) {
                this.sideBarStatus = false
              }
              else if(this.sideBarStatus == true) {
                  this.sideBarStatus = false
              }
          }
        },

        setSelectedCatg(dataRecieved) {
          this.selectedCatg = dataRecieved
        },

        createNewAllTasksData() {
          this.newAllTasksData = [].concat.apply([], Object.values(this.allTasks[0]))
        }

      },
    };
</script>
