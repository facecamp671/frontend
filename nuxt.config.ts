// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  css: ['vue-final-modal/style.css'],
  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/i18n', '@nuxtjs/mdc'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/assets/_app.sass" as *\n'
        }
      }
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        files: ['en.yaml', 'en_perks.yaml']
      },
      {
        code: 'ru',
        files: ['ru.yaml', 'ru_perks.yaml']
      }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
  },
  typescript: {
    typeCheck: true
  }
})