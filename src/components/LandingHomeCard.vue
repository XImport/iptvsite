<template>
  <div>
    <div class="justify-center mt-12 animate__animated animate__fadeInUp">
      <h1 class="text-center">IN OUR SERVICE</h1>
      <v-divider class="mx-4 devider--title yellow"></v-divider>
    </div>

    <v-container
      fluid
      style="margin-left: 10%; padding: 50px; width: 80%; margin-right: 50%"
    >
      <v-row no-gutters class="rounded-xl SoftBgGrey pa-4">
        <v-col
          v-for="(card, index) in cardsLanding"
          :key="index"
          class="pa-0"
          cols="12"
          sm="4"
        >
          <v-card class="animate__animated animate__fadeInUp SoftBgGrey" >
            <v-img :src="card.src" class="rounded-xl"></v-img>

            <v-card-title class="justify-center">{{ card.Title }}</v-card-title>
            <v-card-subtitle class="text-center">{{
              card.subTitle
            }}</v-card-subtitle>
          </v-card>
        </v-col>
        <v-card-actions class="justify-center" id="btn--center">
      <v-btn class="pink white--text pl-12 pr-12 pt-6 pb-6">
        TEST FOR FREE "24H"
        <v-icon>mdi-arrow-right</v-icon></v-btn
      >
    </v-card-actions>
      </v-row>
    
    </v-container>
    
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    cardsLanding: [
      {
        src: "https://i.imgur.com/cjWUQx3.png",
        Title: "SAFE & SECURE PAYMENT",
        subTitle:
          "Secure Payments – No complicated billing processes required.",
      },
      {
        src: "https://i.imgur.com/Owv55bD.png",
        Title: "WORLD CLASS SUPPORT",
        subTitle:
          "We offer in-depth tutorials and client support to make installation, and streaming amazingly quick and simple, no matter where you are in the world.",
      },
      {
        src: "https://i.imgur.com/TNJpKjG.png",
        Title: "THOUSANDS OF CHANNELS",
        subTitle:
          "Your IPTV subscription offers you international IPTV channels from around the world, including all major channels from the US, UK and across Europe.",
      },
    ],
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped>
.v-card {
  box-shadow: none !important;

  border: none !important;
}

.devider--title {
  margin-left: 40% !important;
  margin-right: 40% !important;
  margin-top: 20px;
  font-weight: 500 !important;
  color: yellow !important;
}

/* .v-card:hover {
  box-shadow: -4px -2px 15px -4px rgba(0, 0, 0, 0.47) !important;
  -webkit-box-shadow: -4px -2px 15px -4px rgba(0, 0, 0, 0.47) !important;
  -moz-box-shadow: -4px -2px 15px -4px rgba(0, 0, 0, 0.47) !important;
  transition: all 0.4s ease-in;
} */


#btn--center{
  margin-left: 550px !important;
}



@media only screen and (max-width: 600px) {
  .flex--cards {
    display: flex;
    flex-direction: column !important;
    justify-content: center !important;
  }
}
</style>
