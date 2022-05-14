
<template>
    <div class="progress">
        <progress max="100" :value="percentageComplete">

        </progress>

        <div class="dummyProgressBar">
            <div class="dummyProgressBar_level">

            </div>
        </div>
    </div>

    {{completedTasks}}
    {{uncompletedTasks}}
    {{percentageComplete}}
    {{numberOfTasks}}
</template>

<script>

    export default {
        name: 'progressBarAll',

        data() {
            return {
                uncompletedTasks: 0,
                temp: null
            }
        },
        computed: {
            tasks() {
                return this.$store.getters.allTasksNoCatgs;
            },
            numberOfTasks(){
                return this.tasks.length;
            },
            completedTasks() {
                return this.numberOfTasks - this.uncompletedTasks;
            },
            percentageComplete() {
                return ((this.completedTasks / this.numberOfTasks) * 100);
            }
        },

        watch: {
            tasks: {
                handler(newTasksList) {
                    this.countUncompletedTasks(newTasksList);
                },
                deep: true,
                immediate: true,
            },

            percentageComplete: {
                handler() {
                    document.querySelector(".dummyProgressBar_level").style.width = this.percentageComplete + '%'
                }
            },


        },


        methods: {
            countUncompletedTasks(tasksList) {
                var tasksCounter = 0;

                tasksList.forEach(task => {

                        if (task.status === false ) {
                            ++tasksCounter;
                            this.uncompletedTasks = tasksCounter ;
                        }

                        // the counter cannot get to zero because at the toggle of the last uncompleted..
                        //task, there's is not more uncompleted task to count,which means there's nore 'task.status' that is..
                        //still false; so therefore no more increment
                        //so the increment is implemented manually in the else statement below

                        else {
                            tasksCounter + 1
                            this.uncompletedTasks = tasksCounter ;
                        }

                });

                this.sendPercentageCompleted()

            },

            sendPercentageCompleted() {
                this.$store.commit('setPercentageComplete', this.percentageComplete)
            },

            calPercentageComplete() {
                ((this.completedTasks / this.numberOfTasks) * 100);
            }

        },
    }
</script>

<style lang="scss" scoped>

@import '/src/styles/colors';

    .dummyProgressBar {
        &_level {
            background: $purple
        }
    }

</style>