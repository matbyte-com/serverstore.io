<script setup lang="ts">
const props = defineProps<{ name: string }>()
const icon = computed(() =>
    defineAsyncComponent(() => import(`../assets/icons/${props.name}.svg`))
)
</script>

<template>
  <component :is="icon" />
</template>

<style scoped>

</style>
