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

            <nav>
                <userStats />
                <navBar />
            </nav>
        </div>
    </div>
</template>

<script>

import userStats from '../childs/sharedComponents/userStats.vue';
import navBar from '../childs/sharedComponents/navBar.vue';

    export default {
        name: 'sideBar',

        components: {
            userStats,
            navBar
        },

        methods: {
            toggleSideBarStatus() {
                this.$store.commit('toggleSideBar')
            }
        }
    }
</script>