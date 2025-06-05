<template>
    <div class="contributor-card h-100">
        <div class="card-header">
            <div class="d-flex align-items-center justify-content-between">
                <h4 class="card-title mb-0">
                    <Icon class="me-2" :name="icon" />
                    {{ name }} Repository
                </h4>
                <span :class="`badge bg-${color} bg-opacity-10 text-${color} px-3 py-2`">
                    {{ resName?.length || 0 }} contributors
                </span>
            </div>
        </div>

        <div class="card-body">
            <div v-if="resName && resName.length > 0" class="contributors-list">
                <div v-for="(contributor, index) in resName" :key="`${name}-${index}`" class="contributor-item"
                    @click="redirectToGitHub(contributor)">
                    <!-- Rank Badge -->
                    <div class="rank-badge">
                        <span :class="getRankClass(index)">
                            {{ index + 1 }}
                        </span>
                    </div>

                    <!-- Avatar -->
                    <div class="avatar-container">
                        <img :src="resAvatar[index]" :alt="contributor" class="contributor-avatar" loading="lazy">
                        <div class="avatar-overlay">
                            <Icon name="uil:external-link-alt" />
                        </div>
                    </div>

                    <!-- Info -->
                    <div class="contributor-info">
                        <h6 class="contributor-name">{{ contributor }}</h6>
                        <p class="contributor-stats">
                            <Icon class="me-1" name="uil:code-branch" />
                            {{ resValue[index] }} commits
                        </p>
                    </div>

                    <!-- Progress Bar -->
                    <div class="commit-progress">
                        <div class="progress-bar" :style="{ width: getProgressWidth(index) + '%' }"
                            :class="`bg-${color}`"></div>
                    </div>
                </div>
            </div>

            <div v-else class="empty-state text-center py-4">
                <Icon class="empty-icon text-muted" name="uil:user-times" />
                <p class="text-muted mb-0">No contributors found</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        resName: {
            type: Array,
            default: () => []
        },
        resValue: {
            type: Array,
            default: () => []
        },
        resAvatar: {
            type: Array,
            default: () => []
        },
        name: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            default: 'uil:users-alt'
        },
        color: {
            type: String,
            default: 'primary'
        }
    });

    const maxCommits = computed(() => {
        return Math.max(...(props.resValue || [0]));
    });

    const getProgressWidth = (index) => {
        if (!props.resValue || props.resValue.length === 0) return 0;
        return (props.resValue[index] / maxCommits.value) * 100;
    };

    const getRankClass = (index) => {
        const baseClass = 'rank-number';
        if (index === 0) return `${baseClass} gold`;
        if (index === 1) return `${baseClass} silver`;
        if (index === 2) return `${baseClass} bronze`;
        return baseClass;
    };

    const redirectToGitHub = (username) => {
        window.open(`https://github.com/${username}`, '_blank');
    };
</script>

<style scoped>
.contributor-card {
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: fadeInUp 0.6s ease forwards;
    width: 100%;
    margin-bottom: 2vh;
}

.contributor-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-header {
    padding: 1.5rem;
    background: #f8f9fa;
    border-bottom: 1px solid #e9ecef;
}

.card-title {
    color: #495057;
    font-weight: 600;
    display: flex;
    align-items: center;
}

.card-body {
    padding: 1.5rem;
}

.contributors-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contributor-item {
    display: grid;
    grid-template-columns: auto 60px 1fr auto;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.contributor-item:hover {
    background: #e9ecef;
    transform: translateX(5px);
}

.rank-badge {
    display: flex;
    align-items: center;
    justify-content: center;
}

.rank-number {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.9rem;
    background: #6c757d;
    color: white;
}

.rank-number.gold {
    background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
    color: #8b5a00;
}

.rank-number.silver {
    background: linear-gradient(135deg, #c0c0c0 0%, #e5e5e5 100%);
    color: #666;
}

.rank-number.bronze {
    background: linear-gradient(135deg, #cd7f32 0%, #daa520 100%);
    color: white;
}

.avatar-container {
    position: relative;
    width: 50px;
    height: 50px;
}

.contributor-avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.avatar-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 123, 255, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    color: white;
}

.contributor-item:hover .avatar-overlay {
    opacity: 1;
}

.contributor-item:hover .contributor-avatar {
    transform: scale(1.1);
}

.contributor-info {
    min-width: 0;
}

.contributor-name {
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: #495057;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.contributor-stats {
    font-size: 0.875rem;
    color: #6c757d;
    margin-bottom: 0;
    display: flex;
    align-items: center;
}

.commit-progress {
    width: 60px;
    height: 6px;
    background: #e9ecef;
    border-radius: 3px;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    border-radius: 3px;
    transition: width 0.3s ease;
}

.empty-state {
    padding: 2rem 1rem;
}

.empty-icon {
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;
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

/* Responsive */
@media (max-width: 768px) {
    .contributor-item {
        grid-template-columns: auto 50px 1fr;
        gap: 0.75rem;
    }

    .commit-progress {
        grid-column: 1 / -1;
        margin-top: 0.5rem;
        width: 100%;
    }

    .avatar-container {
        width: 40px;
        height: 40px;
    }

    .rank-number {
        width: 28px;
        height: 28px;
        font-size: 0.8rem;
    }
}

@media (max-width: 576px) {

    .card-header,
    .card-body {
        padding: 1rem;
    }

    .contributor-item {
        padding: 0.75rem;
    }
}
</style>
