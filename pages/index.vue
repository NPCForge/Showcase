<template>
    <div class="video-background">
        <video autoplay muted loop playsinline width="100%" class="bg-video">
            <source src="/video.mov" type="video/mov" />
            <source src="/output.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>

    <div class="d-flex flex-column align-items-center justify-content-center content" style="height: 90vh;">
        <p id="title">One plugin,<br><strong>limitless</strong> possibilities for your<br><strong>game
                development.</strong></p>
        <div style="margin-top: 3vh;">
            <!-- <img class="logo_png" src="~/public/chatgpt.png" alt="Chatgpt Logo"> -->
            <img class="logo_png" src="~/public/UE5.png" alt="UE5 logo">
        </div>
    </div>
</template>

<style>
    .video-background {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        z-index: -1;
    }

    .bg-video {
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;
    }

    /* Contenu au-dessus */
    .content {
        position: relative;
        z-index: 1;
    }

    #title {
        text-align: center;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        font-size: 25px;
        color: white;
    }

    /* html.dark #title {
        color: white;
    } */

    .logo_png {
        margin-top: -15%;
        height: 20vh;
        opacity: 60%;
        filter: invert(1);
    }
</style>