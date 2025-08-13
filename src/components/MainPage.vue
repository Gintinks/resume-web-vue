<script setup lang="ts">
import ContactComponent from './ContactComponent/ContactComponent.vue'
import ExperienceComponent from './ExperienceComponent/ExperienceComponent.vue'
import HomeComponent from './HomeComponent/HomeComponent.vue'
import ProjectsComponent from './ProjectsComponent/ProjectsComponent.vue'
import TheHeaders from './TheHeaders/TheHeaders.vue'
</script>

<template>
  <TheHeaders />
  <div class="mt-[68px]">
    <HomeComponent />
    <ProjectsComponent />
    <ExperienceComponent />
    <ContactComponent />
  </div>
</template>
