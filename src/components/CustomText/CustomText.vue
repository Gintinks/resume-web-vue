<template>
  <p
    :class="[
      fontClass,
      colorClass,
      customClass,
      clickable ? 'cursor-pointer' : '',
      'whitespace-normal',
      'overflow-visible',
    ]"
    @click="handleClick"
  >
    <slot />
  </p>
</template>

<script setup lang="ts">
import { type FontPreset, fontConfig, colorConfig, type ColorPreset } from '@/assets/fonts/fonts'
import { computed } from 'vue'

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const props = defineProps<{
  preset?: FontPreset
  color?: ColorPreset
  customClass?: string
  clickable?: boolean
}>()

const fontClass = computed(() => fontConfig[props.preset ?? 'body-1-regular'])
const colorClass = computed(() => colorConfig[props.color ?? 'primary'])

const handleClick = (event: MouseEvent) => {
  if (props.clickable) {
    emit('click', event)
  }
}
</script>
