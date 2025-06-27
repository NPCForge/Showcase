<template>
    <div class="project-section">
        <!-- Hero Section -->
        <div class="hero-section text-center py-5 mb-5">
            <div class="container">
                <h1 class="display-3 fw-bold text-white mb-4">NPCForge</h1>
                <p class="lead text-white-50 mb-4">3D Simulation of Large Language Models</p>
                <div class="hero-badge">
                    <span class="badge bg-light text-primary px-4 py-2 fs-6 rounded-pill">
                        <Icon class="me-2" name="uil:graduation-cap" />
                        Epitech Innovative Project
                    </span>
                </div>
            </div>
        </div>

        <!-- Content Section -->
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-10">

                    <!-- EIP Section -->
                    <div class="content-card mb-5">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-8">
                                <div class="card-content">
                                    <h2 class="section-title mb-4">
                                        <Icon class="title-icon me-3" name="uil:graduation-cap" />
                                        EIP: Epitech Innovative Project
                                    </h2>
                                    <p class="section-text">
                                        The <strong>Epitech Innovative Project</strong> is a flagship project of the
                                        Epitech curriculum, spanning several years and concluding during the final year
                                        of study. This is a major project that allows students to put into practice all
                                        the skills acquired during their training, particularly in development, project
                                        management, and technological innovation.
                                    </p>

                                    <div class="features-list mt-4">
                                        <div class="feature-item">
                                            <Icon class="feature-icon" name="uil:code-branch" />
                                            <span>Advanced Development</span>
                                        </div>
                                        <div class="feature-item">
                                            <Icon class="feature-icon" name="uil:users-alt" />
                                            <span>Project Management</span>
                                        </div>
                                        <div class="feature-item">
                                            <Icon class="feature-icon" name="uil:lightbulb-alt" />
                                            <span>Technological Innovation</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="illustration-container">
                                    <div class="illustration-circle">
                                        <Icon class="illustration-icon" name="uil:graduation-cap" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- NPCForge Section -->
                    <div class="content-card">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-4 order-md-1">
                                <div class="illustration-container">
                                    <div class="illustration-circle npc-circle">
                                        <Icon class="illustration-icon" name="uil:robot" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-8 order-md-2">
                                <div class="card-content">
                                    <h2 class="section-title mb-4">
                                        <Icon class="title-icon me-3" name="uil:robot" />
                                        NPC<strong class="text-primary">Forge</strong>
                                    </h2>
                                    <p class="section-text">
                                        We are developing a <strong>3D simulation of Large Language Models
                                            (LLMs)</strong> where users can observe and interact with autonomous
                                        language models in a virtual environment. This simulation is designed for
                                        different types of users, including gamers, developers, and researchers.
                                    </p>

                                    <div class="user-types mt-4">
                                        <div class="user-type-card">
                                            <Icon class="user-icon" name="uil:game-structure" />
                                            <div>
                                                <h5 class="mb-1">Gamers</h5>
                                                <p class="mb-0 text-muted">Interactive gameplay with LLMs</p>
                                            </div>
                                        </div>
                                        <div class="user-type-card">
                                            <Icon class="user-icon" name="uil:code" />
                                            <div>
                                                <h5 class="mb-1">Developers</h5>
                                                <p class="mb-0 text-muted">Development and testing tools</p>
                                            </div>
                                        </div>
                                        <div class="user-type-card">
                                            <Icon class="user-icon" name="uil:microscope" />
                                            <div>
                                                <h5 class="mb-1">Researchers</h5>
                                                <p class="mb-0 text-muted">Model analysis and study</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Tech Stack Section -->
        <div class="tech-section py-5 mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <h3 class="fw-bold text-white">Technologies Used</h3>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-6 col-md-3 col-lg-2 mb-4" v-for="tech in technologies" :key="tech.name">
                        <div class="tech-card text-center">
                            <Icon class="tech-icon" :name="tech.icon" />
                            <p class="tech-name mt-2 mb-0">{{ tech.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const technologies = [
        { name: 'Unreal Engine', icon: 'devicon:unrealengine' },
        { name: 'AI/ML', icon: 'uil:brain' },
        { name: 'Python', icon: 'devicon:python' },
        { name: 'C++', icon: 'devicon:cplusplus' },
        { name: 'Nuxt3', icon: 'devicon:nuxtjs' }
    ];

    useSeoMeta({
        title: 'NPCForge – 3D Simulation of LLMs for Games & Research',
        ogTitle: 'NPCForge – 3D Simulation of LLMs for Games & Research',
        description: 'NPCForge is an Epitech Innovative Project that simulates Large Language Models in a 3D virtual environment for gamers, developers, and researchers.',
        ogDescription: 'Interact with autonomous AI characters powered by LLMs in NPCForge – a 3D simulation built with Unreal Engine and AI technologies.',
        ogSiteName: 'NPCForge',
        ogType: 'website',
        ogUrl: 'https://npcforge.fr/project',
        ogImage: '/team-cover.png',
        twitterCard: 'summary_large_image'
    })
</script>

<style scoped>
    .project-section {
        min-height: 100vh;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    }

    .hero-section {
        background: linear-gradient(135deg, #6f42c1 0%, #495057 100%);
        position: relative;
        overflow: hidden;
    }

    .hero-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
        opacity: 0.3;
    }

    .hero-section .container {
        position: relative;
        z-index: 2;
    }

    .hero-badge .badge {
        font-size: 1rem;
        font-weight: 500;
    }

    .content-card {
        background: white;
        border-radius: 20px;
        padding: 3rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        animation: fadeInUp 0.6s ease forwards;
    }

    .content-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    .section-title {
        color: #495057;
        font-size: 2rem;
        font-weight: 700;
        display: flex;
        align-items: center;
    }

    .title-icon {
        width: 40px;
        height: 40px;
        color: #007bff;
    }

    .section-text {
        font-size: 1.1rem;
        line-height: 1.8;
        color: #6c757d;
        margin-bottom: 0;
    }

    .features-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .feature-item {
        display: flex;
        align-items: center;
        padding: 0.75rem 1rem;
        background: #f8f9fa;
        border-radius: 10px;
        transition: all 0.3s ease;
    }

    .feature-item:hover {
        background: #e9ecef;
        transform: translateX(5px);
    }

    .feature-icon {
        width: 24px;
        height: 24px;
        color: #007bff;
        margin-right: 1rem;
    }

    .illustration-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        min-height: 200px;
    }

    .illustration-circle {
        width: 150px;
        height: 150px;
        background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: float 3s ease-in-out infinite;
    }

    .npc-circle {
        background: linear-gradient(135deg, #6f42c1 0%, #495057 100%);
    }

    .illustration-icon {
        width: 60px;
        height: 60px;
        color: white;
    }

    .user-types {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .user-type-card {
        display: flex;
        align-items: center;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 12px;
        border-left: 4px solid #007bff;
        transition: all 0.3s ease;
    }

    .user-type-card:hover {
        background: #e9ecef;
        transform: translateX(5px);
    }

    .user-icon {
        width: 32px;
        height: 32px;
        color: #007bff;
        margin-right: 1rem;
        flex-shrink: 0;
    }

    .tech-section {
        background: linear-gradient(135deg, #495057 0%, #343a40 100%);
    }

    .tech-card {
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }

    .tech-card:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-5px);
    }

    .tech-icon {
        width: 40px;
        height: 40px;
        color: #007bff;
    }

    .tech-name {
        color: white;
        font-size: 0.9rem;
        font-weight: 500;
    }

    /* Animations */
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

    @keyframes float {

        0%,
        100% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(-10px);
        }
    }

    /* Responsive */
    @media (max-width: 768px) {
        .hero-section {
            padding: 3rem 0 !important;
        }

        .hero-section h1 {
            font-size: 2.5rem;
        }

        .content-card {
            padding: 2rem 1.5rem;
        }

        .section-title {
            font-size: 1.5rem;
            flex-direction: column;
            text-align: center;
        }

        .title-icon {
            margin-bottom: 1rem;
        }

        .features-list,
        .user-types {
            margin-top: 2rem;
        }

        .illustration-circle {
            width: 120px;
            height: 120px;
        }

        .illustration-icon {
            width: 50px;
            height: 50px;
        }
    }

    @media (max-width: 576px) {
        .hero-section h1 {
            font-size: 2rem;
        }

        .content-card {
            padding: 1.5rem 1rem;
        }

        .section-text {
            font-size: 1rem;
        }
    }

    /* Dark mode support */
    html.dark .project-section {
        background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
    }

    html.dark .hero-section {
        background: linear-gradient(135deg, #553c9a 0%, #2d3748 100%);
    }

    html.dark .content-card {
        background: #2d3748;
        color: #e2e8f0;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    html.dark .content-card:hover {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }

    html.dark .section-title {
        color: #e2e8f0;
    }

    html.dark .section-text {
        color: #a0aec0;
    }

    html.dark .feature-item,
    html.dark .user-type-card {
        background: #4a5568;
        color: #e2e8f0;
    }

    html.dark .feature-item:hover,
    html.dark .user-type-card:hover {
        background: #2d3748;
    }

    html.dark .tech-section {
        background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
    }

    html.dark .tech-card {
        background: rgba(255, 255, 255, 0.05);
    }

    html.dark .tech-card:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    html.dark .stats-section {
        background: #2d3748;
        color: #e2e8f0;
    }

    html.dark .stat-number {
        color: #e2e8f0;
    }

    html.dark .stat-label {
        color: #a0aec0;
    }
</style>
