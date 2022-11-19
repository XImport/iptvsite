<template>
  <div>
    <div class="justify-center mt-12 animate__animated animate__fadeInUp">
      <h1 class="text-center">IN OUR SERVICE</h1>
      <v-divider class="mx-4 devider--title yellow"></v-divider>
    </div>
    <div class="d-flex flex-row mb-6 justify-center flex--cards">
      <div v-for="(card, index) in cardsLanding" :key="index" class="">
        <v-card
          class="mx-auto my-12 ml-4 animate__animated animate__fadeInUp"
          max-width="375"
        >
          <v-img height="150" :src="card.src"></v-img>

          <v-card-title class="justify-center">{{ card.Title }}</v-card-title>
          <v-card-subtitle class="text-center">{{
            card.subTitle
          }}</v-card-subtitle>

          <v-divider class="mx-4"></v-divider>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    cardsLanding: [
      {
        src: "https://www.shopsat45.com/wp-content/uploads/2022/09/guardian-of-the-galaxy-vol-3.jpeg",
        Title: "BEST MOVIES AND SERIES",
        subTitle: "Frequently Updated Movies, High Quality Movies.",
      },
      {
        src: "https://www.shopsat45.com/wp-content/uploads/2022/09/Qatar-2022-s-32-teams-graphic-2048x1152.webp",
        Title: "INCLUDES ALL SPORTING EVENTS",
        subTitle:
          "Thousands of Live TV Channels Worldwide Premium HD and FHD Sports, News, Movies...",
      },
      {
        src: "https://www.shopsat45.com/wp-content/uploads/2022/09/C04597BC-B4FE-4B08-81EA-C39645EAE76B.webp",
        Title: "MOVIES AND TV SHOW",
        subTitle: "Best TV Shows of All Time",
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
  border-bottom: 0px solid black !important;
}

.devider--title {
  margin-left: 40% !important;
  margin-right: 40% !important;
  margin-top: 20px;
  font-weight: 500 !important;
  color: yellow !important;
}

.v-card:hover {
  box-shadow: -4px -2px 15px -4px rgba(0, 0, 0, 0.47) !important;
  -webkit-box-shadow: -4px -2px 15px -4px rgba(0, 0, 0, 0.47) !important;
  -moz-box-shadow: -4px -2px 15px -4px rgba(0, 0, 0, 0.47) !important;
  transition: all 0.4s ease-in;
}

@media only screen and (max-width: 600px) {
  .flex--cards {
    display: flex;
    flex-direction: column !important;
    justify-content: center !important;
  }
}
</style>
