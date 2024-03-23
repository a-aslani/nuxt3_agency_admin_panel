<script setup lang="ts">

const clients = [
  {name: "Alireza Aslani", position: "CEO of crmtois.com", startedAt: "21-05-2024"},
  {name: "Alireza Aslani", position: "CEO of crmtois.com", startedAt: "06-02-2024"},
  {name: "Alireza Aslani", position: "CEO of crmtois.com", startedAt: "06-02-2024"},
  {name: "Alireza Aslani", position: "CEO of crmtois.com", startedAt: "06-02-2024"},
  {
    name: "Alireza Aslani",
    position: "CEO of crmtois.com wef wefwe wef34f43g34  43g43 34g 43",
    startedAt: "06-02-2024"
  },
  {name: "Alireza Aslani", position: "CEO of crmtois.com", startedAt: "06-02-2024"},
];

</script>

<template>
  <v-container>

    <AppPageTitle>Clients</AppPageTitle>

    <div class="mb-4">
      <v-btn color="primary">Click me</v-btn>
      <v-btn color="success" class="mx-4">Click me</v-btn>
      <v-btn color="info">Click me</v-btn>
      <v-btn color="error" class="ms-4">Click me</v-btn>
    </div>

    <div class="mt-2">

      <v-expansion-panels>

        <v-expansion-panel v-for="(client, k) in clients" :key="k">
          <v-expansion-panel-title hide-actions focusable>
            <v-row>
              <v-col cols="12" sm="4" md="2">
                <div class="text-uppercase mb-1 text-caption text-grey">Name</div>
                <div class="text-subtitle-1">{{ client.name }}</div>
              </v-col>
              <v-col cols="12" sm="4" md="3">
                <div class="text-uppercase mb-1 text-caption text-grey">Position</div>
                <div class="text-subtitle-1">{{ client.position }}</div>
              </v-col>
              <v-col cols="12" sm="12" md="2">
                <div class="text-uppercase mb-1 text-caption text-grey">Started at</div>
                <div class="text-subtitle-1">{{ client.startedAt }}</div>
              </v-col>
            </v-row>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
            voluptatibus! Eaque cupiditate minima
          </v-expansion-panel-text>
        </v-expansion-panel>


      </v-expansion-panels>
    </div>


  </v-container>
</template>
