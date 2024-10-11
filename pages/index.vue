<template>
    <HeaderCpn />
    <div class="d-flex flex-column align-items-center justify-content-center" style="height: 90vh;">
        <p id="title">One plugin,<br><strong>limitless</strong> possibilities for your<br><strong>game development.</strong></p>
        <div style="margin-top: 3vh;">
            <img class="logo_png" src="~/public/chatgpt.png" alt="Chatgpt Logo">
            <img class="logo_png" src="~/public/UE5.png" alt="UE5 logo">
        </div>
    </div>
</template>

<style>
    #title {
        text-align: center;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        font-size: 25px;
    }

    .logo_png {
        height: 10vh;
    }
</style>

<script setup>
    import HeaderCpn from "~/components/header.vue"
</script>
