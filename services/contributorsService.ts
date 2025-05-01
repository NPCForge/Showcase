export const getApiContributors = async () => {
    const response = await fetch('https://api.github.com/repos/NPCForge/API_AI/contributors');

    if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
    }

    type Contributor = {
        login: string;
        contributions: number;
        avatar_url: string;
    };

    const contributors: Contributor[] = await response.json();

    // Tri des contributeurs par nombre de contributions (en ordre décroissant)
    const sortedContributors = contributors.sort((a, b) => b.contributions - a.contributions);

    // Limitation à 10 contributeurs
    const topContributors = sortedContributors.slice(0, 10);

    // Transformation des données
    const res = topContributors.map((contributor) => ({
        name: contributor.login,
        contribution: contributor.contributions,
        avatar: contributor.avatar_url
    }));

    const resName = res.map(c => c.name);
    const resValue = res.map(c => c.contribution);
    const resAvatar = res.map(c => c.avatar);

    // console.log(res);
    return { resName, resValue, resAvatar };
}

export const getPluginContributors = async () => {
    const response = await fetch('https://api.github.com/repos/NPCForge/Plugin/contributors');

    if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
    }

    type Contributor = {
        login: string;
        contributions: number;
        avatar_url: string;
    };

    const contributors: Contributor[] = await response.json();

    // Tri des contributeurs par nombre de contributions (en ordre décroissant)
    const sortedContributors = contributors.sort((a, b) => b.contributions - a.contributions);

    // Limitation à 10 contributeurs
    const topContributors = sortedContributors.slice(0, 10);

    // Transformation des données
    const res = topContributors.map((contributor) => ({
        name: contributor.login,
        contribution: contributor.contributions,
        avatar: contributor.avatar_url
    }));

    const resName = res.map(c => c.name);
    const resValue = res.map(c => c.contribution);
    const resAvatar = res.map(c => c.avatar);

    // console.log(res);
    return { resName, resValue, resAvatar };
}

export const getShowcaseContributors = async () => {
    const response = await fetch('https://api.github.com/repos/NPCForge/Showcase/contributors');

    if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
    }

    type Contributor = {
        login: string;
        contributions: number;
        avatar_url: string;
    };

    const contributors: Contributor[] = await response.json();

    // Tri des contributeurs par nombre de contributions (en ordre décroissant)
    const sortedContributors = contributors.sort((a, b) => b.contributions - a.contributions);

    // Limitation à 10 contributeurs
    const topContributors = sortedContributors.slice(0, 10);

    // Transformation des données
    const res = topContributors.map((contributor) => ({
        name: contributor.login,
        contribution: contributor.contributions,
        avatar: contributor.avatar_url
    }));

    const resName = res.map(c => c.name);
    const resValue = res.map(c => c.contribution);
    const resAvatar = res.map(c => c.avatar);

    // console.log("getShowcaseContributors");
    // console.log(resName);
    return { resName, resValue, resAvatar };
}
