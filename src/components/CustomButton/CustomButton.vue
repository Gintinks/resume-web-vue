<template>
  <button :class="buttonClasses" @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps<{
  preset?: 'primary' | 'secondary' | 'ternary' | 'cancel'
  size?: 'small' | 'large'
}>()

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}

const baseClasses = 'rounded-md text-base font-medium transition-colors border-1 cursor-pointer'

const presetClasses: Record<string, string> = {
  primary: 'bg-red-500 text-white hover:bg-red-500/80',
  secondary: 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white',
  ternary: 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
  cancel: 'bg-gray-200 text-black border-gray-300',
}

const sizeClasses: Record<string, string> = {
  small: 'py-2 px-4',
  large: 'py-3 px-8',
}

const buttonClasses = computed(() => {
  const preset = presetClasses[props.preset || 'primary']
  const size = sizeClasses[props.size || 'large']
  return `${baseClasses} ${size} ${preset}`
})
</script>
