<template>
  <div class="flex-center">
    <img alt="salt" src="~/assets/salt.jpeg"/>
  </div>
  <MDC :value="markdown"/>
  <CommentsSection/>
</template>

<script lang="ts" setup>
const {t} = useI18n()

const markdown = computed(() => t('comments_text'))

const pageTitle = t('comments')
const seoTitle = `FaceCamp671 - ${pageTitle}`

definePageMeta({
  title: 'comments'
})

useSeoMeta({
  title: seoTitle,
  description: seoTitle,
  ogTitle: seoTitle,
  ogDescription: seoTitle,
  ogImage: '/apple-touch-icon.png',
  ogUrl: 'https://facecamp671.ru/salt',
  twitterTitle: seoTitle,
  twitterDescription: seoTitle,
  twitterImage: '/apple-touch-icon.png',
  twitterCard: 'summary'
})
</script>