<template>
    <div class="leaderboard-section">
        <!-- Hero Section -->
        <div class="hero-section text-center py-5 mb-5">
            <div class="container">
                <h1 class="display-4 fw-bold text-white mb-3">
                    <Icon class="me-3" name="uil:github" />
                    Contributors Leaderboard
                </h1>
                <p class="lead text-white-50">Recognizing our top contributors across all repositories</p>
            </div>
        </div>

        <!-- Leaderboard Content -->
        <div class="container">
            <div class="row g-4">
                <!-- Plugin Contributors -->
                <div class="col-12 col-lg-4">
                    <ContributorCard v-if="pluginData" :res-name="pluginData.resName" :res-value="pluginData.resValue"
                        :res-avatar="pluginData.resAvatar" :name="'Plugin'" :icon="'uil:puzzle-piece'"
                        :color="'primary'" />
                </div>

                <!-- Showcase Contributors -->
                <div class="col-12 col-lg-4">
                    <ContributorCard v-if="showcaseData" :res-name="showcaseData.resName"
                        :res-value="showcaseData.resValue" :res-avatar="showcaseData.resAvatar" :name="'Showcase'"
                        :icon="'uil:presentation'" :color="'success'" />
                </div>

                <!-- API Contributors -->
                <div class="col-12 col-lg-4">
                    <ContributorCard v-if="apiData" :res-name="apiData.resName" :res-value="apiData.resValue"
                        :res-avatar="apiData.resAvatar" :name="'API'" :icon="'uil:server'" :color="'warning'" />
                </div>
            </div>

            <!-- Loading State -->
            <div v-if="!pluginData && !showcaseData && !apiData" class="text-center py-5">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3 text-muted">Loading contributors data...</p>
            </div>

            <!-- Stats Section -->
            <div class="stats-section mt-5 py-5">
                <div class="row text-center">
                    <div class="col-12 col-md-4 mb-4">
                        <div class="stat-card">
                            <Icon class="stat-icon text-primary" name="uil:users-alt" />
                            <h3 class="stat-number">{{ totalContributors }}</h3>
                            <p class="stat-label">Total Contributors</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-4">
                        <div class="stat-card">
                            <Icon class="stat-icon text-success" name="uil:code-branch" />
                            <h3 class="stat-number">{{ totalCommits }}</h3>
                            <p class="stat-label">Total Commits</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-4">
                        <div class="stat-card">
                            <Icon class="stat-icon text-warning" name="uil:folder" />
                            <h3 class="stat-number">3</h3>
                            <p class="stat-label">Active Repositories</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import ContributorCard from '~/components/contributors.vuee';
    import {
        getShowcaseContributors,
        getApiContributors,
        getPluginContributors
    } from '~/services/contributorsService'

    import { ref, computed, onMounted } from 'vue';

    const pluginData = ref(null)
    const apiData = ref(null)
    const showcaseData = ref(null)

    const totalContributors = computed(() => {
        let total = 0;
        if (pluginData.value) total += pluginData.value.resName.length;
        if (apiData.value) total += apiData.value.resName.length;
        if (showcaseData.value) total += showcaseData.value.resName.length;
        return total;
    });

    const totalCommits = computed(() => {
        let total = 0;
        if (pluginData.value) total += pluginData.value.resValue.reduce((sum, val) => sum + val, 0);
        if (apiData.value) total += apiData.value.resValue.reduce((sum, val) => sum + val, 0);
        if (showcaseData.value) total += showcaseData.value.resValue.reduce((sum, val) => sum + val, 0);
        return total;
    });

    onMounted(async () => {
        try {
            const [plugin, api, showcase] = await Promise.all([
                getPluginContributors(),
                getApiContributors(),
                getShowcaseContributors()
            ]);

            pluginData.value = plugin;
            apiData.value = api;
            showcaseData.value = showcase;
        } catch (error) {
            console.error('Error loading contributors:', error);
        }
    });
</script>

<style scoped>
    .leaderboard-section {
        min-height: 100vh;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    }

    .hero-section {
        background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
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
        width: 100%;
        z-index: 2;
    }

    .stats-section {
        background: white;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .stat-card {
        padding: 2rem 1rem;
        transition: transform 0.3s ease;
    }

    .stat-card:hover {
        transform: translateY(-5px);
    }

    .stat-icon {
        width: 48px;
        height: 48px;
        margin-bottom: 1rem;
    }

    .stat-number {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #495057;
    }

    .stat-label {
        color: #6c757d;
        font-weight: 500;
        margin-bottom: 0;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .hero-section {
            padding: 3rem 0 !important;
        }

        .hero-section h1 {
            font-size: 2.5rem;
        }

        .stat-number {
            font-size: 2rem;
        }
    }

    @media (max-width: 576px) {
        .hero-section h1 {
            font-size: 2rem;
        }
    }
</style>
