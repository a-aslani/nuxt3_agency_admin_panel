<script setup lang="ts">

</script>

<template>

  <div class="flex flex-col">
    <AppHeader/>


    <div class="w-full flex">
      <div class="w-2/12">
        <AppMenuNavbar/>
      </div>

      <div class="w-10/12">
        <slot/>
      </div>
    </div>

    <AppFooter/>
    <UNotifications/>
  </div>

</template>
