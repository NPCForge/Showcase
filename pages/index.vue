<template>
    <div class="video-background">
        <video class="bg-video" autoplay muted loop playsinline preload="auto" tabindex="-1" aria-hidden="true">
            <source src="/output.webm" type="video/webm" />
            <source src="/output.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

    </div>

    <div class="d-flex flex-column align-items-center justify-content-center content" style="height: 90vh;">
        <p id="title">
            One plugin,<br>
            <strong>limitless</strong> possibilities for your<br>
            <strong>game development.</strong>
        </p>
        <div style="margin-top: 3vh;">
            <img class="logo_png" src="/UE5.png" alt="UE5 logo" />
        </div>
    </div>
</template>

<script setup>
    useSeoMeta({
        title: 'NPCForge Plugin – Limitless Game Development',
        ogTitle: 'NPCForge Plugin – Limitless Game Development',
        description: 'Discover NPCForge: a powerful Unreal Engine plugin showcased in an immersive video experience. Build smarter AI-driven gameplay.',
        ogDescription: 'NPCForge offers limitless possibilities for game developers through its Unreal Engine plugin. Watch the video to learn more.',
        ogUrl: 'https://npcforge.fr',
        ogType: 'website',
        ogSiteName: 'NPCForge',
        ogImage: '/team-cover.png',
        twitterCard: 'summary_large_image'
    })
</script>

<style>
.video-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -1;
    pointer-events: none;
    /* Empêche toute interaction */
}

.bg-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
}

/* Contenu au-dessus de la vidéo */
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

.logo_png {
    margin-top: -15%;
    height: 20vh;
    opacity: 0.6;
    filter: invert(1);
}
</style>