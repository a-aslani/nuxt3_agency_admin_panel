<script setup lang="ts">

</script>

<template>

  <v-layout>

    <AppHeader/>
    
    <AppNavigationDrawer/>

    <v-main>
      <slot/>
    </v-main>

  </v-layout>


</template>
