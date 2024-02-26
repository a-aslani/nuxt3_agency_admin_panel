<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

</script>

<template>
  <header class="w-full py-4 shadow flex items-center justify-between px-12">
    <div class="flex flex-col justify-center">
      <h2 class="uppercase font-bold text-2xl">Agency name</h2>
      <p class="text-sm">Description about my agency</p>
    </div>
    <div class="flex items-center space-x-2">

      <div class="flex items-center">
        <UButton icon="i-mdi-notifications-none" variant="ghost" color="gray" size="sm"/>
      </div>

      <div>
        <ClientOnly>
          <UButton
              :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
              color="gray"
              variant="ghost"
              aria-label="Theme"
              @click="isDark = !isDark"
              size="sm"
          />
          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </ClientOnly>
      </div>

      <div class="flex items-center">

        <div class="flex items-center mx-2">
          <UAvatar
              alt="Alireza Aslani"
              src="https://avatars.githubusercontent.com/u/28021705?v=4"
              chip-color="green"
              chip-position="top-right"
          />
        </div>

        <UButton variant="ghost" color="gray">Alireza Aslani</UButton>
        <UButton icon="i-mdi-dots-vertical" variant="ghost" color="gray" size="sm"/>

      </div>

    </div>
  </header>
</template>
