<template>
    <div class="body">
        <div class="containers">
            <div class="header d-flex align-items-center justify-content-start">
                <h1>Leaderboard of the contribution <span class="Icon"><Icon name="uil:github" style="height: 3.5vh;"/></span></h1>
            </div>
            <div class="content d-flex flex-column align-items-center justify-content-start">
                <contributors
                    v-if="pluginData"
                    :resName="pluginData.resName"
                    :res-value="pluginData.resValue"
                    :res-avatar="pluginData.resAvatar"
                    :name="'Plugin'"
                    key="pluginData"
                />
                <contributors
                    v-if="showcaseData"
                    :resName="showcaseData.resName"
                    :res-value="showcaseData.resValue"
                    :res-avatar="showcaseData.resAvatar"
                    :name="'Showcase'"
                    key="showcaseData"
                />
                <contributors
                    v-if="apiData"
                    :resName="apiData.resName"
                    :res-value="apiData.resValue"
                    :res-avatar="apiData.resAvatar"
                    :name="'Api'"
                    key="apiData"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    import contributors from '~/components/contributors.vue';
    import {
        getShowcaseContributors,
        getApiContributors,
        getPluginContributors
    } from '~/services/contributorsService'

    const pluginData = ref(null)
    const apiData = ref(null)
    const showcaseData = ref(null)

    onMounted(async () => {
        pluginData.value = await getPluginContributors()
        apiData.value = await getApiContributors()
        showcaseData.value = await getShowcaseContributors()
    })
</script>

<style scoped>
    .body {
        /* background-color: red; */
        margin-top: 1%;
        width: 100%;
        /* min-height: 100vh; */
        height: auto;
        padding-top: 1%;
        /* border: 1px solid black; */
    }

    .containers {
        /* background-color: yellow; */
        width: 96%;
        height: 10%;
        margin: 0 2% 1% 2%;
    }

    .header {
        width: 100%;
        /* background-color: green; */
        height: 7%;
        padding-left: 1%;
    }

    .content {
        width: 98%;
        /* background-color: antiquewhite; */
        /* height: 92%; */
        margin: 0.5% 1% 0.5%;
    }

    .Icon :hover{
        background-color: rgba(0, 0, 0, 0.562);
        cursor: pointer;
    }
</style>