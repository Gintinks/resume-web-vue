<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-gray-300 dark:border-gray-700">
    <div class="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
      © {{ year }} Ignatius Daniel Ginting • Created with Vue 3.
    </div>
  </footer>
</template>

<style src="./style.css" scoped />
