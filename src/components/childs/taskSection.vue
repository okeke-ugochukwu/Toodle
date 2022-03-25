<template>
    <section
    class="tasks"
    v-if="this.selectedCatgData"
    >
        <div class="tasks_title sec_title">
            <h4>
                TASKS
            </h4>
        </div>



        <div class="tasks_bars">

            <!--
                Explaination of this v-for logic is in 'catgSection' component
                [].concat.apply([], Object.values(this.allTasks[0]))
             -->
git 
            <div
                class="tasks_bars__field"
                v-for="task in this.selectedCatgData" :key="task.id"
                @click="checkTask(task)"
             >

                <label class="checkBox" for="">
                    <input type="checkbox" name="checkBox" id="checkBox" v-model="task.status"/>
                </label>

                <div class="checkText" :class="{completed: task.status}">
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

            allTasks: undefined

        }
    },

    created () {

        this.setAllTasks();

    },

    props: {
        tasksData: {
                type: Array,
                default: () => [],
        },
        selectedCatgData: {
            type: Array,
            default: undefined
        },
    },

    methods: {

         setAllTasks() {
            this.allTasks = this.selectedCatgData
        },

        checkTask(task) {
            switch (task.status) {
                case false:
                        task.status = true;
                    break;

                case true:
                        task.status = false;
                    break;

                default:
                    break;
            }

            this.sendUncompletedTasks()
        },

        sendUncompletedTasks() {
            this.$emit("recieveChangedData", this.selectedCatgData)
        }
    },
}
</script>
