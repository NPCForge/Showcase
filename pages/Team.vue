<template>
    <div class="body d-flex align-items-center justify-content-center flex-wrap">
        <Card
            v-for="member in teamMembers"
            :key="member.name"
            :name="member.name"
            :description="member.description"
            :image="member.image"
            :github="member.github"
            :email="member.email"
            :linkedin="member.linkedin"
        />
    </div>
</template>

<style scoped>
    .body {
        margin-top: 0%;
        width: 100%;
        min-height: 90vh;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap; /* Permet aux éléments de passer à la ligne suivante */
        gap: 20px; /* Ajout d'un espace entre les cartes */
    }

    .card {
        width: 20vw; /* Largeur des cartes */
        min-width: 250px; /* Largeur minimale pour les petites cartes */
        height: 50vh; /* Hauteur des cartes */
    }

    /* Media query pour écrans plus petits */
    @media (max-width: 768px) {
        .card {
            width: 90vw; /* Sur petits écrans, les cartes prennent 90% de la largeur de l'écran */
        }
    }
</style>


<script setup>
    import Card from '~/components/Card.vue';

    const teamMembers = [
        {
            name: 'Mathieu Rio',
            description: 'Studying artificial intelligence at Jönköping University, Sweden. In charge of Artificial Intelligence development.',
            image: 'mathieu.jpg',
            github: 'https://github.com/CogalTek',
            email: 'mathieurio.contact@gmail.com',
            linkedin: 'https://www.linkedin.com/in/mathieu-rio-7a011b1aa/'
        },
        {
            name: 'Tom Daniel',
            description: 'Studying game development at Keimyung University in South Korea. Responsible for leading the Unreal Engine Plugin.',
            image: 'tom.jpg',
            github: 'https://github.com/Grainbox',
            email: 'tom.daniel@epitech.eu',
            linkedin: 'https://www.linkedin.com/in/tom-daniel-54246b1b4/'
        },
        {
            name: 'Hugo Fontaine',
            description: 'Studying video game development at Epitech Berlin, Germany. In charge of developing a 3D virtual environment on Unreal Engine.',
            image: 'hugo.png',
            github: 'https://github.com/Hugoftn',
            email: 'hugo1.fontaine@epitech.eu',
            linkedin: 'https://www.linkedin.com/in/hugo-fontaine-72a2a6231/'
        },
        {
            name: 'Tristan Bros',
            description: 'Studying video game development at Epitech Berlin, Germany. Developing a 3D virtual environment on Unreal Engine.',
            image: 'Tristan.jpeg',
            github: null, // No GitHub provided
            email: 'tristan.bros@epitech.eu',
            linkedin: 'https://www.linkedin.com/in/tristan-bros-067ab1201/'
        }
    ];

</script>
