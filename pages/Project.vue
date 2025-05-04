<template>
    <div class="body d-flex flex-column align-items-center justify-content-center">
        <div class="section">
            <p class="underline">EIP:</p>
            <p><strong>Epitech Innovative Project</strong>, is a flagship project of the Epitech course, which extends over several years and concludes during the last year of study. This is a major project that allows students to put into practice all the skills acquired during their training, particularly in development, project management and technological innovation.</p>
        </div>
        <div class="section">
            <p class="underline">NPC<strong>Forge</strong>:</p>
            <p>We are developing a <strong>3D simulation of Large Language Models (LLMs)</strong> where users can observe and interact with autonomous language models in a virtual environment. This simulation is intended for different types of users, including gamers, developers, and researchers. Players will be able to log in to play with <strong>LLMs</strong>, while developers and researchers can use the simulation for study and development purposes.</p>
        </div>
    </div>
</template>

<style scoped>
    .body {
        z-index: -1;
        margin-top: 8%; /* Added margin-top to ensure content doesn't overlap the header */
        height: auto; /* Ensure that the content uses the full available height */
        width: 100vw;
        padding-left: 3vw;
        padding-right: 3vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .section {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
    }

    .underline {
        text-decoration: underline;
    }

    p {
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        font-size: 25px;
    }

    html.dark p {
        color: rgb(225, 225, 225);
    }
</style>


<script setup>
    const isMobile = ref(false);

    const checkScreenSize = () => {
        isMobile.value = window.innerWidth < 768;
    };

    onMounted(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', checkScreenSize);
    });
</script>
