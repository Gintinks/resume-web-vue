<script setup lang="ts">
import { DownloadsIcon, LinkedInIcon, MailIcon, MessageIcon } from '@/assets/icons'
import CustomText from '@/components/CustomText/CustomText.vue'
import Helper from '@/utils/helper'

interface Contact {
  name: string
  icon: string
  url: string
}

const contactImage: string = new URL('@/assets/images/contact.webp', import.meta.url).href

const contacts: Contact[] = [
  { name: 'Resume', icon: DownloadsIcon, url: 'Ignatius_Daniel_Ginting_Resume_2025.pdf' },
  { name: 'Email', icon: MailIcon, url: 'mailto:luhutginting@gmail.com' },
  { name: 'Whatsapp', icon: MessageIcon, url: 'https://wa.me/6281295144417' },
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/ignatius-daniel-ginting-945210205/',
  },
]
</script>

<template>
  <section id="contact-section">
    <div class="container">
      <div class="max-w-2xl text-center justify-self-center">
        <CustomText preset="headline-2" customClass="mb-4">Contact me</CustomText>
        <CustomText preset="headline-6-regular" color="secondary"
          >I'm always open to discussing new opportunities, interesting projects, or just having a
          chat about technology.</CustomText
        >
      </div>

      <div class="contact-wrapper">
        <div class="basis-2/5">
          <img
            :src="contactImage"
            alt="Ignatius Daniel Y T A Ginting"
            class="w-80 lg:w-96 rounded-2xl object-cover m-auto md:m-0"
          />
        </div>

        <div class="basis-3/5 text-center md:text-left">
          <CustomText preset="headline-6-bold" customClass="mb-4">Let's Connect</CustomText>
          <CustomText preset="body-1-regular"
            >Feel free to reach out if you'd like to discuss potential collaborations, have
            questions about my work, or just want to say hello!</CustomText
          >
          <div class="flex flex-col gap-4 mt-4">
            <div
              v-for="contact in contacts"
              :key="contact.name"
              class="group flex p-4 bg-gray-100 rounded-xl gap-4 cursor-pointer items-center"
              @click="Helper.handleOpenTab(contact.url)"
            >
              <div class="p-2 bg-blue-200/60 rounded-xl group-hover:bg-blue-200">
                <img :src="contact.icon" :alt="contact.name" class="tech-stack-icon" />
              </div>
              <CustomText preset="headline-6-medium">{{ contact.name }}</CustomText>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="./style.css" scoped />
