<template>
  <div
    class="justify-center"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-once="true"
    data-aos-anchor-placement="top-center"
  >
    <div>
      <h1 class="text-center font--hero animate__animated animate__fadeInUp">
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
    <div class="background mt-6 animate__animated animate__fadeInUp">
      <div class="container">
        <div class="panel pricing-table">
          <div class="pricing-plan">
            <img
              src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
              alt=""
              class="pricing-img"
            />
            <h2 class="pricing-header">3 MONTH</h2>
            <ul class="pricing-features">
              <li class="pricing-features-item">1 Login</li>
              <li class="pricing-features-item">15,000 Live Tv</li>
              <li class="pricing-features-item">30k Vod Movies</li>
              <li class="pricing-features-item">50K Vod Series</li>

              <li class="pricing-features-item">Serveur Stable</li>
              <li class="pricing-features-item">Compatible With All Devices</li>
            </ul>
            <span class="pricing-price">$400</span>
            <a href="#/" class="pricing-button">BUY NOW</a>
          </div>

          <div class="pricing-plan">
            <img
              src="https://s28.postimg.cc/ju5bnc3x9/plane.png"
              alt=""
              class="pricing-img"
            />
            <h2 class="pricing-header">6 MONTH</h2>
            <ul class="pricing-features">
              <li class="pricing-features-item">1 Login</li>
              <li class="pricing-features-item">15,000 Live Tv</li>
              <li class="pricing-features-item">30k Vod Movies</li>
              <li class="pricing-features-item">50K Vod Series</li>

              <li class="pricing-features-item">Serveur Stable</li>
              <li class="pricing-features-item">Compatible With All Devices</li>
            </ul>
            <span class="pricing-price">$150</span>
            <a href="#/" class="pricing-button">BUY NOW</a>
          </div>

          <div class="pricing-plan">
            <img
              src="https://s21.postimg.cc/tpm0cge4n/space-ship.png"
              alt=""
              class="pricing-img"
            />
            <h2 class="pricing-header">12 MONTH</h2>
            <ul class="pricing-features">
              <li class="pricing-features-item">1 Login</li>
              <li class="pricing-features-item">15,000 Live Tv</li>
              <li class="pricing-features-item">30k Vod Movies</li>
              <li class="pricing-features-item">50K Vod Series</li>

              <li class="pricing-features-item">Serveur Stable</li>
              <li class="pricing-features-item">Compatible With All Devices</li>
            </ul>
            <span class="pricing-price">$400</span>
            <a href="#/" class="pricing-button">BUY NOW</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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

html {
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}

.devider--title {
  margin-left: 40% !important;
  margin-right: 40% !important;
  margin-top: 20px;
  font-weight: 500 !important;
  color: yellow !important;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.background {
  padding: 0 25px 25px;
  position: relative;
  width: 100%;
}

.background::after {
  content: "";
  background: #081b31;
  background: -moz-linear-gradient(top, #010e1e 0%, #b400ba 100%);
  background: -webkit-linear-gradient(top, #050b11 0%, #091f3a 100%);
  background: linear-gradient(to bottom, #ae01a2 100%, #1f0042 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#60a9ff', endColorstr='#4394f4',GradientType=0 );
  height: 350px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

@media (min-width: 900px) {
  .background {
    padding: 0 0 25px;
  }
}

.container {
  margin: 0 auto;
  padding: 50px 0 0;
  max-width: 960px;
  width: 100%;
}

.panel {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px 25px;
  position: relative;
  width: 100%;
  z-index: 10;
}

.pricing-table {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08),
    0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
}

@media (min-width: 900px) {
  .pricing-table {
    flex-direction: row;
  }
}

.pricing-table * {
  text-align: center;
  text-transform: uppercase;
}

.pricing-plan {
  border-bottom: 1px solid #e1f1ff;
  padding: 25px;
}

.pricing-plan:last-child {
  border-bottom: none;
}

@media (min-width: 900px) {
  .pricing-plan {
    border-bottom: none;
    border-right: 1px solid #e1f1ff;
    flex-basis: 100%;
    padding: 25px 50px;
  }

  .pricing-plan:last-child {
    border-right: none;
  }
}

.pricing-img {
  margin-bottom: 25px;
  max-width: 100%;
}

.pricing-header {
  color: rgb(41, 0, 143);
  font-weight: 600;
  letter-spacing: 1px;
}

.pricing-features {
  color: #870193;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 50px 0 25px;
}

.pricing-features-item {
  border-top: 1px solid #e1f1ff;
  font-size: 12px;
  line-height: 1.5;
  padding: 15px 0;
}

.pricing-features-item:last-child {
  border-bottom: 1px solid #e1f1ff;
}

.pricing-price {
  color: #570045;
  display: block;
  font-size: 32px;
  font-weight: 700;
}

.pricing-button {
  border: 1px solid #5a0365;
  border-radius: 10px;
  color: #260158;
  display: inline-block;
  margin: 25px 0;
  padding: 15px 35px;
  text-decoration: none;
  transition: all 150ms ease-in-out;
}

.pricing-button:hover,
.pricing-button:focus {
  background-color: #da7cbf;
}

.pricing-button.is-featured {
  background-color: #021729;
  color: #fff;
}

.pricing-button.is-featured:hover,
.pricing-button.is-featured:active {
  background-color: #930000;
}
</style>
