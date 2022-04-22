<template>
    <section
    class="tasks"
    v-if="selectedCatg"
    >

    {{tasks}}
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
             >

                <div
                    v-if="task.editStatus == false"
                >
                    <label class="checkBox">
                        <input type="checkbox" name="checkBox" id="checkBox" v-model="task.status"/>
                    </label>

                    <div class="checkText" :class="{completed: task.status}" @click="checkTask(task)">
                        {{task.descr}}
                    </div>

                    <div>
                        <edit-icon
                            class="header-icons"
                            v-if="task.editButtonStatus"
                            @click="showEditField(task)"
                        />
                    </div>
                </div>

                <!-- Ref - Edit-101 -->
                <div
                    v-if="task.editStatus"
                >
                    <div>
                        <trash-icon
                            class="header-icons"
                            @click="deleteTask(task)"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name=""
                            id=""
                            v-model="task.descr"
                        >
                    </div>

                    <div>
                        <device-floppy-icon
                            class="header-icons"
                            @click="verifyChange(task)"
                        />
                    </div>
                </div>

            </div>


        </div>

    </section>
</template>

<script>
import filterTasks from './modules/filter-tasks';

export default {
    name: 'taskSection',

    data() {
        return {
            errorMssgStatus: false,
            modalStatus: false,
            // editStatus: false,
            // editButtonStatus: true
        }
    },

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
                        task.editButtonStatus = false;
                    break;

                case true:
                        task.status = false;
                        task.editButtonStatus = true;
                    break;

                default:
                    break;
            }

            this.$store.commit('updateAllTasks', this.tasks)
        },

        verifyChange(task) {
            if (task.descr == null || task.descr == '' || task.descr == " ") {
                alert("Fill in the input field or delete the task")
            }
            else {
                 this.toggleEditStatus(task);
            }
        },

        showEditField(task) {
            this.toggleEditStatus(task);
        },

        toggleEditStatus(task){
            if (task.editStatus == false) {
                   task.editStatus = true;
            }
            else {
                task.editStatus = false;
            }
        },

        deleteTask(task) {
            this.$store.dispatch('initializeTaskDeletion', task)
        }
    },
}
</script>
