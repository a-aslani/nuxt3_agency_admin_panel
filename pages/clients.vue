<script setup lang="ts">

const clients = [
  {title: "Alireza Aslani", subtitle: "CEO of crmtois.com"},
  {title: "Alireza Aslani", subtitle: "CEO of crmtois.com"},
];

</script>

<template>
  <v-container>

    <AppPageTitle>Clients</AppPageTitle>

    <v-list class="mt-4" variant="flat">
      <v-list-item v-for="(client, k) in clients" :key="k">

        <v-divider v-if="k !== 0"/>

        <div class="d-flex align-center py-4">
          <v-avatar color="grey">AD</v-avatar>
          <div class="ps-4">
            <v-list-item-title>{{ client.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ client.subtitle }}</v-list-item-subtitle>
          </div>
          <v-spacer></v-spacer>
          <div>
            <v-btn color="primary">Click me</v-btn>
          </div>
        </div>

      </v-list-item>
    </v-list>


  </v-container>
</template>
