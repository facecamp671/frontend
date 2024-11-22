<template>
  <p id="remark42" ref="remark42Ref"></p>
</template>
<script lang="ts" setup>
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

onBeforeUnmount(() => {
  if (remark42Instance) {
    remark42Instance.destroy()
  }
})
</script>
<style lang="sass" scoped>
</style>
