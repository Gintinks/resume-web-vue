export const fontConfig = {
  'headline-1':
    'text-3xl md:text-4xl lg:text-5xl leading-[40px] md:leading-[48px] lg:leading-[56px] font-bold font-inter',
  'headline-2':
    'text-2xl md:text-3xl lg:text-4xl leading-[32px] md:leading-[40px] lg:leading-[48px] font-bold font-inter',
  'headline-3': 'text-[24px] leading-[32px] font-medium font-inter',
  'headline-4-medium': 'text-[22px] leading-[30px] font-medium font-inter',
  'headline-4-regular': 'text-[22px] leading-[30px] font-normal font-inter',
  'headline-5-medium': 'text-[20px] leading-[26px] font-medium font-inter',
  'headline-5-regular': 'text-[20px] leading-[26px] font-normal font-inter',
  'headline-6-bold': 'text-[18px] leading-[24px] font-bold font-inter',
  'headline-6-medium': 'text-[18px] leading-[24px] font-medium font-inter',
  'headline-6-regular': 'text-[18px] leading-[24px] font-normal font-inter',
  'subtitle-1': 'text-[16px] leading-[24px] font-normal font-openSans',
  'subtitle-2': 'text-[14px] leading-[20px] font-medium font-openSans',
  'body-1-regular': 'text-[16px] leading-[24px] font-normal font-openSans',
  'body-1-semibold': 'text-[16px] leading-[24px] font-semibold font-openSans',
  'body-2-regular': 'text-[14px] leading-[20px] font-normal font-openSans',
  'body-2-semibold': 'text-[14px] leading-[20px] font-semibold font-openSans',
  'body-3-regular': 'text-[12px] leading-[18px] font-normal font-openSans',
  'body-3-semibold': 'text-[12px] leading-[18px] font-semibold font-openSans',
  'caption-1': 'text-[10px] leading-[14px] font-normal font-openSans',
}

export type FontPreset = keyof typeof fontConfig

export const colorConfig = {
  primary: 'text-black dark:text-white',
  secondary: 'text-gray-600 dark:text-gray-300',
  success: 'text-green-600 dark:text-green-400',
  danger: 'text-red-600 dark:text-red-400',
  warning: 'text-yellow-600 dark:text-yellow-400',
  muted: 'text-gray-500 dark:text-gray-400',
  none: '',
} as const

export type ColorPreset = keyof typeof colorConfig
