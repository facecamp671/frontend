<template>
  <div class="flex-center">
    <img alt="toxic" src="~/assets/toxic.jpeg"/>
  </div>
  <MDC :value="markdown"/>
</template>

<script lang="ts" setup>
const {t} = useI18n()

const markdown = computed(() => t('rulebook_text'))

const pageTitle = t('rulebook')
const seoTitle = `FaceCamp671 - ${pageTitle}`

definePageMeta({
  title: 'rulebook'
})

useSeoMeta({
  title: seoTitle,
  description: seoTitle,
  ogTitle: seoTitle,
  ogDescription: seoTitle,
  ogImage: '/apple-touch-icon.png',
  ogUrl: 'https://facecamp671.ru/rulebook',
  twitterTitle: seoTitle,
  twitterDescription: seoTitle,
  twitterImage: '/apple-touch-icon.png',
  twitterCard: 'summary'
})
</script>