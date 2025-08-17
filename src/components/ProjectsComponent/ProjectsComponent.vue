<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import CustomText from '@/components/CustomText/CustomText.vue'
import CustomButton from '../CustomButton/CustomButton.vue'
import Helper from '@/utils/helper'
import ProjectsModal from '../ProjectsModal/ProjectsModal.vue'
import { projects, type Project } from './ProjectsItems'

const showAll = ref(false)
const columns = ref(3)

const updateColumns = () => {
  if (window.innerWidth < 768) {
    columns.value = 1
  } else if (window.innerWidth < 1024) {
    columns.value = 2
  } else {
    columns.value = 3
  }
}

const isOpen = ref(false)
const selectedProject = ref<Project | null>(null)

const openProjectModal = (project: Project) => {
  selectedProject.value = project
  isOpen.value = true
}

onMounted(() => {
  updateColumns()
  window.addEventListener('resize', updateColumns)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateColumns)
})

const visibleProjects = computed(() =>
  showAll.value ? projects : projects.slice(0, columns.value),
)
</script>

<template>
  <section id="projects-section">
    <div class="container">
      <div class="projects-header">
        <CustomText preset="headline-1" customClass="mb-4">Projects</CustomText>
        <CustomText preset="body-1-regular">
          Here are some of the projects I've worked on, showcasing my expertise in mobile
          development and software engineering.
        </CustomText>
      </div>

      <TransitionGroup name="fade" tag="div" class="projects-list">
        <div
          v-for="project in visibleProjects"
          :key="project.title"
          class="project-card group"
          @click="openProjectModal(project)"
        >
          <div class="project-content">
            <img :src="project.image" :alt="project.title" class="project-thumbnail" />

            <div class="project-header">
              <img :src="project.icon" alt="Project Icon" class="project-icon" />
              <div>
                <CustomText preset="headline-5-medium">{{ project.title }}</CustomText>
                <CustomText preset="body-1-regular" color="muted">
                  {{ Helper.formatDate(project.startDate) }} -
                  {{ Helper.formatDate(project.endDate) }}
                </CustomText>
              </div>
            </div>

            <CustomText class="project-description">
              {{ project.description }}
            </CustomText>

            <div class="project-tags">
              <CustomText
                v-for="(tag, tagIndex) in project.tags"
                :key="tagIndex"
                class="project-tag"
              >
                {{ tag }}
              </CustomText>
            </div>

            <div>
              <CustomButton
                size="small"
                v-if="project.title === 'Portfolio Website'"
                preset="secondary"
                @click.stop="
                  Helper.scrollToSection(project.url.find((u) => u.name === 'Website')?.link)
                "
              >
                <CustomText color="none">View Project</CustomText>
              </CustomButton>

              <CustomButton
                size="small"
                v-else
                :preset="project.url.find((u) => u.name === 'Website') ? 'secondary' : 'cancel'"
                @click.stop="
                  Helper.handleOpenTab(project.url.find((u) => u.name === 'Website')?.link)
                "
              >
                <CustomText color="none">View Project</CustomText>
              </CustomButton>
            </div>
          </div>
        </div>
      </TransitionGroup>

      <div class="projects-show-more">
        <CustomButton
          size="small"
          preset="secondary"
          v-if="projects.length > columns"
          @click="showAll = !showAll"
        >
          <CustomText color="none">
            {{ showAll ? 'Show Less' : 'Show More' }}
          </CustomText>
        </CustomButton>
      </div>
    </div>
  </section>
  <ProjectsModal v-model="isOpen" :project="selectedProject" />
</template>

<style src="./style.css" scoped />
