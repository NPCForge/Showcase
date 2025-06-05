<template>
    <div class="team-section">
        <!-- Hero Section -->
        <div class="hero-section text-center py-5 mb-5">
            <div class="container">
                <h1 class="display-4 fw-bold text-primary mb-3">Our Team</h1>
                <p class="lead text-muted">Meet the talents bringing our projects to life</p>
            </div>
        </div>

        <!-- Team Cards Section -->
        <div class="container">
            <div class="row g-4 justify-content-center">
                <div v-for="member in teamMembers" :key="member.name" class="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div class="card team-card h-100 shadow-sm border-0">
                        <!-- Image Container -->
                        <div class="card-img-container position-relative overflow-hidden">
                            <img :src="`${member.image}`" :alt="member.name" class="card-img-top team-photo"
                                loading="lazy" />
                            <div
                                class="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                                <div class="social-links d-flex gap-2">
                                    <a v-if="member.github" :href="member.github" target="_blank"
                                        class="btn btn-outline-light btn-sm rounded-circle"
                                        :aria-label="`GitHub of ${member.name}`">
                                        <Icon class="icn" name="uil:github" />
                                    </a>
                                    <a :href="`mailto:${member.email}`"
                                        class="btn btn-outline-light btn-sm rounded-circle"
                                        :aria-label="`Email of ${member.name}`">
                                        <Icon class="icn" name="uil:envelope" />
                                    </a>
                                    <a :href="member.linkedin" target="_blank"
                                        class="btn btn-outline-light btn-sm rounded-circle"
                                        :aria-label="`LinkedIn of ${member.name}`">
                                        <Icon class="icn" name="uil:linkedin" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Card Body -->
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title fw-bold text-primary mb-2">{{ member.name }}</h5>
                            <p class="card-text text-muted flex-grow-1">{{ member.description }}</p>

                            <!-- Tags/Skills -->
                            <div class="mt-auto">
                                <div class="d-flex flex-wrap gap-1 mb-3">
                                    <span v-for="skill in member.skills" :key="skill"
                                        class="badge bg-light text-dark border">
                                        {{ skill }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useHead } from '#app'
    import { ref, onMounted } from 'vue';

    const teamMembers = ref([
        {
            name: 'Mathieu Rio',
            description: 'Studying artificial intelligence at Jönköping University, Sweden. In charge of Artificial Intelligence development.',
            image: 'mathieu.jpg',
            github: 'https://github.com/CogalTek',
            email: 'mathieurio.contact@gmail.com',
            linkedin: 'https://www.linkedin.com/in/mathieu-rio-7a011b1aa/',
            skills: ['AI', 'Machine Learning', 'Python']
        },
        {
            name: 'Tom Daniel',
            description: 'Studying game development at Keimyung University in South Korea. Responsible for leading the Unreal Engine Plugin.',
            image: 'tom.jpg',
            github: 'https://github.com/Grainbox',
            email: 'tom.daniel@epitech.eu',
            linkedin: 'https://www.linkedin.com/in/tom-daniel-54246b1b4/',
            skills: ['Unreal Engine', 'C++', 'Game Dev']
        },
        {
            name: 'Hugo Fontaine',
            description: 'Studying video game development at Epitech Berlin, Germany. In charge of developing a 3D virtual environment on Unreal Engine.',
            image: 'hugo.png',
            github: 'https://github.com/Hugoftn',
            email: 'hugo1.fontaine@epitech.eu',
            linkedin: 'https://www.linkedin.com/in/hugo-fontaine-72a2a6231/',
            skills: ['3D Modeling', 'Unreal Engine', 'VR']
        },
        {
            name: 'Tristan Bros',
            description: 'Studying video game development at Epitech Berlin, Germany. Developing a 3D virtual environment on Unreal Engine.',
            image: 'Tristan.jpeg',
            github: null,
            email: 'tristan.bros@epitech.eu',
            linkedin: 'https://www.linkedin.com/in/tristan-bros-067ab1201/',
            skills: ['3D Environment', 'Level Design', 'Unreal Engine']
        }
    ]);
</script>

<style scoped>
    .team-section {
        min-height: 100vh;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    }

    .hero-section {
        background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
        color: white;
        margin-bottom: 0;
    }

    .hero-section .text-primary {
        color: white !important;
    }

    .team-card {
        transition: all 0.3s ease;
        border-radius: 15px;
        overflow: hidden;
        background: white;
    }

    .team-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
    }

    .card-img-container {
        height: 280px;
        position: relative;
    }

    .team-photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .overlay {
        background: rgba(0, 123, 255, 0.9);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .team-card:hover .overlay {
        opacity: 1;
    }

    .team-card:hover .team-photo {
        transform: scale(1.1);
    }

    .social-links .btn {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }

    .social-links .btn:hover {
        background: white;
        color: #007bff;
        transform: scale(1.1);
    }

    /* Style pour les icônes */
    .icn {
        width: 20px;
        height: 20px;
    }

    .card-body {
        padding: 1.5rem;
    }

    .card-title {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    }

    .card-text {
        font-size: 0.9rem;
        line-height: 1.6;
    }

    .badge {
        font-size: 0.75rem;
        padding: 0.4em 0.8em;
        border-radius: 20px;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .hero-section {
            padding: 3rem 0 !important;
        }

        .hero-section h1 {
            font-size: 2.5rem;
        }

        .card-img-container {
            height: 250px;
        }

        .social-links .btn {
            width: 35px;
            height: 35px;
        }

        .icn {
            width: 18px;
            height: 18px;
        }
    }

    @media (max-width: 576px) {
        .hero-section h1 {
            font-size: 2rem;
        }

        .card-img-container {
            height: 220px;
        }

        .card-body {
            padding: 1rem;
        }
    }

    /* Animation pour l'apparition des cartes */
    .team-card {
        animation: fadeInUp 0.6s ease forwards;
    }

    .team-card:nth-child(1) {
        animation-delay: 0.1s;
    }

    .team-card:nth-child(2) {
        animation-delay: 0.2s;
    }

    .team-card:nth-child(3) {
        animation-delay: 0.3s;
    }

    .team-card:nth-child(4) {
        animation-delay: 0.4s;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Dark mode support */
    html.dark .team-section {
        background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
    }

    html.dark .hero-section {
        background: linear-gradient(135deg, #0056b3 0%, #003166 100%);
    }

    html.dark .team-card {
        background: #2d3748;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
    }

    html.dark .team-card:hover {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4) !important;
    }

    html.dark .card-title {
        color: #e2e8f0;
    }

    html.dark .card-text {
        color: #a0aec0;
    }

    html.dark .badge {
        background-color: #4a5568 !important;
        color: #e2e8f0 !important;
        border-color: #2d3748 !important;
    }

    html.dark .overlay {
        background: rgba(0, 86, 179, 0.9);
    }

    html.dark .social-links .btn {
        border-color: #e2e8f0;
        color: #e2e8f0;
    }

    html.dark .social-links .btn:hover {
        background: #e2e8f0;
        color: #0056b3;
    }
</style>
