<template>
    <section
    class="tasks"
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
                v-for="task in this.selectedCatgData" :key="task.id"
             >

                    {{}}
                <label class="checkBox" for="checkBox">
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


        }
    },

    created () {
        this.sendDataToParent();
    },

    props: {
        tasksData: {
                type: Array,
                default: () => [],
        },
        selectedCatgData: {
            type: Array,
            default: () => []
        },
    },

    methods: {
        sendDataToParent() {

        },
    },
}
</script>
