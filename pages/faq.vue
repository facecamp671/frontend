<template>
  <div class="flex-center">
    <img alt="faq" src="~/assets/faq.jpeg"/>
  </div>
  <MDC :value="markdown"/>
</template>

<script lang="ts" setup>
const {t} = useI18n()

const markdown = computed(() => t('faq_text'))

const pageTitle = t('faq')
const seoTitle = `FaceCamp671 - ${pageTitle}`

definePageMeta({
  title: 'faq'
})

useSeoMeta({
  title: seoTitle,
  description: seoTitle,
  ogTitle: seoTitle,
  ogDescription: seoTitle,
  ogImage: '/apple-touch-icon.png',
  ogUrl: 'https://facecamp671.ru/faq',
  twitterTitle: seoTitle,
  twitterDescription: seoTitle,
  twitterImage: '/apple-touch-icon.png',
  twitterCard: 'summary'
})
</script>