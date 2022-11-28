<template>
  <v-container class="justify-center" data-aos="fade-up" data-aos-offset="200" data-aos-once="true"
    data-aos-anchor-placement="top-center">
    <div>
      <div>
        <h1 class="text-center mt-12 text--font animate__animated animate__fadeInUp">
          Amazing Offer
        </h1>
        <v-divider class="mx-4 devider--title yellow"></v-divider>
      </div>
      <h1 class="text-center mt-6 text--font animate__animated animate__fadeInUp">
        World Cup , Movies And Series In One Place
      </h1>
      <p class="text-center animate__animated animate__fadeInUp">
        Watch the latest movies, series, TV shows, sports, news and so much more
        on your device
      </p>
    </div>
    <CarouselCard ref="carouselCardRef" class="animate__animated animate__fadeInUp" :interval="7000" :autoplay="false"
      :height="CheckMobile" type="card" arrow="always" @change="changeHandle">
      <CarouselCardItem v-for="img in items" :key="img.index" :name="`cc_${img.index}`">
        <v-img :src="img.src" />
        <h1 v-text="i"></h1>
      </CarouselCardItem>
    </CarouselCard>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";
import { CarouselCard, CarouselCardItem } from "vue-carousel-card";
import "vue-carousel-card/styles/index.css";

export default defineComponent({
  components: { CarouselCard, CarouselCardItem },

  data() {
    return {
      CheckMobile : null,
      items: [
        {
          src: "https://i.imgur.com/NzVpgPb.jpeg",
          index: 0,
        },
        {
          src: "https://i.imgur.com/4NpIkaK.jpeg",
          index: 1,
        },
        {
          src: "https://i.imgur.com/2WPx1IR.jpeg",
          index: 2,
        },
        {
          src: "https://i.imgur.com/hEmsl2L.jpeg",
          index: 3,
        },
        {
          src: "https://i.imgur.com/T7ifCUy.jpeg",
          index: 4,
        },
        {
          src: "https://i.imgur.com/bE6Wpbg.jpeg",
          index: 5,
        },
      ],
    };
  },
  methods: {
    changeHandle(index) {
      console.log(index);
    },
  },
  created() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // true for mobile device

      console.log("mobile device");
      this.CheckMobile = '200px'
    } else {
      // false for not mobile device
      console.log("not mobile device");
      this.CheckMobile = '700px'
    }
  }
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");

.devider--title {
  margin-left: 40% !important;
  margin-right: 40% !important;
  margin-top: 20px;
  font-weight: 500 !important;
  color: yellow !important;
}

.text--font {
  font-family: "Montserrat", sans-serif;
}
</style>
