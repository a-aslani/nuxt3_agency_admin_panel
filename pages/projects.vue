<script setup lang="ts">

const show = ref(false)

const selected = ref([])
const items = [
  {
    name: 'Apple',
    location: 'Washington',
    height: '0.1',
    base: '0.07',
    volume: '0.0001',
    email: 'mail.hederpup@gmail.com',
    phone: "+589884665",
    campaign: "Google Ads",
    email2: 'mail.hederpup@gmail.com',
    phone2: "+589884665",
    campaign2: "Google Ads",
    email3: 'mail.hederpup@gmail.com',
    phone3: "+589884665",
    campaign3: "Google Ads",
  },
  {
    name: 'Banana',
    location: 'Ecuador',
    height: '0.2',
    base: '0.05',
    volume: '0.0002',
    email: 'mail.hederpup@gmail.com',
    phone: "+589884665",
    campaign: "Google Ads",
    email2: 'mail.hederpup@gmail.com',
    phone2: "+589884665",
    campaign2: "Google Ads",
    email3: 'mail.hederpup@gmail.com',
    phone3: "+589884665",
    campaign3: "Google Ads",
  },
  {
    name: 'Grapes',
    location: 'Italy',
    height: '0.02',
    base: '0.02',
    volume: '0.00001',
    email: 'mail.hederpup@gmail.com',
    phone: "+589884665",
    campaign: "Google Ads",
    email2: 'mail.hederpup@gmail.com',
    phone2: "+589884665",
    campaign2: "Google Ads",
    email3: 'mail.hederpup@gmail.com',
    phone3: "+589884665",
    campaign3: "Google Ads",
  },
  {
    name: 'Watermelon',
    location: 'China',
    height: '0.4',
    base: '0.3',
    volume: '0.03',
    email: 'mail.hederpup@gmail.com',
    phone: "+589884665",
    campaign: "Google Ads",
    email2: 'mail.hederpup@gmail.com',
    phone2: "+589884665",
    campaign2: "Google Ads",
    email3: 'mail.hederpup@gmail.com',
    phone3: "+589884665",
    campaign3: "Google Ads",
  },
  {
    name: 'Pineapple',
    location: 'Thailand',
    height: '0.3',
    base: '0.2',
    volume: '0.005',
    email: 'mail.hederpup@gmail.com',
    phone: "+589884665",
    campaign: "Google Ads",
    email2: 'mail.hederpup@gmail.com',
    phone2: "+589884665",
    campaign2: "Google Ads",
    email3: 'mail.hederpup@gmail.com',
    phone3: "+589884665",
    campaign3: "Google Ads",
  },
  {
    name: 'Cherries',
    location: 'Turkey',
    height: '0.02',
    base: '0.02',
    volume: '0.00001',
    email: 'mail.hederpup@gmail.com',
    phone: "+589884665",
    campaign: "Google Ads",
    email2: 'mail.hederpup@gmail.com',
    phone2: "+589884665",
    campaign2: "Google Ads",
    email3: 'mail.hederpup@gmail.com',
    phone3: "+589884665",
    campaign3: "Google Ads",
  },
  {
    name: 'Mango',
    location: 'India',
    height: '0.15',
    base: '0.1',
    volume: '0.0005',
    email: 'mail.hederpup@gmail.com',
    phone: "+589884665",
    campaign: "Google Ads",
    email2: 'mail.hederpup@gmail.com',
    phone2: "+589884665",
    campaign2: "Google Ads",
    email3: 'mail.hederpup@gmail.com',
    phone3: "+589884665",
    campaign3: "Google Ads",
  },
  {
    name: 'Strawberry',
    location: 'USA',
    height: '0.03',
    base: '0.03',
    volume: '0.00002',
    email: 'mail.hederpup@gmail.com',
    phone: "+589884665",
    campaign: "Google Ads",
    email2: 'mail.hederpup@gmail.com',
    phone2: "+589884665",
    campaign2: "Google Ads",
    email3: 'mail.hederpup@gmail.com',
    phone3: "+589884665",
    campaign3: "Google Ads",
  },
  {
    name: 'Peach',
    location: 'China',
    height: '0.09',
    base: '0.08',
    volume: '0.0004',
    email: 'mail.hederpup@gmail.com',
    phone: "+589884665",
    campaign: "Google Ads",
    email2: 'mail.hederpup@gmail.com',
    phone2: "+589884665",
    campaign2: "Google Ads",
    email3: 'mail.hederpup@gmail.com',
    phone3: "+589884665",
    campaign3: "Google Ads",
  },
  {
    name: 'Kiwi',
    location: 'New Zealand',
    height: '0.05',
    base: '0.05',
    volume: '0.0001',
    email: 'mail.hederpup@gmail.com',
    phone: "+589884665",
    campaign: "Google Ads",
    email2: 'mail.hederpup@gmail.com',
    phone2: "+589884665",
    campaign2: "Google Ads",
    email3: 'mail.hederpup@gmail.com',
    phone3: "+589884665",
    campaign3: "Google Ads",
  },
];

function handleClick(value: any, row: any) {
  highlightClickedRow(value);
  show.value = !show.value;
  console.log(row.item)
}

function highlightClickedRow(value: any) {
  const tr = value.target.parentNode;
  // tr.classList.add('bg-red');
}

</script>

<template>
  <v-container>

    <AppPageTitle>Projects</AppPageTitle>

    <v-data-table
        @click:row="handleClick"
        v-model="selected"
        :items="items"
        item-value="name"
        show-select
        density="default"
        fixed-header
        hover
        item-selectable
    ></v-data-table>

    <!--    <SalesBottomSheet :show="show"/>-->
    <v-bottom-sheet v-model="show">

      <v-card>

        <v-tabs
            color="primary"
            center-active
            show-arrows
        >
          <v-tab>Information</v-tab>
          <v-tab>Banking</v-tab>
          <v-tab>Activity</v-tab>
          <v-tab>Note</v-tab>
          <v-tab>History</v-tab>
          <v-tab>Tags</v-tab>
          <v-tab>KYC</v-tab>
          <v-tab>Messages</v-tab>
        </v-tabs>

        <v-card-text>
          <div class="pb-6">
            <v-row>
              <v-col cols="12" md="6" lg="3">
                <SalesDetailsItem field-name="Name">
                  <template v-slot:value>Alireza Aslani</template>
                </SalesDetailsItem>
                <SalesDetailsItem field-name="Title">
                  <template v-slot:value>-</template>
                </SalesDetailsItem>
                <SalesDetailsItem field-name="Email">
                  <template v-slot:icons>
                    <v-tooltip text="Send Email" location="top">
                      <template v-slot:activator="{props}">
                        <v-btn v-bind="props" icon="mdi-email-outline" flat density="comfortable" size="small"></v-btn>
                      </template>
                    </v-tooltip>
                  </template>
                  <template v-slot:value>
                    <a href="mailto:a.alsani.dev@gmail.com">a.alsani.dev@gmail.com</a>
                  </template>
                </SalesDetailsItem>
                <SalesDetailsItem field-name="Phone">
                  <template v-slot:icons>
                    <v-tooltip text="Call" location="top">
                      <template v-slot:activator="{props}">
                        <v-btn v-bind="props" icon="mdi-phone-outline" flat density="comfortable" size="small"></v-btn>
                      </template>
                    </v-tooltip>
                  </template>
                  <template v-slot:value><a class="ms-1" href="tel:1 (800) 667-6389">1 (800) 667-6389</a></template>
                </SalesDetailsItem>
                <SalesDetailsItem field-name="Mobile">
                  <template v-slot:icons>
                    <v-tooltip text="Call" location="top">
                      <template v-slot:activator="{props}">
                        <v-btn v-bind="props" icon="mdi-phone-outline" flat density="comfortable" size="small"></v-btn>
                      </template>
                    </v-tooltip>
                  </template>
                  <template v-slot:value><a class="ms-1" href="tel:5 (852) 891-45556">5 (852) 891-45556</a></template>
                </SalesDetailsItem>
                <SalesDetailsItem field-name="Website">
                  <template v-slot:value>
                    <a href="https://google.com" target="_blank">google.com</a>
                  </template>
                </SalesDetailsItem>
                <SalesDetailsItem field-name="Company">
                  <template v-slot:value>BigLife Inc.</template>
                </SalesDetailsItem>
                <SalesDetailsItem field-name="Industry">
                  <template v-slot:value>-</template>
                </SalesDetailsItem>
                <SalesDetailsItem field-name="Employees">
                  <template v-slot:value>-</template>
                </SalesDetailsItem>
                <SalesDetailsItem field-name="Lead Source">
                  <template v-slot:value>-</template>
                </SalesDetailsItem>
                <v-row class="mt-4" justify="space-between" align="center">
                  <v-btn size="small" color="primary">
                    Login to CA
                  </v-btn>
                  <v-btn size="small">Reset Password</v-btn>
                  <v-btn size="small">Change password</v-btn>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-card-text>

      </v-card>

    </v-bottom-sheet>
  </v-container>
</template>

<style scoped>

</style>
