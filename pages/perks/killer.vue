<template>
  <div class="flex-center">
    <img alt="faq" src="~/assets/faq.jpeg"/>
  </div>

  <PerkTable :perks="killerPerks"/>

  <CommentsSection/>
</template>

<script lang="ts" setup>
import {parse} from 'yaml'
import PerksYAML from '~/assets/perks.yaml?raw'

const allPerks = parse(PerksYAML ?? '[]') as Perk[]
const killerPerks = allPerks.filter(perk => perk.type === 'killer')

const seoTitle = 'FaceCamp671 - Killer perks'

definePageMeta({
  title: 'Killer perks'
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