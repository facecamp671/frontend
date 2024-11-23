<template>
  <div class="flex-center">
    <img alt="faq" src="~/assets/faq.jpeg"/>
  </div>

  <PerkTable :perks="allPerks"/>

  <hr/>

  <CommentsSection/>
</template>

<script lang="ts" setup>
import {parse} from 'yaml'
import PerksYAML from '~/assets/perks.yaml?raw'

const {t} = useI18n()

const allPerks = parse(PerksYAML ?? '[]') as Perk[]

const pageTitle = t('all_perks')
const seoTitle = `FaceCamp671 - ${pageTitle}`

definePageMeta({
  title: 'all_perks'
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