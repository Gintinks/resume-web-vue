<script setup lang="ts">
import { ref } from 'vue'
import CustomText from '@/components/CustomText/CustomText.vue'
import Helper from '@/utils/helper'

const isDark = ref(localStorage.getItem('theme') === 'dark')
const isMenuOpen = ref(false)

function toggleDarkMode() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

const navItems = [
  { label: 'Home', target: 'home-section' },
  { label: 'Projects', target: 'projects-section' },
  { label: 'Experiences', target: 'experiences-section' },
  { label: 'Contact', target: 'contact-section' },
]

function handleNavClick(target: string) {
  Helper.scrollToSection(target)
  isMenuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="container container-header">
      <div class="flex-1">
        <CustomText preset="headline-6-bold">Daniel's Resume</CustomText>
      </div>

      <nav class="navigation-wrapper">
        <CustomText
          v-for="item in navItems"
          :key="item.target"
          clickable
          @click="handleNavClick(item.target)"
        >
          {{ item.label }}
        </CustomText>
      </nav>

      <div class="flex justify-end sm:flex-1">
        <div class="gap-2 flex">
          <!-- Dark mode toggle -->
          <div>
            <button @click="toggleDarkMode" class="dark-toggle-btn" aria-label="Toggle dark mode">
              <span v-if="isDark" class="text-yellow-400">🌙</span>
              <span v-else class="text-gray-800">☀️</span>
            </button>
          </div>
          <button
            class="group inline-flex md:hidden w-9 h-9 text-slate-800 bg-white text-center items-center justify-center shadow-[0_1px_0_theme(colors.slate.950/.04),0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] hover:shadow-[0_1px_0_theme(colors.slate.950/.04),0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition"
            :aria-pressed="isMenuOpen"
            aria-label="Toggle menu"
            @click="toggleMenu"
          >
            <svg
              class="w-6 h-6 fill-current pointer-events-none"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                class="origin-center -translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]"
                y="7"
                width="16"
                height="2"
                rx="1"
              ></rect>
              <rect
                class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45"
                y="7"
                width="16"
                height="2"
                rx="1"
              ></rect>
              <rect
                class="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[135deg]"
                y="7"
                width="16"
                height="2"
                rx="1"
              ></rect>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile dropdown -->
    <Transition name="dropdown">
      <div v-if="isMenuOpen" class="dropdown-menu">
        <CustomText
          v-for="item in navItems"
          :key="item.target"
          clickable
          @click="handleNavClick(item.target)"
        >
          {{ item.label }}
        </CustomText>
      </div>
    </Transition>
  </header>
</template>

<style src="./style.css" scoped />
