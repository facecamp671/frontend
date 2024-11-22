<template>
  <h1>{{ title }}</h1>
  <div class="flex-row langs">
    <img alt="ru" src="~/assets/ru.png" @click="setLocale('ru')"/>
    <img alt="us" src="~/assets/us.png" @click="setLocale('en')"/>
  </div>
  <AppNav/>
</template>
<script lang="ts" setup>
import AppNav from "~/components/AppNav.vue";

const {t} = useI18n()

const route = useRoute();
const title = computed(() => t(route.meta.title as string))

const {setLocale} = useI18n()
</script>
<style lang="sass" scoped>
.top-line
  justify-content: space-between

.langs
  position: absolute
  top: 0
  right: 20px
  gap: 10px

  img
    cursor: pointer
</style>
