export default defineNuxtConfig({
  css: ['~/assets/css/main.scss'],
  modules: [],
  compatibilityDate: '2024-09',
  app: {
    head: {
      title: 'Zero Labs — Build what should exist',
      meta: [
        { name: 'description', content: 'Independent PBO building open-source Linux-first technology.' },
        { name: 'theme-color', content: '#0a0a0a' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/assets/favicon.png' }
      ],
    },
  },
})
