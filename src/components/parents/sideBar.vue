<template>
    <div class="sideBar">
        <div>
            <div>
                <button
                    class="close_btn"
                    @click="toggleSideBarStatus()"
                >
                    <chevron-left-icon class="icons chevron-left-icon"/>
                </button>
            </div>

            <div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sideBar',

        methods: {
            toggleSideBarStatus() {
                this.$store.commit('toggleSideBar')
            }
        }
    }
</script>