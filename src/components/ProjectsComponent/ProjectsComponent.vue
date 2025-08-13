<script setup lang="ts">
import CustomText from '@/components/CustomText/CustomText.vue'

const projects = []
</script>

<template>
  <section id="projects-section">
    <div class="container">
      <div class="max-w-2xl text-center justify-self-center">
        <CustomText preset="headline-1" customClass="mb-4">Projects</CustomText>
        <CustomText preset="body-1-regular">
          Here are some of the projects I've worked on, showcasing my expertise in mobile
          development and software engineering.
        </CustomText>
      </div>
    </div>
  </section>
</template>

<style src="./style.css" scoped />
