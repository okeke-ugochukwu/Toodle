<template>
    <section class="helloSection">
        <h1 class="mainHeadings">
            What's up, {{username}}!
        </h1>
    </section>
</template>

<script>
export default {
    name: 'helloSection',

    data() {
        return {
            username: "Ugoo",
        }
    }
};
</script>