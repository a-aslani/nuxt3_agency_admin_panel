<script setup lang="ts">
const links = [
  {
    label: "Dashboard",
    icon: 'i-heroicons-home',
    to: '/',
    labelClass: 'py-2'
  },
  {
    label: 'PROJECTS',
    icon: 'i-heroicons-chart-bar',
    to: '/3',
    labelClass: 'py-2'
  },
  {
    label: "SUPPORT",
    icon: 'i-heroicons-home',
    to: '/5',
    labelClass: 'py-2'
  },
  {
    label: 'NEWSLETTER',
    icon: 'i-heroicons-command-line',
    to: '/23',
    labelClass: 'py-2'
  },
]
</script>

<template>
  <div class="px-6 py-4">
    <UVerticalNavigation :links="links" />
  </div>
</template>
