<template>
    <div class="card d-flex flex-column align-items-center justify-content-start shadow">
        <div class="red pp" :style="'background-image: url(' + props.image + ')'" />
        <p class="cardText" style="text-align: center;">{{ props.name}}</p>
        <p class="cardText" style="text-align: center;">
            {{ props.description }}
        </p>
        <div class="icon_box d-flex align-items-center justify-content-center">
            <a v-if="props.github" :href="props?.github">
                <Icon class="icn" name="uil:github" />
            </a>
            <a v-if="props.linkedin" :href="props?.linkedin">
                <Icon class="icn" name="uil:linkedin" />
            </a>
            <a v-if="props.email" :href="props?.email">
                <Icon class="icn" name="uil:envelope" />
            </a>
        </div>
    </div>
</template>

<style scoped>
    html.dark .cardText {
        color: black;
    }

    html.dark .card {
        background-color: rgb(162, 162, 162);
    }

    .icon_box {
        width: 100%;
    }
    .icn {
        background-color: black;
        margin: 0 10px;
        transition: all 0.5s;
        font-size: 20px;
    }
    .icn:hover {
        background-color: rgba(0, 0, 0, 0.559);
        margin: 0 8px;
        font-size: 30px;
    }
    .pp {
        width: 100%;
        height: 50%;
        margin-bottom: 5%;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
    }
    .card {
        overflow: hidden;
        padding: 0;
        width: 20vw;
        height: 50vh;
        margin: 0 1%;
        transition: all 0.5s;
    }
    .card:hover {
        margin: 0 0.5%;
        width: 21vw;
        height: 51vh;
    }
</style>

<script setup>
    const props = defineProps({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        github: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: false
        },
        linkedin: {
            type: String,
            required: false
        }
    })
</script>