<template>
    <section class="catg">
        <div class="catg_title sec_title">
            <h4>
                CATEGORIES
            </h4>
        </div>

        <div class="catg_scroll">
            <div class="catg_slide">

                <!-- Object.entries makes array out of tasks data -->
                <div class="catg_card"
                 @click="sendCatgoryFilter('all')"
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

                    <progressBar
                        :newTasksData = "newTasksData"
                        :alteredSelectedData = "alteredSelectedCatgData"
                    />

                </div>

                <div class="catg_card"
                    v-for="taskCategory in this.tasks" :key="taskCategory.id"
                    ref="taskCategories"
                    @click="sendCatgoryFilter(taskCategory[0])"
                 >

                    <div class="catg_card__tskNum">
                        {{  taskCategory[1].length  }} tasks
                    </div>

                    <div class="catg_card__tskDescr">
                        <h5 class="mainHeadings">
                            <!-- get object array being iterated through, get First character, change case and add to string -->
                           {{ taskCategory[0][0].toUpperCase() + taskCategory[0].substring(1) }}
                        </h5>
                    </div>

                </div>

            </div>
        </div>


    </section>


</template>

<script>

    import progressBar from '../childs/progressBar.vue';


    export default {
        name: 'catgSection',

        components: {
            progressBar
        },

        data() {
            return {

            }
        },

        props: {

        },

        computed: {
            tasks() {
                return  Object.entries(this.$store.state.allTasks[0])
            },
            tasksNoCatgs(){
                return this.$store.getters.allTasksNoCatgs;
            }
        },

        created() {

        },

        mounted() {
            // this.taskCategories = this.$refs.taskCategories
        },

        methods: {
            sendCatgoryFilter(selectedCategory) {
                this.$store.commit('setselectedCatgFilter', selectedCategory)
            },
        },
    }

</script>