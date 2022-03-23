<template>
    <section
    class="tasks"
    >
        <div class="tasks_title sec_title">
            <h4>
                TASKS
            </h4>
        </div>

        <div class="tasks_bars">
            <!--
                Explaination of this v-for logic is in 'catgSection' component
             -->
            <div
                class="tasks_bars__field"
                v-for="task in [].concat.apply([], Object.values(this.allTasks[0]))" :key="task.id"
                @click="checkTask"
             >
                    <div class="checkBox">
                    <label for="">
                        <input type="checkbox" name="" id="" />
                    </label>
                </div>

                <div class="checkText">
                    {{task.descr}}
                </div>
            </div>



        </div>



    </section>
</template>

<script>
export default {
    name: 'taskSection',

    data() {
        return {

            allTasksProgressColor: '#0669FF',

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
                                status: 'uncompleted',
                            },

                            {
                                id: 20,
                                type: 'bussiness',
                                descr: 'Send out some applications',
                                status: 'uncompleted',
                            },

                            {
                                id: 30,
                                type: 'bussiness',
                                descr: 'Contact ZhinChao',
                                status: 'uncompleted',
                            }

                        ],

                        'personal':  [

                            {
                                id: 40,
                                type: 'personal',
                                descr: 'Commit some code',
                                status: 'uncompleted',
                            },

                            {
                                id: 50,
                                type: 'personal',
                                descr: 'Make pen for sharighan animation',
                                status: 'uncompleted',
                            },

                             {
                                id: 60,
                                type: 'personal',
                                descr: 'Hit the gym',
                                status: 'uncompleted',
                            },

                             {
                                id: 70,
                                type: 'personal',
                                descr: 'Go Battle Royale',
                                status: 'uncompleted',
                            }
                        ],

                        'miscellaneous':  [
                            {
                                id: 80,
                                type: 'miscellaneous',
                                descr: 'Get a external monitor',
                                status: 'uncompleted',
                            },

                            {
                                id: 90,
                                type: 'miscellaneous',
                                descr: 'Buy mattress. 4ft * 6ft * 1ft',
                                status: 'uncompleted',
                            },

                            {
                                id: 100,
                                type: 'miscellaneous',
                                descr: 'Order some palletes',
                                status: 'uncompleted',
                            },

                            {
                                id: 110,
                                type: 'miscellaneous',
                                descr: 'Order some palletes',
                                status: 'uncompleted',
                            }
                        ],
                    }
            ]
        }
    },

    created () {
        this.sendDataToParent();
    },

    methods: {
        sendDataToParent() {
          this.$emit("recieveDataFromTasksSection", this.allTasks)
        },

        checkTask() {
            alert("code works")
        }


    },
}
</script>
