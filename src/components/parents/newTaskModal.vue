""<template>
    <div
        class="newTaskModal"
        v-if="modalStatus === true"
    >
        <div
            @click="toggleModalStats()"
        >
            <button class="close_btn modal_close_btn">
                <div class="ham-line"></div>
                <div class="ham-line"></div>
            </button>
        </div>

        <div>
            <input
                autocomplete="off"
                autofocus="on"
                type="text"
                name="task-name"
                id="task_name"
                placeholder="What do you need to do?"
                v-model="newTask.descr"
                ref="taskName"
                @keydown="this.erroMssgStatus = false"
            >

            <div
                v-if="erroMssgStatus"
                class="error_message"
            >
                This field is kinda required
            </div>

            <input
                type="text"
                name="task-catg"
                id="task-catg"
                placeholder="Add Category Eg.Personal"
                v-model="newTask.category"
                ref="taskCategory"
            >

            <div
                v-if="tasksNoCatgs[0]"
            >
                <select name="" id="" v-model="this.newTask.category">
                    <option value="">
                        Select Category
                    </option>
                    
                    <option

                        v-for="taskCategory in Object.entries(this.tasks)" :key="taskCategory.id"
                        :value="taskCategory[0]"
                    >
                        {{ taskCategory[0][0].toUpperCase() + taskCategory[0].substring(1) }}
                    </option>
                </select>
            </div>
        </div>

        <div>
            <button type="sumbit" @click="verifyInput()">
                New task
            </button>
        </div>
    </div>
</template>

<script>
    export default ({
        name: 'newTaskModal',

        data() {
            return {
                erroMssgStatus: false,

                newTask: {
                    descr: null,
                    category: null,
                    status: false
                }
            }
        },

        // updated() {
        //     this.$nextTick(() =>{
        //         this.focusInput()
        //     })
        // },

        computed: {
            tasks() {
                return this.$store.state.allTasksContainer.allTasks;
            },

            tasksNoCatgs(){
                return this.$store.getters.allTasksNoCatgs;
            },

            modalStatus() {
                return this.$store.state.modalStatus;
            }
        },


        methods: {
            toggleModalStats() {
                this.erroMssgStatus = false;
                this.$store.commit('toggleModal');
                this.resetNewTaskObject();
            },

            resetNewTaskObject() {
                this.newTask.descr = null;
                this.newTask.category = null;
            },

            focusInput() {
                this.$refs.taskName.focus();
            },

            verifyInput() {
                //remove all white spaces

                if (this.newTask.descr == null || this.newTask.descr == '' || this.newTask.descr == " ") {
                    this.erroMssgStatus = true;
                    this.focusInput();

                    return;
                }
                if (this.newTask.category === null || this.newTask.category == '') {
                    this.newTask.category = "uncategorized"
                }

                var tempTaskObject = {
                    descr: this.newTask.descr,
                    category: this.newTask.category.toLowerCase().replace(" ", ""),
                    status: false,
                    editStatus: false,
                    editButtonStatus: true,
                    errorMessageStatus: false
                }
                this.$store.commit('addNewTask', tempTaskObject);
                this.$store.commit('toggleModal');
                this.resetNewTaskObject();

            },
        }

    })
</script>
