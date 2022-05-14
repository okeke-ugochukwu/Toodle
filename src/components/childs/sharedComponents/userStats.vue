<template>
    <div class="userStats">
        
        <div class="userProgressBar">
            <div class="userProgressBar_level">
                <div class="user_avatar">
                    <img src="@/img/avatar.png" alt="user_avatar" >
                </div>
            </div>
        </div>

        <h2 class="user_name">
            {{this.$store.state.username}}
        </h2>
    </div>
</template>

<script>
    export default {
        name: 'userStats'

    }
</script>

<style lang="scss" scoped>

</style>