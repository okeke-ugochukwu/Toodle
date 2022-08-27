<template>
    <div class="progress">
        <progress max="100" :value="percentageComplete">

        </progress>

        <div class="dummyProgressBar">
            <div class="dummyProgressBar_level" 
             ref="dummyProgressBar_level" 
             :style="getColorCode()" 
            >

            <div 
             class="dummyProgressBar_indc"
              :style="getColorCode()" 
            >
                
            </div>

            </div>
        </div>
    </div>

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
             tasksColors() {
                return this.$store.state.tasksCatgColors.catgs
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

            },

            getColorCode() {
                return 'background: ' + this.tasksColors[this.tasksInView[0]];
            }
        }
    }
</script>

<style lang="scss" scoped>
   
    @import '/src/styles/colors';

    .dummyProgressBar {
        &_level {
            background: $purple;

            &::after {
                display: none;
            }
        }

        &_indc {
            content: '';
                width: 6px;
                height: 4px;
                background: $purple;
                position: absolute;
                top: -4px;
                right: 0;
                border-top-right-radius: 100px;
                border-top-left-radius: 100px;
        }
    }

</style>