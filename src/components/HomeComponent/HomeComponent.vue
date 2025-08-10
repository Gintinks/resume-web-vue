<script setup lang="ts">
import CustomText from '@/components/CustomText/CustomText.vue'
import CustomButton from '../CustomButton/CustomButton.vue'

// Import the profile image
const profileImage = new URL('@/assets/images/profile.webp', import.meta.url).href

const techStack = [
  { name: 'React Native', icon: new URL('@/assets/icons/react.svg', import.meta.url).href },
  { name: 'NextJS', icon: new URL('@/assets/icons/next.svg', import.meta.url).href },
  { name: 'Vue', icon: new URL('@/assets/icons/vue.svg', import.meta.url).href },
  { name: 'TypeScript', icon: new URL('@/assets/icons/ts.svg', import.meta.url).href },
]

function openPdf() {
  window.open('Ignatius_Daniel_Ginting_Resume_2025.pdf', '_blank')
}
</script>

<template>
  <section
    class="home-section bg-gradient-to-br from-[rgb(87,139,255,0.1)] via-[rgb(64,91,149,0.1)] to-[rgb(231,238,244,0.1)]"
  >
    <div class="container home-container">
      <!-- Left Section -->
      <div class="left-section">
        <CustomText preset="headline-1">Hi, I am</CustomText>
        <CustomText
          preset="headline-2"
          custom-class="bg-gradient-to-r from-[#2563EB] to-[#DC2626] bg-clip-text text-transparent"
          >Ignatius Daniel Y T A Ginting</CustomText
        >

        <CustomText preset="body-1-regular" color="secondary" custom-class="description-text">
          Software Engineer with 3+ years of professional experience, specializing in Front-end
          technologies. Consistently delivers high-quality, scalable, and user-centric mobile and
          web applications. Brawijaya University Software Engineering graduate, experienced in
          collaborating effectively with diverse, international team environments, and committed to
          leveraging the latest technologies to solve complex problems and enhance user experience.
        </CustomText>

        <!-- Tech Stack -->
        <div class="tech-stack-wrapper">
          <CustomText preset="headline-4-medium">Tech Stack</CustomText>
          <div class="tech-stack-list">
            <div
              v-for="tech in techStack"
              :key="tech.name"
              class="tech-stack-item bg-white dark:bg-gray-900"
            >
              <img :src="tech.icon" :alt="tech.name" class="tech-stack-icon" />
              <CustomText>{{ tech.name }}</CustomText>
            </div>
          </div>
        </div>

        <div class="home-buttons">
          <CustomButton>
            <CustomText color="none">View Projects</CustomText>
          </CustomButton>
          <CustomButton preset="secondary" @click="openPdf">
            <CustomText color="none">Download Resume</CustomText>
          </CustomButton>
        </div>
      </div>

      <!-- Right Section -->
      <div class="right-section">
        <div class="relative group">
          <!-- Expanding gradient circle -->
          <div
            class="hidden md:block absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-[#2563EB]/60 to-[#DC2626]/60 scale-100 opacity-0 transition-all duration-500 ease-out group-hover:scale-125 group-hover:opacity-100 animate-spin-slow will-change-transform"
          />

          <!-- Profile image -->
          <img
            :src="profileImage"
            alt="Ignatius Daniel Y T A Ginting"
            class="rounded-full w-72 h-72 md:w-80 md:h-80 object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style src="./style.css" scoped />
