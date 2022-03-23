<template>
  <div
  class="appFrame"
  :class="{ sideBarShown: sideBarStatus }"
  >

    <mobileHeader  @sideBarCall = "showSideBar()" />


    <helloSection />

    <catgSection
      :tasksData = "taskSectionData"
    />

    <taskSection
      @recieveDataFromTasksSection = "setTaskSectionData"
    />

    <newTaskBtn />
  </div>
</template>

<script>
import mobileHeader from "../childs/mobileHeader.vue";
import helloSection from "../childs/helloSection.vue";
import catgSection from "../childs/catgSection.vue";
import taskSection from "../childs/taskSection.vue";
import newTaskBtn from "../childs/newTaskBtn.vue";


export default {
  name: "appFrame",

  components: {
    mobileHeader,
    helloSection,
    catgSection,
    taskSection,
    newTaskBtn,
  },


  data() {
    return {
      sideBarStatus: false,

      username: 'User',

      taskSectionData: ['']

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


    setTaskSectionData(dataRecievedFromTaskSection) {
        this.taskSectionData = dataRecievedFromTaskSection
    },


  },
};
</script>
