<template>
  <div class="animate__animated animate__fadeInUp">
    <h1 class="text-center">WHAT OUR CLIENTS SAY</h1>
    <v-divider class="mx-4 devider--title yellow"></v-divider>
    <v-container fluid>
      <v-row justify="center">
        <v-subheader>Today</v-subheader>
        <v-container fluid>
          <v-row justify="center">
            <v-expansion-panels
              popout
              class="reviews--ui"
              data-aos="fade-up"
              data-aos-offset="200"
            >
              <v-expansion-panel
                v-for="(message, i) in messages"
                :key="i"
                hide-actions
              >
                <v-expansion-panel-header>
                  <v-row align="center" class="spacer" no-gutters>
                    <v-col cols="4" sm="2" md="1">
                      <v-avatar size="36px">
                        <img
                          v-if="message.avatar"
                          alt="Avatar"
                          :src="message.avatar"
                        />
                        <v-icon
                          v-else
                          :color="message.color"
                          v-text="message.icon"
                        ></v-icon>
                      </v-avatar>
                    </v-col>

                    <v-col class="hidden-xs-only" sm="5" md="3">
                      <strong v-html="message.name"></strong>
                      <span v-if="message.total" class="grey--text">
                        &nbsp;({{ message.total }})
                      </span>
                    </v-col>

                    <v-col class="text-no-wrap" cols="5" sm="3">
                      <v-chip
                        v-if="message.new"
                        :color="`${message.color} lighten-4`"
                        class="ml-0 mr-2 black--text"
                        label
                        small
                      >
                        {{ message.new }} new
                      </v-chip>
                      <strong v-html="message.title"></strong>
                    </v-col>

                    <div class="text-center">
                      <v-rating
                        readonly
                        v-model="message.rating"
                        icon-label="custom icon label text {0} of {1}"
                        background-color="grey"
                        color="yellow"
                      ></v-rating>
                    </div>
                  </v-row>
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                  <v-divider></v-divider>
                  <v-card-text class="text-center"
                    ><strong>
                      <v-icon color="black"> mdi-arrow-right</v-icon>
                    </strong>
                    {{ message.review }}</v-card-text
                  >
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </v-container>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        name: "John Leider",
        title: "Amazing Service!",
        rating: 4,

        review:
          "Fantastic assistance! Assuming that there's always an issue (once in a long while!) the folks will sort it out as fast as could be expected and keep everybody refreshed simultaneously - incredible nature of channels, 10/10 would suggest!",
      },
      {
        avatar:
          "https://www.shareicon.net/download/2015/06/01/47333_man_512x512.png",
        name: "Jason Lee",
        title: "Best OTT Service! ",
        rating: 5,

        review:
          "Really so much fast and professional service! Me and my group of friends have purchased before to know about this brand and I have really heard great feedback from my friends. Everyone should try it first and then buy it for sure.",
      },
      {
        avatar:
          "https://www.shareicon.net/data/512x512/2015/06/01/47332_man_512x512.png",
        name: "Selina Gomez",
        title: "Everything is working perfectly",
        rating: 5,
        review:
          "For the moment I am very satisfied everything is working perfectly…. I hope it will continue to be so in the days and months to come Thank you BEST OTT IPTV Joseph Rice",
      },
    ],
  }),
};
</script>

<style scoped>
@import url(//db.onlinewebfonts.com/c/5a0d9223ba883aeb0aa77cdf39cab746?family=Klavika+Condensed);

.font--hero {
  font-family: "Klavika Condensed" !important;
}

.font--sub--hero {
  font-size: 35px !important;
}

.font--size--pack {
  font-size: 40px;
  color: #275084;
}

.devider--title {
  margin-left: 40% !important;
  margin-right: 40% !important;
  margin-top: 20px;
  font-weight: 500 !important;
  color: yellow !important;
}

.reviews--ui {
  margin-left: 20%;
  margin-right: 20%;
}

@media only screen and (max-width: 600px) {
  .reviews--ui {
    margin-left: 0%;
    margin-right: 0%;
  }
}
</style>
