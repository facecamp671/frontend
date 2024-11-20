<template>
  <h1>{{ route.meta.title }}</h1>
  <AppNav/>
</template>
<script lang="ts" setup>
import AppNav from "~/components/AppNav.vue";

const route = useRoute();
</script>
<style lang="sass" scoped>
</style>
