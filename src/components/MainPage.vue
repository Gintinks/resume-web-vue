<script setup lang="ts">
import ContactComponent from './ContactComponent/ContactComponent.vue';
import HomeComponent from './HomeComponent/HomeComponent.vue'
import TheHeaders from './TheHeaders/TheHeaders.vue'
</script>

<template>
  <TheHeaders />
  <div class="mt-[68px]">
    <HomeComponent />
    <ContactComponent />
  </div>
</template>
