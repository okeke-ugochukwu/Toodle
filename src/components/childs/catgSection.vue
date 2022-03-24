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
                 v-for="dataObject in Object.entries(this.tasksData)" :key="dataObject.id"
                 @click="selectCatgory([].concat.apply([], Object.values(dataObject[1])))"
                >

                    <div class="catg_card__tskNum" >
                        <!--
                            Target array member that's actual tasks data,
                            Get the all  key pair values (arrays) which are the actual tasks (grouped), make an array out of these arrays
                            Merge all the arrays (kay pair values) in the just created array in one
                            At this point only individual tasks (objects) remain in the array. No nested arrays
                            Now get number of these tasks and display
                         -->
                        {{ [].concat.apply([], Object.values(dataObject[1])).length }} tasks
                    </div>


                    <div class="catg_card__tskDescr">
                        <h5 class="mainHeadings">
                            All tasks
                        </h5>
                    </div>

                </div>


                <div class="catg_card"
                 v-for="taskCategory in Object.entries(this.tasksData[0])" :key="taskCategory.id"
                 @click="selectCatgory([].concat.apply([], Object.values(taskCategory)[1]))"
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
    export default {
        name: 'catgSection',

        data() {
            return {
                sumOfTasks: 0,

                sumOfTasksCategory: 0,

                selectedCatg: ''
            }
        },

        props: {
            tasksData: {
                type: Array,
                default: () => [],
            },
        },

        created() {
            // this.sendSelectedCatgToParent();
        },

        methods: {
            // sendSelectedCatgToParent() {
            //     this.$emit("recieveSelectedCatgData", this.selectedCatg)
            // },

            selectCatgory(selectedCategory) {
                this.selectedCatg = selectedCategory
                this.$emit("recieveSelectedCatgData", this.selectedCatg)
            }
        },
    }

</script>