<template>
  <v-footer color="pink " padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="btn in links"
        :key="btn.text"
        color="white"
        text
        rounded
        class="my-2"
        :to="btn.link"
      >
        {{ btn.text }}
      </v-btn>
      <v-col class="pink py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Copyright © 2022 BEST IPTV SERVICE</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { text: "Home", link: "/" },
      { text: "Services", link: "#" },
      { text: "Pricing", link: "/pricing" },
      { text: "Contact Us", link: "/contact" },
    ],
  }),
};
</script>

<style scoped></style>
