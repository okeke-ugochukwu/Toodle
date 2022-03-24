<template>

  <!--
    'sideBarShown' is the class bound to
    'sideBarStatus' is the boolean data value that toggles the class
   -->
  <div
  class="appFrame"
  :class="{ sideBarShown: sideBarStatus }"
  >

    <mobileHeader  @sideBarCall = "showSideBar()" />


    <helloSection />

    <catgSection
      :tasksData = "allTasks"
      @recieveSelectedCatgData = "setSelectedCatg"
    />

    <taskSection
      :tasksData = "allTasks"
      :selectedCatgData = "selectedCatg"
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

      allTasksProgressColor: '#0669FF',

      selectedCatg: [],
      //Each task is an object, placed in its parent (task category) which an array
      //of all tasks of the same type.

      //All task categorises are an item in thier parent, an ojbect
      //which is the only child of its parent (all task categoris), an array

      //I adopted this method to see that each task is an object, and so task categories can be named
      allTasks: [

              {
                  'bussiness': [

                      {
                          id: 10,
                          type: 'bussiness',
                          descr: 'Make new connections',
                          status: false,
                      },

                      {
                          id: 20,
                          type: 'bussiness',
                          descr: 'Send out some applications',
                          status: false,
                      },

                      {
                          id: 30,
                          type: 'bussiness',
                          descr: 'Contact ZhinChao',
                          status: false,
                      }

                  ],

                  'personal':  [

                      {
                          id: 40,
                          type: 'personal',
                          descr: 'Commit some code',
                          status: false,
                      },

                      {
                          id: 50,
                          type: 'personal',
                          descr: 'Make pen for sharighan animation',
                          status: false,
                      },

                        {
                          id: 60,
                          type: 'personal',
                          descr: 'Hit the gym',
                          status: false,
                      },

                        {
                          id: 70,
                          type: 'personal',
                          descr: 'Go Battle Royale',
                          status: false,
                      }
                  ],

                  'miscellaneous':  [
                      {
                          id: 80,
                          type: 'miscellaneous',
                          descr: 'Get a external monitor',
                          status: false,
                      },

                      {
                          id: 90,
                          type: 'miscellaneous',
                          descr: 'Buy mattress. 4ft * 6ft * 1ft',
                          status: false,
                      },

                      {
                          id: 100,
                          type: 'miscellaneous',
                          descr: 'Order some palletes',
                          status: false,
                      },

                      {
                          id: 110,
                          type: 'miscellaneous',
                          descr: 'Order some palletes',
                          status: false,
                      }
                  ],
              }
      ]

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
    }


  },
};
</script>
