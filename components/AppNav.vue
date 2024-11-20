<template>
  <div class="nav-line">
    <template v-for="link in links" :key="link.label">
      <a v-if="route.path !== link.href" :href="link.href" class="nav-link">
        {{ link.label }}
      </a>
      <span v-else class="nav-link">
        {{ link.label }}
      </span>
    </template>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute()

interface Link {
  label: string;
  href: string;
}

const links: Link[] = [
  {
    label: "FAQ",
    href: "/faq"
  },
  {
    label: "Rulebook",
    href: "/rulebook"
  },
  {
    label: "Comments",
    href: "/salt"
  },
  {
    label: "About",
    href: "/"
  }
]
</script>
<style lang="sass" scoped>
.nav-line
  margin-bottom: 2rem
  display: flex
  flex-direction: row
  align-items: center
  justify-content: flex-end
  text-align: right
  font-size: 14px

.nav-link
  margin-left: .75rem
  color: #f3f4f6
  text-decoration: underline

span.nav-link
  color: #66686d
  font-weight: 800
  text-decoration: none
</style>
