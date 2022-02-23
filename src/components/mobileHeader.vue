<template>
    <header>
        <div class="hambuger">
            <div class="ham-line"></div>
        </div>

        <div class="links">
            <nav>
                <ul>
                    <li>
                        <a :href="github" target="_blank" rel="noopener noreferrer">Github</a>
                    </li>

                    <li>
                        <a :href="twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'mobileHeader'
}
</script>