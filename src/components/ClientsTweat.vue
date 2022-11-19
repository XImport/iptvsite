<template>
  <div class="animate__animated animate__fadeInUp">
    <h1 class="text-center">WHAT OUR CLIENTS SAY</h1>
    <v-divider class="mx-4 devider--title yellow"></v-divider>
    <v-container fluid>
      <v-row justify="center">
        <v-subheader>Today</v-subheader>

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

                <v-col
                  v-if="message.excerpt"
                  class="grey--text text-truncate hidden-sm-and-down"
                >
                  &mdash;
                  {{ message.excerpt }}
                </v-col>
              </v-row>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-divider></v-divider>
              <v-card-text v-text="lorem"></v-card-text>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
        excerpt: "Thank you for joining our community...",
      },
      {
        avatar:
          "https://www.shareicon.net/download/2015/06/01/47333_man_512x512.png",
        name: "Jason Lee",
        title: "Thank you ",
        excerpt: "Thank you for joining our community...",
      },
      {
        avatar:
          "https://www.shareicon.net/data/512x512/2015/06/01/47332_man_512x512.png",
        name: "Selina Gomez",
        title: "Welcome to Vuetify!",
        excerpt: "Thank you for joining our community...",
      },
    ],
    lorem:
      "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
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
