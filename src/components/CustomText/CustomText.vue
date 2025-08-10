<template>
  <p :class="[fontClass, colorClass, customClass]">
    <slot />
  </p>
</template>

<script setup lang="ts">
import { type FontPreset, fontConfig, colorConfig, type ColorPreset } from '@/assets/fonts/fonts'
import { computed } from 'vue'

const props = defineProps<{
  preset?: FontPreset
  color?: ColorPreset
  customClass?: string
}>()

const fontClass = computed(() => fontConfig[props.preset ?? 'body-1-regular'])
const colorClass = computed(() => colorConfig[props.color ?? 'primary'])
</script>
