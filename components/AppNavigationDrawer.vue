<script setup lang="ts">

</script>

<template>
  <v-navigation-drawer border="0">
    <v-list>
      <v-list-item
          prepend-avatar="https://avatars.githubusercontent.com/u/28021705?v=4"
          title="Alireza Aslani"
          subtitle="CEO"
      ></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item to="/" prepend-icon="mdi-view-dashboard" title="Dashboard"></v-list-item>

      <v-list-group prepend-icon="mdi-account-multiple">
        <template v-slot:activator="{props}">
          <v-list-item v-bind="props"
                       title="Sales">
          </v-list-item>
        </template>

        <v-list-item to="/discovery-session" title="Discovery Sessions"></v-list-item>
        
        <v-list-item to="/clients" title="Clients"></v-list-item>

        <v-list-item to="/projects" title="Projects"></v-list-item>


      </v-list-group>

      <v-list-group prepend-icon="mdi-newspaper-variant-multiple">

        <template v-slot:activator="{props}">
          <v-list-item v-bind="props" title="Newsletter"></v-list-item>
        </template>

        <v-list-item to="/subscribers" title="Subscribers"></v-list-item>

        <v-list-item to="/news" title="News"></v-list-item>

      </v-list-group>


      <v-list-item to="/support" prepend-icon="mdi-face-agent" title="Support"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
