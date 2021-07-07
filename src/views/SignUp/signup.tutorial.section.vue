<template>
  <section class="tutorial">
    <swiper :options="swiperOption" ref="tutorialSwiper">
      <swiper-slide>
        <div class="intro-card">
          <img
            class="intro-card-img"
            src="../../assets/login/Registropaso 1.png"
            @click="goToHome()"
          >
          <div class="intro-card-content">
            <h1>Welcome</h1>
            <h2>
              This is a complementary app for the device
              <strong
                style="font-weight: 900;"
              >Tok Tracker</strong>
            </h2>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="intro-card">
          <img class="intro-card-img" src="../../assets/login/Registropaso 2.png">
          <div class="intro-card-content">
            <h1>What does it do?</h1>
            <h2>Tok Tracker locate your pet ubication in real time</h2>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="intro-card">
          <img class="intro-card-img" src="../../assets/login/Registropaso 3.png">
          <div class="intro-card-content">
            <h1>Also ...</h1>
            <h2>It also shows you the route where your pet has been and more...</h2>
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>

      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
    <div class="button" @click="doSkipTutorial()">Start</div>
  </section>
</template>


<script>
export default {
  name: "SignUpSectionTutorial",

  computed: {
    swiper() {
      return this.$refs.tutorialSwiper.swiper;
    }
  },

  methods: {
    doSkipTutorial() {
      this.$emit("onNextButton");
    },
    goToHome() {
      this.$router.push("/");
    }
  },

  mounted() {
    this.swiper.slideTo(0, 1000, false);
  },

  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>


<style lang="less">
section.tutorial {
  .button {
    font-size: 16px;
    padding: 16px;
    letter-spacing: 1px;
  }
  h1 {
    padding: 1em;
    strong {
      font-weight: 900;
    }
  }
  .swiper-pagination-bullets {
    background-color: white;
    border: 1px solid white;
    border-radius: 15px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    width: 100% !important;
    height: 2em !important;
    bottom: ~"calc(30% - 1em)" !important;
    display: -ms-flexbox !important;
    display: -webkit-flex !important;
    display: flex !important;
    -webkit-flex-direction: row !important;
    -ms-flex-direction: row !important;
    flex-direction: row !important;
    -webkit-flex-wrap: nowrap !important;
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
    -webkit-justify-content: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
    -webkit-align-content: center !important;
    -ms-flex-line-pack: center !important;
    align-content: center !important;
    -webkit-align-items: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
  }

  .swiper-container-horizontal
    > .swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 0px 2px !important;
    position: relative;
    top: 5px;
  }
}
</style>