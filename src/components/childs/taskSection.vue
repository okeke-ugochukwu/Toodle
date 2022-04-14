<template>
    <section
    class="tasks"
    v-if="selectedCatg"
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
            <div
                class="tasks_bars__field"
                v-for="task in this.filteredTasks" :key="task.id"
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
import filterTasks from './modules/filter-tasks';

export default {
    name: 'taskSection',

     computed: {
            tasks() {
                return this.$store.state.allTasks
            },
            tasksNoCatgs(){
                return this.$store.getters.allTasksNoCatgs
            },
            selectedCatg() {
              return this.$store.state.selectedCatg;
            },
            filteredTasks() {
                return filterTasks(this.selectedCatg, this.tasksNoCatgs);
            }
        },

    methods: {
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

            this.$store.commit('updateAllTasks', this.tasks)
        },
    },
}
</script>
