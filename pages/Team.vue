<template>
    <HeaderCpn />
    <div :class="{ 'flex-wrap': isMobile }" class="d-flex align-items-center justify-content-center" style="min-height: 90vh; width: 100vw; padding-left: 3vw; padding-right: 3vw;">
        <!-- Mathieu card -->
        <div class="CardPresentation d-flex flex-column align-items-center justify-content-center">
            <img src="~/public/mathieu.jpg" alt="" class="photo">
            <p style="text-align: center;">Mathieu Rio</p>
            <p style="text-align: center;">
                Studying artificial intelligence
                at <strong>Jönköping University, Sweden.</strong>
                In charge of <strong>Artificial Intelligence
                development.</strong>
            </p>
            <div class="icon_box">
                <a href="https://github.com/CogalTek"><Icon class="icn" name="uil:github" /></a>
                <a href="https://www.linkedin.com/in/mathieu-rio-7a011b1aa/"><Icon class="icn" name="uil:linkedin" /></a>
                <a href="mailto:mathieurio.contact@gmail.com"><Icon class="icn" name="uil:envelope" /></a>
            </div>
        </div>
        <!-- Tom card -->
        <div class="CardPresentation d-flex flex-column align-items-center justify-content-center">
            <img src="~/public/tom.png" alt="" class="photo">
            <p style="text-align: center;">Tom daniel</p>
            <p style="text-align: center;">
                Studying game development
                at <strong>Keimyung University in South Korea.</strong>
                Responsible for <strong>leading the Unreal Engine
                Plugin.</strong>
            </p>
            <div class="icon_box">
                <a href="https://github.com/Grainbox"><Icon class="icn" name="uil:github" /></a>
                <a href="https://www.linkedin.com/in/tom-daniel-54246b1b4/"><Icon class="icn" name="uil:linkedin" /></a>
                <a href="mailto:tom.daniel@epitech.eu"><Icon class="icn" name="uil:envelope" /></a>
            </div>
        </div>
        <!-- Hugo card -->
        <div class="CardPresentation d-flex flex-column align-items-center justify-content-center">
            <img src="~/public/hugo.png" alt="" class="photo">
            <p style="text-align: center;">Hugo Fontaine</p>
            <p style="text-align: center;">
                Studying video game development
                at <strong>Epitech Berlin, Germany.</strong>
                In charge of <strong>developping a 3D
                virtual environment on Unreal Engine.</strong>
            </p>
            <div class="icon_box">
                <a href="https://github.com/Hugoftn"><Icon class="icn" name="uil:github" /></a>
                <a href="https://www.linkedin.com/in/hugo-fontaine-72a2a6231/"><Icon class="icn" name="uil:linkedin" /></a>
                <a href="mailto:hugo1.fontaine@epitech.eu"><Icon class="icn" name="uil:envelope" /></a>
            </div>
        </div>
        <!-- Tristan card -->
        <div class="CardPresentation d-flex flex-column align-items-center justify-content-center">
            <img src="~/public/Tristan.jpeg" alt="" class="photo">
            <p style="text-align: center;">Tristan Bros</p>
            <p style="text-align: center;">
                Studying video game development
                at <strong>Epitech Berlin, Germany. Developping a 3D
                virtual environment on Unreal Engine.</strong>
            </p>
            <div class="icon_box">
                <!-- <a href="https://github.com/Hugoftn"><Icon class="icn" name="uil:github" /></a> -->
                <a href="https://www.linkedin.com/in/tristan-bros-067ab1201/"><Icon class="icn" name="uil:linkedin" /></a>
                <a href="mailto:tristan.bros@epitech.eu"><Icon class="icn" name="uil:envelope" /></a>
            </div>
        </div>
    </div>
</template>

<style>
    .CardPresentation {
        /* background-color: red; */
        width: 25vw;
        height: 55vh;
        margin: 4vw;
    }

    @media (max-width: 768px) {
        .CardPresentation {
            width: 70vw;
            margin: 2vw 0;
        }
    }

    p {
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        font-size: 18px;
    }

    .photo {
        margin-top: 0;
        margin-bottom: 2vh;
        height: 50%;
    }

    .icon_box {
        /* background-color: red; */
        width: 100%;
        text-align: center;
        height: 100%;
    }

    .icn {
        margin: 3%;
        height: 96%;
        text-decoration: none;
        background-color: black;
    }

    .icn:hover {
        background-color: rgb(217, 217, 217);
        cursor: pointer;
    }
</style>

<script setup>
    import HeaderCpn from "~/components/header.vue"

    const isMobile = ref(false);

    const checkScreenSize = () => {
        isMobile.value = window.innerWidth < 1200;
    };

    onMounted(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
    })

    onUnmounted(() => {
        window.removeEventListener('resize', checkScreenSize);
    });
</script>
