<template>
  <div class="flex-center">
    <img alt="salt" src="~/assets/salt.jpeg"/>
  </div>
  <p>
    <small>You can write whatever you want here. There is no moderation</small>
  </p>
  <p id="remark42" ref="remark42Ref"></p>
</template>

<script lang="ts" setup>
const seoTitle = 'FaceCamp671 - Comments'

definePageMeta({
  title: 'Comments'
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

const remark42Ref = ref(null)
let remark42Instance: any

function initRemark42() {
  // @ts-ignore
  if (!window.REMARK42) {
    return
  }

  if (remark42Instance) {
    remark42Instance.destroy()
  }

  // @ts-ignore
  remark42Instance = window.REMARK42.createInstance({
    // @ts-ignore
    node: remark42Ref.value as HTMLElement,
    // @ts-ignore
    ...remark_config
  })
}

onMounted(() => {
  if (!import.meta.client) {
    return
  }

  // @ts-ignore
  if (window.REMARK42) {
    initRemark42()
  } else {
    window.addEventListener('REMARK42::ready', () => {
      initRemark42()
    })
  }
})

onUnmounted(() => {
  if (remark42Instance) {
    remark42Instance.destroy()
  }
})
</script>