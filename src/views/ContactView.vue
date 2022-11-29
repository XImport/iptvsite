<template>
  <div>
    <HeaderPageVue HeaderPage="Contact US " />
    <v-container
      class="animate__animated animate__fadeInUpanimate__animated animate__fadeInUp"
    >
      <div>
        <h1 class="text-center mt-6 font--hero">
          Contact us complete this form
        </h1>
      </div>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-alert
          v-if="alert"
          dense
          text
          type="success"
          dismissible
          transition="scale-transition"
        >
          Please Wait While we trying to redirect you to
          <strong>whatsapp </strong>
        </v-alert>
        <v-text-field
          v-model="name"
          :counter="30"
          :rules="nameRules"
          label="Full Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-select
          v-model="select"
          :items="items"
          :rules="[(v) => !!v || 'choosing Plan is required']"
          label="Choose Plan"
          required
        ></v-select>
        <div class="justify-center text-center ml-12 mr-12">
          <v-btn
            :disabled="!valid"
            color="success"
            block
            class="mr-4"
            @click="validate"
          >
            Contact Us
          </v-btn>
        </div>
      </v-form>
    </v-container>
    <Footer class="mt-12 animate__animated animate__fadeInUp" />
  </div>
</template>

<script>
import HeaderPageVue from "@/components/HeaderPage.vue";
import Footer from "@/components/FooterSection.vue";
import axios from "axios";
export default {
  components: { HeaderPageVue, Footer },
  data: () => ({
    valid: true,
    alert: false,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) =>
        (v && v.length <= 30) || "Full Name must be less than 30 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["3 Month", "6 Month", "12 Month"],
    checkbox: false,
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.sendWhatsappMessage();
        this.alert = !this.alert;
        this.reset();
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    sendWhatsappMessage() {
      var name = this.name;
      var email = this.email;
      var subscription = this.select;
      var whatsappNumber = "212647894983";
      var url =
        "https://api.whatsapp.com/send?phone=" +
        whatsappNumber +
        email +
        "&text=" +
        "Hello Sir My Name is : " +
        name +
        " im intrested with your service and i would like to be part of your community " +
        "%0a" +
        "here is My Email if you prefer it  : " +
        email +
        "%0a" +
        "otherwise i would like to get  : " +
        subscription +
        " subscriptions Thank you " +
        "%0a" +
        "Have a good Day !";

      window.open(url, "_blank").focus();
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 960px;
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
}
</style>
