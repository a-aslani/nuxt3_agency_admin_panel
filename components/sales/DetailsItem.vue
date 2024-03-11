<script setup lang="ts">

interface Props {
  fieldName: string,
}

const props = defineProps<Props>();

</script>

<template>
  <div>
    <v-row no-gutters justify="center" align="center">
      <v-col cols="3">
        <p class="text-grey font-weight-bold text-subtitle-2">{{ fieldName }}</p>
      </v-col>
      <v-col cols="9">
        <div class="text-subtitle-2 d-flex align-center justify-end">
          <div class="pe-1">
            <slot name="value"/>
          </div>
          <slot name="icons"></slot>
          <v-tooltip :text="`Edit ${fieldName}`" location="top">
            <template v-slot:activator="{props}">
              <v-btn v-bind="props" icon="mdi-pencil-outline" flat density="comfortable" size="small"></v-btn>
            </template>
          </v-tooltip>
          <v-tooltip :text="`Copy ${fieldName}`" location="top">
            <template v-slot:activator="{props}">
              <v-btn v-bind="props" icon="mdi-content-copy" flat density="comfortable" size="small"></v-btn>
            </template>
          </v-tooltip>
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>
