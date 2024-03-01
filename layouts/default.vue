<script setup lang="ts">

</script>

<template>

  <v-layout>

    <AppHeader/>

    <AppNavigationDrawer/>

    <v-main>
      <slot/>
      <AppFooter/>
    </v-main>

  </v-layout>

</template>
