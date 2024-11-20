// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['vue-final-modal/style.css'],
  modules: ['@pinia/nuxt', '@vueuse/nuxt'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/assets/_app.sass" as *\n'
        }
      }
    }
  },
  typescript: {
    typeCheck: true
  }
})