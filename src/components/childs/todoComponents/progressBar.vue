<template>
    <progress max="100" :value="percentageComplete">

    </progress>

    <!-- {{tasks}} -->
</template>

<script>
    export default {

        name: 'progressBar',

        data() {
            return {
                uncompletedTasks: null
            }
        },

        props: {
            tasksInView: {
                type: Array,
                default: () => []
            },
        },

        computed: {
            tasks() {
                return [].concat.apply([], Object.values(this.tasksInView[1]));
            },
            numberOfTasks() {
              return  this.tasks.length;
            },
            completedTasks() {
                return this.numberOfTasks - this.uncompletedTasks;
            },
            percentageComplete() {
                return Math.ceil((this.completedTasks / this.numberOfTasks) * 100)
            }
        },

        watch: {
            tasks: {
                handler(newTasksList) {
                    this.countUncompletedTasks(newTasksList)
                },

                deep: true,
                immediate: true,
            }

        },

        methods: {
            countUncompletedTasks(tasksList) {
                var tasksCounter = 0;

                tasksList.forEach(task => {

                    if (task.status === false ) {
                        ++tasksCounter;
                        this.uncompletedTasks = tasksCounter ;
                    }

                    else {
                        tasksCounter + 1
                        this.uncompletedTasks = tasksCounter ;
                    }

                });

            }
        }
    }
</script>

<style lang="scss" scoped>
    progress {
        width: 100%;
        background: #dfe4f4;
        height: 6px;
        width: 100%;
        // transition: 5s;
    }
</style>