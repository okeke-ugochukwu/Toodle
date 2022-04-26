<template>
    <section
        class="catg"
        v-if="tasks"
    >
        <div class="catg_title sec_title">
            <h4>
                CATEGORIES
            </h4>
        </div>

        <div class="catg_scroll">
            <div class="catg_slide">

                <!-- All tasks -->
                <div class="catg_card"
                 @click="sendCatgoryFilter('all', this.tasksNoCatgs)"
                >

                    <div class="catg_card__tskNum">
                        <!--
                            Target array member that's actual tasks data,
                            Get the all  key pair values (arrays) which are the actual tasks (grouped), make an array out of these arrays
                            Merge all the arrays (kay pair values) in the just created array in one
                            At this point only individual tasks (objects) remain in the array. No nested arrays
                            Now get number of these tasks and display
                         -->
                        {{ this.tasksNoCatgs.length }} tasks
                    </div>


                    <div class="catg_card__tskDescr">
                        <h5 class="mainHeadings">
                            All tasks
                        </h5>
                    </div>

                    <progressBarAll/>

                </div>

                <!-- Completed tasks -->
                <div class="catg_card"
                 @click="sendCatgoryFilter('all', this.tasksNoCatgs)"
                >

                    <div class="catg_card__tskNum">
                        {{this.completedTasks}} tasks
                    </div>


                    <div class="catg_card__tskDescr">
                        <h5 class="mainHeadings">
                            Completed
                        </h5>
                    </div>

                    <progressBarAll/>

                </div>

                <!--Uncompleted  tasks -->
                <div class="catg_card"
                 @click="sendCatgoryFilter('all', this.tasksNoCatgs)"
                >

                    <div class="catg_card__tskNum">
                        {{this.uncompletedTasks}} tasks
                    </div>


                    <div class="catg_card__tskDescr">
                        <h5 class="mainHeadings">
                            Uncompleted
                        </h5>
                    </div>

                    <progressBarAll/>

                </div>

                <!-- Individual catg -->
                <div class="catg_card"
                    v-for="taskCategory in Object.entries(this.tasks)" :key="taskCategory.id"
                    ref="taskCategories"
                    @click="sendCatgoryFilter(taskCategory[0], taskCategory)"
                >
                    <!-- {{taskCategory}} -->
                    <div class="catg_card__tskNum">
                        {{  taskCategory[1].length  }} tasks
                    </div>

                    <div class="catg_card__tskDescr">
                        <h5 class="mainHeadings">
                            <!-- get object array being iterated through, get First character, change case and add to string -->
                           {{ taskCategory[0][0].toUpperCase() + taskCategory[0].substring(1).toLowerCase() }}
                        </h5>
                    </div>

                    <progressBar
                        :tasksInView = taskCategory
                    />

                </div>
            </div>
        </div>

    </section>
</template>

<script>

    import progressBarAll from './progressBarAll.vue';
    import progressBar from './progressBar.vue';


    export default {
        name: 'catgSection',

        components: {
            progressBarAll,
            progressBar
        },

        data() {
            return {
                taskCategory: null
            }
        },

        props: {

        },

        computed: {
            tasks() {
                return this.$store.state.allTasksContainer.allTasks
            },
            tasksNoCatgs(){
                return this.$store.getters.allTasksNoCatgs;
            },
            completedTasks(){
                return this.$store.getters.completedTasks;
            },
            uncompletedTasks(){
                return this.$store.getters.uncompletedTasks;
            }
        },

        methods: {
            sendCatgoryFilter(selectedCategory, taskCategory) {
                this.$store.commit('setselectedCatgFilter', selectedCategory);

                this.setTasksCategory(taskCategory);
            },

            setTasksCategory(taskCategory) {
                this.taskCategory = taskCategory
            },
        },
    }

</script>