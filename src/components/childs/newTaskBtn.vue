<template>

    <button
        class="newTaskBtn"
        @click="toggleModalStatus()"
    >

        <plus-icon class="icons"/>
    </button>

</template>

<script>
    export default {
        name: 'newTaskBtn',

        methods: {
            toggleModalStatus() {
                this.$store.commit('toggleModal');
            }
        }
    }
</script>