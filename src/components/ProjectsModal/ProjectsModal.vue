<script setup lang="ts">
import CustomText from '@/components/CustomText/CustomText.vue'
import CustomButton from '@/components/CustomButton/CustomButton.vue'
import Helper from '@/utils/helper'
import type { Project } from '../ProjectsComponent/ProjectsItems'
import { AndroidIcon, AppleIcon, GithubIcon } from '@/assets/icons'
import { computed } from 'vue'

const props = defineProps<{
  modelValue: boolean
  project: Project | null
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function close() {
  emits('update:modelValue', false)
}

// Map url name to icon asset
const iconMap: Record<string, string> = {
  GitHub: GithubIcon,
  Android: AndroidIcon,
  IOS: AppleIcon,
}

// Filter project urls to only those that have an icon
const urlsWithIcons = computed(() => props.project?.url?.filter((u) => iconMap[u.name]) ?? [])

function onUrlClick(u: { name: string; link: string; type?: string } | undefined) {
  if (!u || !u.link) return
  if (u.type === 'scroll') {
    return Helper.scrollToSection(u.link)
  }
  return Helper.handleOpenTab(u.link)
}
</script>

<template>
  <Transition name="fade">
    <div
      v-if="modelValue && project"
      class="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/50"
      @click.self="close"
    >
      <Transition name="scale">
        <div
          v-if="modelValue"
          class="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-auto flex flex-col"
        >
          <div
            class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"
          >
            <div class="flex gap-2 items-center">
              <img :src="project.icon" alt="Project Icon" class="w-8 h-8 rounded-lg" />
              <CustomText preset="headline-5-medium">{{ project.title }}</CustomText>
            </div>
            <button
              class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              @click="close"
            >
              ✕
            </button>
          </div>

          <div class="p-4 overflow-y-auto max-h-[70vh]">
            <div class="flex flex-col gap-4 md:px-6 md:pb-6">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-40 sm:h-50 md:h-60 object-cover rounded-md"
              />

              <div class="flex flex-col md:flex-row gap-4 justify-between md:items-center">
                <CustomText preset="body-1-regular" color="muted">
                  {{ Helper.formatDate(project.startDate) }} -
                  {{ Helper.formatDate(project.endDate) }}
                </CustomText>
                <div class="flex flex-wrap gap-2 items-center">
                  <CustomButton
                    size="small"
                    v-if="project.title === 'Portfolio Website'"
                    preset="secondary"
                    @click="
                      Helper.scrollToSection(project.url.find((u) => u.name === 'Website')?.link)
                    "
                  >
                    <CustomText color="none">View Project</CustomText>
                  </CustomButton>
                  <CustomButton
                    size="small"
                    v-else
                    :preset="project.url.find((u) => u.name === 'Website') ? 'secondary' : 'cancel'"
                    @click="
                      Helper.handleOpenTab(project.url.find((u) => u.name === 'Website')?.link)
                    "
                  >
                    <CustomText color="none">View Project</CustomText>
                  </CustomButton>

                  <!-- icons clickable -->
                  <div class="flex gap-2 items-center">
                    <button
                      v-for="u in urlsWithIcons"
                      :key="u.name"
                      type="button"
                      class="group w-9 h-9 p-0 flex items-center justify-center cursor-pointer bg-gray-300 rounded-lg"
                      @click="onUrlClick(u)"
                      :aria-label="`Open ${project.title} ${u.name}`"
                    >
                      <img :src="iconMap[u.name]" :alt="`${u.name} Icon`" class="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <CustomText preset="body-1-semibold" customClass="mb-2">Description</CustomText>
                <CustomText class="text-justify">
                  {{ project.description }}
                </CustomText>
              </div>

              <div>
                <CustomText preset="body-1-semibold" customClass="mb-2">Tech Stacks</CustomText>
                <div class="flex flex-wrap gap-2">
                  <CustomText
                    v-for="(tag, tagIndex) in project.tags"
                    :key="tagIndex"
                    customClass="bg-red-400/20 rounded-xl px-2 text-red-400"
                  >
                    {{ tag }}
                  </CustomText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped>
/* Modal scale + fade */
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.scale-leave-to {
  opacity: 0;
}
</style>
