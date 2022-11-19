<template>
  <div>
    <div class="header">
      <h1 class="header_logo font--hero font--size--pack">All CHANNELS LIST</h1>
    </div>

    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-col>
          <h1 class="text-center font--hero">CHANNELS LIST</h1>
          <v-divider class="mx-4 devider--title yellow"></v-divider>
          <v-container>
            <v-expansion-panels
              accordion
              focusable
              popout
              class="btn--margin"
              v-for="(item, i) in channels"
              :key="i"
            >
              <v-expansion-panel class="mt-6 deep-purple white--text">
                <v-expansion-panel-header>{{
                  item.title
                }}</v-expansion-panel-header>
                <v-expansion-panel-content
                  v-for="(subitem, i) in item.channelsList"
                  :key="i"
                >
                  {{ subitem.subtitle }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <div class="footer--margin">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/FooterSection.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      channels: [
        {
          title: "FRENCH",
          channelsList: [
            { subtitle: "TF1 HD" },
            { subtitle: "FRANCE 2 HD" },
            { subtitle: "FRANCE 3 HD" },
            { subtitle: "FRANCE 3 NOA HD" },
            { subtitle: "FRANCE 4 HD" },
            { subtitle: "FRANCE 5 HD" },
            { subtitle: "M6 HD" },
            { subtitle: "TFX HDTFX HD" },
            { subtitle: "TF1 SERIES-FILMS HD" },
            { subtitle: "CANAL 8 HD" },
            { subtitle: "W9 HD" },
          ],
        },
        {
          title: "ALBANIA",
          channelsList: [
            { subtitle: "TOP CHANNEL HD" },
            { subtitle: "TOP CHANNEL 4K" },
            { subtitle: "KLAN 4K" },
            { subtitle: "KLAN PLUS 4K" },
            { subtitle: "KLAN KOSOVA HD" },
            { subtitle: "RTSH PLUS" },
            { subtitle: "RTK 2" },
            { subtitle: "RTK 3" },
            { subtitle: "RTK 4" },
          ],
        },

        {
          title: "BELGIUM",
          channelsList: [
            { subtitle: "EEN HD" },
            { subtitle: "VTM HD" },
            { subtitle: "VITAYA" },
            { subtitle: "JIM JAM" },
            { subtitle: "ECLIPS TV" },
            { subtitle: "ATV ANTWERPEN" },
            { subtitle: "AB3 HD" },
            { subtitle: "MATELE" },
            { subtitle: "NRJ BELGIQUE" },
          ],
        },

        {
          title: "SYRIA",
          channelsList: [
            { subtitle: "SYRIA SATELLITE TV" },
            { subtitle: "AL EKHBARIYA AL SORIYA" },
            { subtitle: "NOOR AL SHAM" },
            { subtitle: "ALYAWM" },
            { subtitle: "ORIENT TV" },
            { subtitle: "SYRIA NEWS TV" },
            { subtitle: "NOUR AL SHAM TV" },
            { subtitle: "AL KHABAR TV" },
            { subtitle: "ALQANAT 9 TV" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url(//db.onlinewebfonts.com/c/5a0d9223ba883aeb0aa77cdf39cab746?family=Klavika+Condensed);

.font--hero {
  font-family: "Klavika Condensed" !important;
}

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

.font--size--pack {
  font-size: 40px;
  color: #275084;
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
  margin-top: 200px !important;
}

@media only screen and (max-width: 600px) {
  .header[data-v-bbde4a70] {
    margin-top: -20% !important;
  }

  .header_logo {
    margin-top: 10% !important;
  }
}

.header {
  margin-top: -10% !important;
  width: 100%;
  height: 500px;
  font-weight: bold;
  text-align: center;
  background: rgb(0, 0, 0);
  transition: 0.3s;
}
.header.small {
  height: 70px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.header.small ~ .offset {
  padding-top: 140px;
}
.header.small .header_logo {
  padding-top: 20px;
  font-size: 20px;
  text-shadow: none;
}

.header_logo {
  font-family: "Oswald", sans-serif;
  margin-top: 5%;
  padding-top: 200px;
  color: white;
  font-size: 50px;
  text-shadow: 3px 4px rgba(200, 0, 255, 0.1);
  transition: 0.3s;
}
</style>
