<template>
  <div>
    <HeaderPage HeaderPage="CHOOSE YOUR PLAN NOW" />

    <!-- Content goes here  -->
    <Pricing />

    <v-container> </v-container>
    <div class="footer--margin">
      <Footer />
    </div>
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import Footer from "@/components/FooterSection.vue";
import Pricing from "@/components/PricePlans.vue";
export default {
  components: {
    Footer,
    HeaderPage,
    Pricing,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.devider--title {
  margin-left: 40% !important;
  margin-right: 40% !important;
  margin-top: 20px;
  font-weight: 500 !important;
  color: yellow !important;
}

.font--sub--hero {
  font-size: 35px !important;
}

.container {
  max-width: 960px;
}

body {
  height: 1500px;
  background: url(https://www.brainpickings.org/wp-content/themes/brainpickings/images/bckgd_body.png);
}

.offset {
  margin-top: 0;
  padding-top: 270px;
  text-align: center;
  transition: 0.3s;
}

.footer--margin {
  padding-top: 10%;
}
</style>
