<template>
  <div class="flex-center">
    <img alt="faq" src="~/assets/faq.jpeg"/>
  </div>
  <p>
    <a href="/perks/killer">{{ t('killer_perks') }}</a>
  </p>
</template>

<script lang="ts" setup>
const {t} = useI18n()

const pageTitle = t('wiki')
const seoTitle = `FaceCamp671 - ${pageTitle}`

definePageMeta({
  title: 'wiki'
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