<template>
  <div>
    <v-carousel
      v-model="model"
      id="main-carousel"
      cycle
      height="650"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        id="image--height--definer"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3 white--text font--hero">
            <h1 class="text-center animate__animated animate__bounce">
              {{ item.text }}
            </h1>
            <br />
            <p
              class="text-center font--sub--hero animate__animated animate__fadeInUp"
            >
              {{ item.subtext }}
            </p>
            <div class="btn--mobile">
              <v-btn
                to="/contact"
                color="pink"
                dark
                absolute
                class="pa-6 animate__animated animate__fadeInUp btn--subscribe"
                >SUBSCRIBE NOW!!
              </v-btn>
              <v-btn
                to="/contact"
                color="pink"
                dark
                absolute
                class="pa-6 animate__animated animate__fadeInUp btn--test"
                >FREE TEST FOR 24H
              </v-btn>
            </div>
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <div>
      <HomeCardLanding />
    </div>
    <div>
      <v-container>
        <HeaderSection />
      </v-container>
    </div>
    <div class="pb-12">
      <v-container>
        <div>
          <h1
            class="text-center font--hero animate__animated animate__fadeInUp"
          >
            SIMPLE & FAIR PRICES FOR ALL
          </h1>
          <v-divider class="mx-4 devider--title yellow"></v-divider>
          <h3
            class="text-center mt-2 font--sub--hero font--hero animate__animated animate__fadeInUp"
          >
            which subscription plan is right for you ?
          </h3>
          <h4
            class="text-center mt-2 font--hero font--size--pack animate__animated animate__fadeInUp"
            data-aos="zoom-in"
          >
            STANDARD PACK
          </h4>
        </div>
        <PricePlans />
      </v-container>
      <v-container>
        <ClientsTweat />
      </v-container>
    </div>
    <div class="footer--margin">
      <Footer />
    </div>
  </div>
</template>

<script>
import HomeCardLanding from "@/components/LandingHomeCard.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import PricePlans from "@/components/PricePlans.vue";
import Footer from "@/components/FooterSection.vue";
import ClientsTweat from "@/components/ClientsTweat.vue";
export default {
  name: "HomeView",

  components: {
    HomeCardLanding,
    HeaderSection,
    PricePlans,
    Footer,
    ClientsTweat,
  },
  data: () => ({
    model: 0,

    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    items: [
      {
        src: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt72f2c0c9705487c9/6313066ee60d4245dae37aa7/erling_haaland.png",
        text: "The Best Global IPTV  Service Provider",
        subtext: "Watch anytime. from anywhere.",
      },

      {
        src: "https://wallpapercave.com/wp/wp1815802.jpg",
        text: "Premium IPTV Service",
        subtext:
          "The Beast Is Back In Action And He's Determined To Leave The UFC APEX Victorious",
      },

      {
        src: "https://wallpaperaccess.com/full/2387027.jpg",
        text: "Top 1 Watched Movies",
        subtext: "Watch anytime. from anywhere.",
      },
    ],
  }),
};
</script>

<style scoped>
@import url(//db.onlinewebfonts.com/c/5a0d9223ba883aeb0aa77cdf39cab746?family=Klavika+Condensed);

.mynav .navbar .dropdown-content {
  z-index: 99;
}

.v-carousel {
  z-index: 1;
}

#main-carousel {
  margin-top: -6% !important;
}

.font--hero {
  font-family: "Klavika Condensed" !important;
}

.font--sub--hero {
  font-size: 35px !important;
}

.btn--subscribe {
  left: 50%;
}

.btn--test {
  left: 40%;
}

.footer--margin {
  margin-top: 200px !important;
}

@media only screen and (max-width: 600px) {
  #main-carousel {
    margin-top: -15% !important;
  }

  .font--hero {
    font-family: "Klavika Condensed" !important;
    font-size: 25px !important;
  }

  .font--sub--hero {
    font-size: 25px !important;
  }
  .btn--mobile {
    margin-left: 0px;
  }
  .btn--subscribe {
    left: 10%;
  }
  .btn--test {
    left: 50%;
  }
}

.devider--title {
  margin-left: 40% !important;
  margin-right: 40% !important;
  margin-top: 20px;
  font-weight: 500 !important;
  color: yellow !important;
}

.font--size--pack {
  font-size: 40px;
  color: #275084;
}
</style>
