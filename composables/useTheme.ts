// composables/useTheme.ts
export const useTheme = () => {
    const theme = useState<'light' | 'dark'>('theme', () => {
        if (process.client) {
            return (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
        }
        return 'light'
    })

    watch(theme, (newTheme) => {
        if (process.client) {
            localStorage.setItem('theme', newTheme)
            document.documentElement.classList.toggle('dark', newTheme === 'dark')
        }
    }, { immediate: true })

    return theme
}
