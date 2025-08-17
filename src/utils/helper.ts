const scrollToSection = (id: string | undefined) => {
  if (!id) return
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

const handleOpenTab = (url: string | undefined) => {
  if (!url) return

  window.open(url, '_blank')
}

const formatDate = (date: Date | undefined): string =>
  date ? date.toLocaleString('default', { month: 'short', year: 'numeric' }) : 'Present'

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

const Helper = {
  scrollToSection,
  handleOpenTab,
  formatDate,
  formatDuration,
}
export default Helper
