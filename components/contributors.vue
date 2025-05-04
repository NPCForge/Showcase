<template>
    <div class="body">
        <h3>Top Contributors {{ name }}</h3>
        <div class="content">
            <div v-for="(value, n) in props.resName" :key="name+n" class="lign d-flex align-items-center justify-content-start" @click="redirectToGitHub(props.resName[n])">
                <div style="height: 100%; aspect-ratio: 1/1; border-radius: 100%;">
                    <img :src="props.resAvatar[n]" :alt="value" style="height: 100%; width: 100%; border-radius: 100%;">
                </div>
                <div style="height: 100%; width: 100%" class="d-flex align-items-center justify-content-center">
                    <p class="text">{{ value }}</p>
                </div>
                <div style="height: 100%; width: 100%" class="d-flex align-items-center justify-content-end">
                    <p class="text"><strong>#{{ n + 1 }} with {{ props.resValue[n] }} commits</strong></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    resName: {
        type: Array,
        default: null
    },
    resValue: {
        type: Array,
        default: null
    },
    resAvatar: {
        type: Array,
        default: null
    },
    name: String
})

const redirectToGitHub = (username) => {
    // Redirige vers le profil GitHub du contributeur
    window.location.href = `https://github.com/${username}`;
}

</script>

<style scoped>
    .body {
        /* background-color: red; */
        height: 100%;
        width: 100%;
    }
    .content {
        /* background-color: red; */
        height: auto;
        width: 100%;
        overflow: visible;
    }

    .lign {
        /* margin-bottom: 1vh; */
        margin: 0 1vh 2vh;
        height: 8vh;
        width: 98%;
        /* background-color: blue; */
        transition: all 0.5s;
        border-radius: 2px;
        /* border: 1px solid black; */
    }

    .lign:hover {
        cursor: pointer;
        margin: 0 0.8vh 1.8vh;
        height: 8.4vh;
        width: 98.4%;
    }

    .text {
        font-family: 'Courier New', Courier, monospace;
        font-size: 3vh;
        margin: 0.5vh;
    }


    @media (max-width: 768px) {
        .text {
            font-size: 4vw;
        }
    }
</style>