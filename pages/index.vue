<template>
  <div class="flex-center">
    <img alt="about_me" src="~/assets/about_me.jpeg"/>
  </div>
  <MDC :value="markdown"/>
</template>

<script lang="ts" setup>
const {t} = useI18n()

const markdown = computed(() => t('about_text'))

const pageTitle = t('about')
const seoTitle = `FaceCamp671 - ${pageTitle}`

definePageMeta({
  title: 'about',
})

useSeoMeta({
  title: seoTitle,
  description: seoTitle,
  ogTitle: seoTitle,
  ogDescription: seoTitle,
  ogImage: '/apple-touch-icon.png',
  ogUrl: 'https://facecamp671.ru',
  twitterTitle: seoTitle,
  twitterDescription: seoTitle,
  twitterImage: '/apple-touch-icon.png',
  twitterCard: 'summary'
})
</script>