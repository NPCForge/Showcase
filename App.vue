<template>
    <HeaderCpn />
    <main>
        <NuxtPage />
    </main>
</template>

<script setup>
    import HeaderCpn from "~/components/header.vue"
    const theme = useTheme()

    watch(theme, (newTheme) => {
        if (process.client) {
            document.documentElement.classList.toggle('dark', newTheme === 'dark')
        }
    })
</script>

<style scoped></style>