export default defineNuxtConfig({
  css: ['~/assets/css/main.scss'],
  modules: [],
  compatibilityDate: '2024-09',
  app: {
    head: {
      title: 'Zero',
      meta: [
        { name: 'description', content: 'Freeing the planet.' },
        { name: 'theme-color', content: '#0a0a0a' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/assets/favicon.png' }
      ],
    },
  },
})
