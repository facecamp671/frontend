<template>
  <div class="flex-center">
    <img :alt="route.params.slug.toString()"
         :src="`/images/perks/${route.params.slug}.webp`"
         height="64"
         width="64"
    />
    <h1 style="margin: 0">{{ t(`perks.${route.params.slug}`) }}</h1>
  </div>

  <MDC :value="markdown || '< no description provided >'"/>

  <hr/>

  <CommentsSection/>
</template>

<script lang="ts" setup>
// import {parse} from 'yaml'
const {t, locale} = useI18n()
const route = useRoute()

// import PerksYAML from '~/assets/perks.yaml?raw'

const fileName = computed(() => `/data/perks/${route.params.slug}_${locale.value}.md`)
const {data: markdown} = await useFetch<string>(fileName)

// const allPerks = parse(PerksYAML ?? '[]') as Perk[]
// const curPerk = allPerks.find(perk => perk.slug === route.params.slug)

const pageTitle = t(`perks.${route.params.slug}`)
const seoTitle = `FaceCamp671 - ${pageTitle}`

definePageMeta({
  title: '',
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