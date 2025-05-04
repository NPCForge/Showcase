<template>
    <loading v-if="isLoading"/>
    <header>
        <HeaderCpn />
    </header>
    <main>
        <NuxtPage />
    </main>
</template>

<script setup>
    import HeaderCpn from "~/components/header.vue"
    const isLoading = ref(true)
    import loading from '~/components/loading.vue'
    const theme = useTheme()
    import AOS from 'aos'
    import 'aos/dist/aos.css'

    onMounted(() => {
        try {
            console.log("chargement")
            AOS.init()
        } catch (e) {
            console.error(e)
        } finally {
            isLoading.value = false
        }
    })

    watch(theme, (newTheme) => {
        if (process.client) {
            document.documentElement.classList.toggle('dark', newTheme === 'dark')
        }
    })
</script>

<style scoped></style>