<template>
  <div class="flex-center">
    <img alt="faq" src="~/assets/faq.jpeg"/>
  </div>

  <PerkTable :perks="allPerks"/>

  <CommentsSection/>
</template>

<script lang="ts" setup>
import {parse} from 'yaml'
import PerksYAML from '~/assets/perks.yaml?raw'

const allPerks = parse(PerksYAML ?? '[]') as Perk[]

const seoTitle = 'FaceCamp671 - All perks'

definePageMeta({
  title: 'All perks'
})

useSeoMeta({
  title: seoTitle,
  description: seoTitle,
  ogTitle: seoTitle,
  ogDescription: seoTitle,
  ogImage: '/apple-touch-icon.png',
  ogUrl: 'https://facecamp671.ru/perks/killer',
  twitterTitle: seoTitle,
  twitterDescription: seoTitle,
  twitterImage: '/apple-touch-icon.png',
  twitterCard: 'summary'
})
</script>