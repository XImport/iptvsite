<template>
  <v-container
    class="justify-center"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-once="true"
    data-aos-anchor-placement="top-center"
  >
    <div>
      <div>
        <h1 class="text-center text--font animate__animated animate__fadeInUp">
          Amazing Offer
        </h1>
        <v-divider class="mx-4 devider--title yellow"></v-divider>
      </div>
      <h1
        class="text-center mt-6 text--font animate__animated animate__fadeInUp"
      >
        World Cup , Movies And Series In One Place
      </h1>
      <p class="text-center animate__animated animate__fadeInUp">
        Watch the latest movies, series, TV shows, sports, news and so much more
        on your device
      </p>
    </div>
    <CarouselCard
      ref="carouselCardRef"
      class="animate__animated animate__fadeInUp"
      :interval="7000"
      :autoplay="false"
      height="500px"
      type="card"
      arrow="always"
      @change="changeHandle"
    >
      <CarouselCardItem
        v-for="img in items"
        :key="img.index"
        :name="`cc_${img.index}`"
      >
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
      items: [
        {
          src: "https://www.arcciptv.com/wp-content/uploads/2022/10/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_-scaled.jpg",
          index: 0,
        },
        {
          src: "https://cdn.thegamesdb.net/images/original/boxart/front/53470-1.jpg",
          index: 1,
        },
        {
          src: "https://www.arcciptv.com/wp-content/uploads/2022/10/2054035.jpg",
          index: 2,
        },
        {
          src: "https://www.arcciptv.com/wp-content/uploads/2022/10/FWvMLYxX0AA6i3Y.png",
          index: 3,
        },
        {
          src: "https://www.arcciptv.com/wp-content/uploads/2022/10/58608.jpg",
          index: 4,
        },
        {
          src: "https://www.arcciptv.com/wp-content/uploads/2022/10/MV5BMTU0Nzc5NzI5NV5BMl5BanBnXkFtZTgwNTk1MDE4MDI@._V1_.jpg",
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
