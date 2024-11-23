<template>
  <input v-model="query"
         :placeholder="searchByTags"
         type="text"/>
  <table>
    <thead>
    <tr>
      <td>
        {{ t('rank') }}
      </td>
      <td>
        {{ t('icon') }}
      </td>
      <td>
        {{ t('title') }}
      </td>
      <td>
        {{ t('tags') }}
      </td>
    </tr>
    </thead>

    <tbody>
    <PerkCard
        v-for="(perk, index) in filteredPerks"
        :key="perk.slug"
        :hide-tags="hideTags"
        :perk="perk"
        :rank="index + 1"
        @tag="onAddTag"/>
    </tbody>
  </table>
</template>
<script lang="ts" setup>
import type {Perk} from "~/utils/types";

const {t} = useI18n()

interface Props {
  perks: Perk[];
  hideTags?: string[]
}

const props = defineProps<Props>()

const query = ref('')

const queryTags = computed<string[]>(() => query.value
    .split(/\s+/)
    .map((s) => s.trim())
    .filter((s) => s))

const searchByTags = computed(() => t('search_by_tags'))
const filteredPerks = computed(() => props.perks
    .filter((p) => queryTags.value.every((tag) => p.tags.includes(tag))))
const hideTags = computed(() => (props.hideTags ?? []).concat(queryTags.value))

function onAddTag(tag: string) {
  const curQuery = query.value.trim()

  if (!curQuery) {
    query.value = tag
  } else {
    query.value = curQuery + " " + tag
  }
}
</script>
<style lang="sass" scoped>
input
  margin: 10px

td
  text-align: center
  vertical-align: middle
</style>
