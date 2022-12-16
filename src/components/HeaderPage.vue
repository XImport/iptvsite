<template>
  <div class="header">
    <h1
      class="header_logo font--hero font--size--pack animate__animated animate__fadeInUp"
    >
      {{ HeaderPage }}
    </h1>
    <h3 class="subfont--hero animate__animated animate__fadeInUp">
      {{ SubHeaderPage }}
    </h3>
  </div>
</template>

<script>
export default {
  props: ["HeaderPage", "SubHeaderPage"],
};
</script>

<style scoped>
@import url(//db.onlinewebfonts.com/c/5a0d9223ba883aeb0aa77cdf39cab746?family=Klavika+Condensed);

.font--hero {
  font-family: "Klavika Condensed" !important;
  font-size: 60px !important;
}
.subfont--hero {
  font-family: "Klavika Condensed" !important;
  font-size: 40px !important;
  color: aliceblue;
}

@media only screen and (max-width: 600px) {
  .header[data-v-bbde4a70] {
    margin-top: -20% !important;
  }

  .header_logo {
    margin-top: 10% !important;
  }

  .header[data-v-432406ec] {
    margin-top: -30% !important;
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
