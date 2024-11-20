<template>
  <article>
    <AppHeader/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <AppFooter/>
  </article>
</template>

<script setup lang="ts">
useHead({
  link: [
    // {
    //   rel: 'preload',
    //   type: 'font/woff2',
    //   href: '/fonts/InterDisplay-roman.var.woff2',
    //   as: 'font',
    //   crossorigin: 'anonymous'
    // }
  ],
  script: [{
    src: '/scripts/remark42.js'
  }],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<style lang="sass">
html
  color-scheme: dark

body
  background-color: #18181a
  font-family: "Segoe UI", Arial, sans-serif
  -webkit-font-smoothing: subpixel-antialiased
  letter-spacing: .005em
  padding-left: 1rem
  padding-right: 1rem
  margin: 0
  line-height: inherit
  color: #d1d5db

article
  display: block
  padding-top: 5rem
  padding-bottom: 8rem
  line-height: 1.6
  word-spacing: -.04em
  max-width: 40rem
  width: 100%
  margin-left: auto
  margin-right: auto
  font-size: 1rem

@media screen and (max-width: 480px)
  article
    padding-top: 2rem
    padding-bottom: 4rem
</style>