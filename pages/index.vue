<script setup lang="ts">

const toast = useToast();

</script>

<template>
  <div class="flex h-screen grid place-space-center">

    <div>
      <UButton
          color="primary"
          size="lg"
          class="uppercase"
          icon="i-heroicons-pencil-square"
          @click="toast.add({ title: 'Hello world!' })"
      >
        Click me to handle
      </UButton>
    </div>

  </div>
</template>
