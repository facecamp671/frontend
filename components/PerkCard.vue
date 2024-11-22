<template>
  <tr>
    <td class="rank">
      #{{ props.rank }}
    </td>
    <td>
      <div style="position: relative">
        <img :alt="props.perk.name"
             :src="`/images/perks/${props.perk.slug}.webp`"
             height="64"
             width="64"/>
        <img alt="bg"
             class="perk-icon-bg"
             height="64"
             src="/images/very_rare.png"
             width="64"/>
      </div>
    </td>
    <td class="perk-name">
      <a :href="`/perks/${props.perk.slug}`">{{ t(`perks.${props.perk.slug}`) }}</a>
    </td>
    <td class="perk-tags">
      <img v-for="tag in sortedTags"
           :key="tag"
           :alt="tag"
           :src="`/images/tags/${tag}.webp`"
           class="tag-icon"
           height="40"
           width="40"
           @click="emit('tag', tag)"/>
    </td>
  </tr>
</template>
<script lang="ts" setup>
import type {Perk} from "~/utils/types";

const {t} = useI18n()

interface Props {
  rank: number;
  perk: Perk;
  hideTags?: string[];
}

const props = defineProps<Props>()
const emit = defineEmits(['tag'])

const hideTags = computed(() => props.hideTags ?? [])

const sortedTags = computed(() => props.perk.tags
    .filter((tag) => !hideTags.value.includes(tag))
    .sort((a, b) => a.localeCompare(b)))
</script>
<style lang="sass" scoped>
.rank
  padding: 10px
  font-size: 14px

td
  text-align: center
  vertical-align: middle

.perk-icon
  position: relative

.perk-icon-bg
  position: absolute
  top: 0
  left: 0
  z-index: -1

.perk-name
  text-align: start

.perk-tags
  text-align: start

.tag-icon
  cursor: pointer

img
  margin: 0
</style>
