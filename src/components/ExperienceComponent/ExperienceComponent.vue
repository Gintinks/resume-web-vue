<script setup lang="ts">
import { CalendarIcon, ClockIcon } from '@/assets/icons'
import CustomText from '@/components/CustomText/CustomText.vue'

interface Experience {
  company: string
  icon: string
  startDate: Date
  endDate?: Date
  employmentType: string
  role: string
  achievements: string[]
}

const experiences: Experience[] = [
  {
    company: 'AIA Singapore',
    icon: new URL('@/assets/images/aia.png', import.meta.url).href,
    startDate: new Date(2023, 3),
    employmentType: 'Full-time',
    role: 'Software Engineer',
    achievements: [
      'Implemented key features and functionalities in the AIA+ Singapore app using React Native components and libraries to improve performance and user experience.',
      'Assisted in integrating Singpass and Okta authentication into the AIA+ Singapore app.',
      'Supported the web team in developing and maintaining the AIA+ Singapore website using Next.js.',
      'Integrated existing AIA web infrastructure into the AIA+ Singapore app through React Native WebView.',
      'Contributed to automated testing and code reviews using Jest and React Testing Library.',
      'Contributed to integration of user analytics and crash reporting tools to monitor app performance and user behavior using Adobe Analytics and Microsoft Application Insights Web.',
      'Contributed to creation of reusable mini packages that is used in multiple projects in the company.',
    ],
  },
  {
    company: 'Environmental Office of Batu City, Malang',
    icon: new URL('@/assets/images/dlh.png', import.meta.url).href,
    startDate: new Date(2022, 2),
    endDate: new Date(2022, 8),
    employmentType: 'Internship',
    role: 'Frontend Developer',
    achievements: [
      'Work with a team to design and implement IT solution using Agile Scrum methodology.',
      'Develop responsive web systems using ReactJS and TailwindCSS for front-end.',
      'Deployed applications to AWS environments.',
    ],
  },
  {
    company: 'Citiasia Inc.',
    icon: new URL('@/assets/images/citiasia.png', import.meta.url).href,
    startDate: new Date(2021, 8),
    endDate: new Date(2022, 2),
    employmentType: 'Internship',
    role: 'Frontend Developer',
    achievements: [
      'Collaborate with multiple teams to create website marketplace for groceries in Jakarta.',
      'Implemented web pages UI and functionality using Jquery, Laravel, and Bootstrap.',
      'Working with the team to brainstorm and design idea for smart city project.',
    ],
  },
]

const formatDuration = (startDate: Date, endDate?: Date): string => {
  const effectiveEndDate = endDate ?? new Date()

  const totalMonths =
    (effectiveEndDate.getFullYear() - startDate.getFullYear()) * 12 +
    (effectiveEndDate.getMonth() - startDate.getMonth())

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const yearStr = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : ''
  const monthStr = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : ''

  return [yearStr, monthStr].filter(Boolean).join(' ')
}
</script>

<template>
  <section
    id="experiences-section"
    class="bg-gradient-to-br from-[rgb(87,139,255,0.1)] via-[rgb(64,91,149,0.1)] to-[rgb(231,238,244,0.1)]"
  >
    <div class="container">
      <div class="max-w-2xl text-center justify-self-center">
        <CustomText preset="headline-1" customClass="mb-4">Experiences</CustomText>
        <CustomText preset="body-1-regular">
          My professional journey in mobile development and software engineering.
        </CustomText>
      </div>

      <div class="relative mt-6">
        <!-- Vertical line -->
        <div class="absolute left-[30px] top-0 bottom-0 w-0.5 bg-red-300 hidden sm:block"></div>

        <!-- Experiences list -->
        <div class="flex flex-col gap-9">
          <div v-for="(exp, index) in experiences" :key="index" class="flex flex-row gap-6">
            <div
              class="bg-white w-15 h-15 rounded-full z-10 hidden sm:flex items-center justify-center"
            >
              <div
                class="w-13 h-13 rounded-full object-cover bg-gray-300/60 flex items-center justify-center"
              >
                <img :src="exp.icon" :alt="exp.company" class="w-8 h-8 object-cover" />
              </div>
            </div>

            <div class="flex flex-1 flex-col gap-6">
              <!-- Company + employment type -->
              <div
                class="flex p-4 bg-white rounded-md items-center justify-between flex-col sm:flex-row gap-4"
              >
                <div class="flex items-center gap-4 w-full sm:w-auto">
                  <div class="bg-white w-15 h-15 rounded-full z-10 flex sm:hidden items-center">
                    <div
                      class="w-13 h-13 rounded-full object-cover bg-gray-300/60 flex items-center justify-center"
                    >
                      <img :src="exp.icon" :alt="exp.company" class="w-8 h-8 object-cover" />
                    </div>
                  </div>
                  <CustomText preset="headline-6-medium">{{ exp.company }}</CustomText>
                </div>
                <div class="p-2 bg-blue-200/60 rounded-xl w-full sm:w-auto">
                  <CustomText preset="body-1-regular" class="text-center">{{
                    exp.employmentType
                  }}</CustomText>
                </div>
              </div>

              <!-- Role, dates, duration, achievements -->
              <div class="flex p-4 bg-white rounded-md flex-col gap-4">
                <CustomText preset="headline-6-medium">{{ exp.role }}</CustomText>

                <!-- Dates -->
                <div class="flex flex-col md:flex-row gap-2">
                  <div class="flex items-center gap-2">
                    <img :src="CalendarIcon" alt="calendar" class="tech-stack-icon fill-gray-500" />
                    <CustomText preset="body-1-regular" color="muted">
                      {{
                        exp.startDate.toLocaleString('default', { month: 'short', year: 'numeric' })
                      }}
                      -
                      {{
                        exp.endDate
                          ? exp.endDate.toLocaleString('default', {
                              month: 'short',
                              year: 'numeric',
                            })
                          : 'Present'
                      }}
                    </CustomText>
                  </div>

                  <div class="flex items-center gap-2">
                    <img :src="ClockIcon" alt="clock" class="tech-stack-icon fill-gray-500" />
                    <CustomText preset="body-1-regular" color="muted">
                      {{ formatDuration(exp.startDate, exp.endDate) }}
                    </CustomText>
                  </div>
                </div>

                <!-- Achievements -->
                <CustomText preset="headline-6-medium">Key Achievements:</CustomText>
                <div class="flex flex-col gap-2">
                  <div
                    v-for="(ach, achIndex) in exp.achievements"
                    :key="achIndex"
                    class="flex items-start gap-2"
                  >
                    <span class="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></span>
                    <CustomText>{{ ach }}</CustomText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="./style.css" scoped />
