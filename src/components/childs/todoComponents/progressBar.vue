<template>
    <div class="progress">
        <progress max="100" :value="percentageComplete">

        </progress>

        <div class="dummyProgressBar">
            <div class="dummyProgressBar_level" ref="dummyProgressBar_level">

            </div>
        </div>
    </div>

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
            },

            percentageComplete: {
                handler() {

                    //this logic was created to prevent the '.dummyProgressBar_level' div's pseudo
                    //element (ie. the progress indicator) from falling outside the the dummyProgressBar
                    //when 'percentageComplete' is zero
                    
                    switch (this.percentageComplete) {
                        case 0: this.$refs.dummyProgressBar_level.style.width = '6%';
                        break;

                        default: this.$refs.dummyProgressBar_level.style.width = this.percentageComplete + '%'
                    }
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
   
    @import '/src/styles/colors';

    .dummyProgressBar {
        &_level {
            background: $purple;
        }
    }

</style>