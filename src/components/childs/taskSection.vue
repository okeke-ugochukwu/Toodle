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
                :class="{completed3: task.status}"
                v-for="task in this.filteredTasks" :key="task.id"
             >

                <div
                    v-if="task.editStatus == false"
                    class="tasks_bars__field___noEdit"
                    :class="{completed2: task.status}"
                >
                    <label class="checkBox">
                        <input type="checkbox" name="checkBox" id="checkBox" @click="checkTask(task)"/>
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
                    class="tasks_bars__field___edit"
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

                    <div
                        class="error_message"
                        v-if="task.errorMessageStatus"
                    >
                        You need to fill in a task <br />
                        or delete the field entirely
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

        },

        verifyChange(task) {
            if (task.descr == null || task.descr == '' || task.descr == " ") {
                task.errorMessageStatus = true;

            }
            else {
                 this.toggleEditStatus(task);
                 task.errorMessageStatus = false;
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
