<template>
    <div class="Header d-flex align-items-center">
        <div class="Left d-flex align-items-center">
            <img src="~/public/logo.png" alt="" style="width: 10%;">
            <p class="title" @click="moveTo('/')">NPC<strong>Forge</strong></p>
        </div>
        <div v-if="!isMobile" class="Right d-flex align-items-center justify-content-end">
            <p class="title" v-if="currentPageName == 'Project'" style="text-decoration: underline;" @click="moveTo('/Project')">Project</p>
            <p class="title" v-else @click="moveTo('/Project')">Project</p>

            <p class="title" v-if="currentPageName == 'Team'" style="text-decoration: underline;" @click="moveTo('/Team')">Team</p>
            <p class="title" v-else @click="moveTo('/Team')">Team</p>

            <a href="https://tekoss-organization.gitbook.io/npcforge/"><p class="title">Devlogs</p></a>
        </div>
        <!-- Version Mobile avec un dropdown -->
        <div v-else class="Right d-flex align-items-center justify-content-end">
            <div class="dropdown" style="margin: 1%;">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <Icon name="uil:bars" />
                </a>

                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" @click="moveTo('/Project')">Project</a></li>
                    <li><a class="dropdown-item" @click="moveTo('/Team')">Team</a></li>
                    <li><a class="dropdown-item" href="https://tekoss-organization.gitbook.io/npcforge/">Devlogs</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    const router = useRouter()
    const route = useRoute()

    const currentPageName = route.name
    const isMobile = ref(false);

    const checkScreenSize = () => {
        isMobile.value = window.innerWidth < 768;
    };

    onMounted(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
    })

    onUnmounted(() => {
        window.removeEventListener('resize', checkScreenSize);
    });

    const moveTo = (here) => {
        router.push(here)
    }
</script>

<style>
    .Header {
        /* background-color: red; */
        width: 100vw;
    }

    .Header > .Left {
        /* background-color: blueviolet; */
        width: 100%;
        height: 100%;
    }

    .Header > .Right {
        /* background-color: rgb(140, 165, 42); */
        width: 100%;
        height: 100%;
    }

    .title {
        font-family: 'Helvetica Neue';
        margin: 1vw;
        font-size: 20px;
        color: black;
    }

    .title:hover {
        cursor: pointer;
        opacity: 60%;
    }

    a {
        text-decoration: none;
    }
</style>
