<template>
    <nav>
        <ul>
            <li>
                <router-link to="/todos">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icons icon-tabler icon-tabler-checklist" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <desc>Download more icon variants from https://tabler-icons.io/i/checklist</desc>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8"></path>
                        <path d="M14 19l2 2l4 -4"></path>
                        <path d="M9 8h4"></path>
                        <path d="M9 12h2"></path>
                    </svg>

                    Todos

                </router-link>
            </li>

            <li>

                <router-link to="/notes">
                  <news-icon class="icons"/>  Notes
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'navBar',

    }
</script>

<style lang="scss" scoped>

</style>