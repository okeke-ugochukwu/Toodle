
<template>
   <progress max="100" value="80">

    </progress>

    {{completedTasks}}
</template>

<script>
    export default {
        name: 'progressBar',

        data() {
            return {
                tasksData: undefined,
                completedTasks: 0
            }
        },

        props: {
            
        },

        created() {
            this.setNewTasksData();
            // this.countCompletedTasks()

        },

        computed: {
            totalCompletedTasks() {
                return this.completedTasks
            },
        },

        watch: {
            alteredSelectedData: {
                handler(newData) {
                    var counter = 0;

                    newData.forEach(task => {
                            if(task.status == true) {
                                counter++;
                                this.completedTasks = counter
                            }
                    })
                },

                deep: true
            }
        },

        methods: {
            setNewTasksData() {
                this.tasksData = this.newTasksData
            },
            // countCompletesTasks() {
                // var counter = 0;

                // this.alteredSelectedData.forEach(task => {
                //         if(task.status == true) {
                //             counter++;
                //             this.completedTasks = counter
                //         }
                // });

            // }

        },
    }
</script>