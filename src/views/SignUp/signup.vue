<template>
  <div class="signin view" :class="getViewClass()">
    <div class="header">
      <img src="./../../assets/login/Registroflecha2.png" @click="goBack()">
      <img src="./../../assets/login/Registrotok.png" @click="goHome()">
    </div>

    <!-- -------------------------------- -->
    <!-- ----------- TUTORIAL ----------- -->
    <!-- -------------------------------- -->
    <div v-if="UI.isTutorial">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <div class="intro-card">
            <img class="intro-card-img" src="../../assets/login/Registropaso 1.png">
            <div class="intro-card-content">
              <h1>WELCOME</h1>
              <h2>This is a complementary app for the device Tok Tracker</h2>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="intro-card">
            <img class="intro-card-img" src="../../assets/login/Registropaso 2.png">
            <div class="intro-card-content">
              <h1>What doest it do?</h1>
              <h2>Tok Tracker locate your pet ubication in real time</h2>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="intro-card">
            <img class="intro-card-img" src="../../assets/login/Registropaso 3.png">
            <div class="intro-card-content">
              <h1>Also ...</h1>
              <h2>It also shows you the route where your pete has been and more ...</h2>
            </div>
          </div>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>

        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
      <div class="button" @click="doSkipTutorial()">SEND</div>
    </div>

    <!-- -------------------------------- -->

    <!-- -------------------------------- -->
    <!-- --------- DEVICE CODE----------- -->
    <!-- -------------------------------- -->
    <section class="section-code" v-if="UI.isTokDeviceCode">
      <img class="logo" src="../../assets/login/Registrocorazon.png">
      <h1>
        <strong>CREATE</strong> AN ACCOUNT
      </h1>
      <h2>Please enter the Tok Tracker code</h2>

      <div class="code">
        <input
          ref="refCodeInput0"
          maxlength="1"
          v-model="DATA.CODE[0]"
          @keyup="setCodeFocus(0,$event)"
          @click="resetDataCode(0)"
        >
        <input
          ref="refCodeInput1"
          maxlength="1"
          v-model="DATA.CODE[1]"
          @keyup="setCodeFocus(1,$event)"
          @click="resetDataCode(1)"
        >
        <input
          ref="refCodeInput2"
          maxlength="1"
          v-model="DATA.CODE[2]"
          @keyup="setCodeFocus(2,$event)"
          @click="resetDataCode(2)"
        >
        <input
          ref="refCodeInput3"
          maxlength="1"
          v-model="DATA.CODE[3]"
          @keyup="setCodeFocus(3,$event)"
          @click="resetDataCode(3)"
        >
        <input
          ref="refCodeInput4"
          maxlength="1"
          v-model="DATA.CODE[4]"
          @keyup="setCodeFocus(4,$event)"
          @click="resetDataCode(4)"
        >
        <input
          ref="refCodeInput5"
          maxlength="1"
          v-model="DATA.CODE[5]"
          @keyup="setCodeFocus(5,$event)"
          @click="resetDataCode(5)"
        >
      </div>

      <br>
      <br>
      <div class="button" @click="doSigninPet()" v-if="UI.isTokDeviceCode">CREATE PROFILE</div>
    </section>
    <!-- -------------------------------- -->

    <section class="section-pet" v-if="UI.isSigninPet">
      <div class="section-header">
        <h1>
          <strong>Pet</strong> Information
        </h1>
        <h2>#{{ DATA.CODE | codeToString }}</h2>

        <div class="pet-types">
          <div
            class="pet-type cat selected"
            @click="DATA.PET.type = 'CAT'"
            v-if="DATA.PET.type ==='CAT'"
          >
            <img src="../../assets/login/Registrogato1.png">
          </div>
          <div
            class="pet-type cat unselected"
            @click="DATA.PET.type = 'CAT'"
            v-if="DATA.PET.type !== 'CAT'"
          >
            <img src="../../assets/login/Registrogato2.png">
          </div>
          <div
            class="pet-type dog selected"
            @click="DATA.PET.type = 'DOG'"
            v-if="DATA.PET.type === 'DOG'"
          >
            <img src="../../assets/login/Registroperro2.png">
          </div>

          <div
            class="pet-type dog unselected"
            @click="DATA.PET.type = 'DOG'"
            v-if="DATA.PET.type !=='DOG'"
          >
            <img src="../../assets/login/Registroperro1.png">
          </div>
        </div>
      </div>
      <div class="section-content">
        <div class="wrapper">
          <h3>General Information</h3>
          <div class="pet-inputs">
            <div class="pet-input pet-name">
              <signin-pet-name-input-component></signin-pet-name-input-component>
            </div>
            <div class="pet-input pet-gender">
              <signin-pet-gender-input-component></signin-pet-gender-input-component>
            </div>
            <div class="pet-input pet-birthday">
              <signin-pet-birthday-input-component></signin-pet-birthday-input-component>
            </div>
            <div class="pet-input pet-breed" v-if="false">
              <signin-pet-breed-input-component></signin-pet-breed-input-component>
            </div>
            <div class="pet-input pet-country" v-if="false">
              <signin-pet-country-input-component></signin-pet-country-input-component>
            </div>
            <div class="pet-input pet-city" v-if="false">
              <signin-pet-city-input-component></signin-pet-city-input-component>
            </div>
          </div>
        </div>
      </div>
      <div class="button" @click="doSigninUser()" v-if="UI.isSigninPet">CONTINUE</div>
    </section>
  </div>
</template>


<script>
import SigninPetNameInputComponent from "../../components/SignUp/signup.pet.name.input.component";
import SigninPetGenderInputComponent from "../../components/SignUp/signup.pet.gender.input.component";
import SigninPetBirthdayInputComponent from "../../components/SignUp/signup.pet.birthday.input.component";
import SigninPetBreedInputComponent from "../../components/SignUp/signup.pet.breed.input.component";
import SigninPetCountryInputComponent from "../../components/SignUp/signup.pet.country.input.component";
import SigninPetCityInputComponent from "../../components/SignUp/signup.pet.city.input.component";

export default {
  name: "signin",

  components: {
    SigninPetNameInputComponent,
    SigninPetGenderInputComponent,
    SigninPetBirthdayInputComponent,
    SigninPetBreedInputComponent,
    SigninPetCountryInputComponent,
    SigninPetCityInputComponent
  },

  filters: {
    codeToString: function(value) {
      if (!value) return "";
      const outStr = value.reduce(function(total, item) {
        return `${total}${item}`;
      });
      return outStr;
    }
  },
  data() {
    return {
      DATA: {
        CODE: ["", "", "", "", "", "", ""],
        USER: {},
        PET: {
          type: "CAT"
        }
      },
      UI: {
        isTutorial: true,
        isTokDeviceCode: false
      },
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.swiper.slideTo(0, 1000, false);
  },

  methods: {
    goBack() {
      if (this.UI.isTutorial) {
        this.UI.isTutorial = true;
        this.UI.isTokDeviceCode = false;
        this.UI.isSigninPet = false;
        return true;
      }

      if (this.UI.isTokDeviceCode) {
        this.UI.isTutorial = true;
        this.UI.isTokDeviceCode = false;
        this.UI.isSigninPet = false;
        return true;
      }

      if (this.UI.isSigninPet) {
        this.UI.isTutorial = false;
        this.UI.isTokDeviceCode = true;
        this.UI.isSigninPet = false;
        return true;
      }
    },
    goHome() {
      this.$router.push("/");
    },

    doSkipTutorial() {
      this.UI.isTutorial = false;
      this.UI.isTokDeviceCode = true;
    },

    doSigninPet() {
      this.UI.isTutorial = false;
      this.UI.isTokDeviceCode = false;
      this.UI.isSigninPet = true;
    },

    setCodeFocus(n, $event) {
      if ($event.code === "Backspace") {
        if (n === 0) {
          this.$refs["refCodeInput0"].focus();
          this.DATA.CODE[0] = "";
        } else if (n === 5) {
          this.$refs["refCodeInput4"].focus();
          this.DATA.CODE[4] = "";
        } else {
          this.$refs["refCodeInput" + (n - 1)].focus();
          this.DATA.CODE[n - 1] = "";
        }
      } else {
        if (n === 0) {
          this.$refs["refCodeInput1"].focus();
          this.DATA.CODE[1] = "";
        } else if (n === 5 || n === 4) {
          this.$refs["refCodeInput5"].focus();
          this.DATA.CODE[5] = "";
        } else {
          this.$refs["refCodeInput" + (n + 1)].focus();
          this.DATA.CODE[n + 1] = "";
        }
      }

      console.log($event);
    },

    resetDataCode(n) {
      this.DATA.CODE[n] = "";
    },

    getViewClass() {
      return this.UI.isTutorial ? "dark" : "default";
    }
  }
};
</script>


<style lang="less">
@import (reference) "../../styles/main.less";
.signin.view {
  position: relative;
  background-color: @color-cream;
  &.dark {
    background-color: #282828;
  }

  .button {
    display: block;
    width: 100%;
    margin: 0 auto;
    padding: 0px;
    padding: 1em;
    box-sizing: border-box;
    background-color: @color-black;
    color: white;
    box-shadow: none;
    border: none;
    text-align: center;
    position: fixed;
    left: 0px;
    bottom: 0px;
    z-index: 100;
    font-family: "HelveticaNeue-Light";
    font-weight: 900;
  }

  .header {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    img {
      width: 3.5em;
      padding: 0.5em;
    }
  }

  .intro-card {
    display: block;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    .intro-card-img {
      display: block;
      width: 100%;
      height: 70%;
      object-fit: contain;
      object-position: center;
      background-color: #282828;
      z-index: 0;
    }
    .intro-card-content {
      display: block;
      width: 100%;
      height: 30%;
      padding-top: 1em;
      background-color: #ffffff;
      z-index: 0;
      h1 {
        padding: 0px;
        margin: 0px;
        padding-top: 0.5em;
        font-size: 1.5em;
        text-align: center;
        font-family: "HelveticaNeue-Light";
        font-weight: 900;
      }
      h2 {
        font-family: "HelveticaNeue-Light";
        font-weight: 300;
        padding: 0px;
        margin: 0px;
        padding-top: 0.2em;
        font-size: 1.2em;
        font-weight: 300;
        max-width: 70%;
        margin: 0 auto;
        color: gray;
        display: block;
        text-align: center;
      }
    }
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

.signin.view {
  .section-code {
    font-family: "HelveticaNeue-Light";

    font-weight: 300;

    .logo {
      display: block;
      width: 85%;
    }
    h1 {
      font-size: 1.25em;
      font-weight: 300;
      padding-bottom: 1em;
      strong {
        font-weight: 900;
      }
    }
    h2 {
      font-size: 1em;
      font-weight: 300;
      padding-bottom: 1em;
      strong {
        font-weight: 900;
      }
    }
    .code {
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-content: center;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }
    input {
      border: none;
      width: 1.3em;
      text-align: center;
      background: none;
      color: dimgrey;
      font-size: 1.25em;
      letter-spacing: 0em;
      margin: 0em 0.25em;
      border-bottom: 1px solid black;
    }
    input:focus {
      outline: none;
    }

    width: 100%;
    height: 100vh;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
}

.signin.view {
  .section-pet {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 100vh;

    background-color: @color-cream-light;

    font-family: "HelveticaNeue-Light";
    font-weight: 300;

    box-sizing: border-box;
    padding: 0em 0em;
    padding-top: 4em;
    .section-header {
      display: block;
      width: 100%;
      padding: 0em 2em;
      box-sizing: border-box;
    }
    .section-content {
      display: block;
      width: 100%;
      padding: 0em 2em;
      box-sizing: border-box;
      background-color: white;
      .wrapper {
        display: block;
        width: 100%;
        padding: 0em 0em;
        box-sizing: border-box;
      }
    }

    h1 {
      font-size: 1.5em;
      text-align: center;
      margin: 0.25em auto;
      width: fit-content;
      color: @color-gray-dark;
      strong {
        font-weight: 900;
      }
    }
    h2 {
      font-size: 1em;
      text-align: center;
      margin: 0.5em auto;
      width: fit-content;
      color: @color-gray-dark;
      letter-spacing: 0.1em;
    }
    h3 {
      font-size: 1em;
      text-align: left;
      margin: 1em 0px;
      padding: 1em;
      width: fit-content;
      font-weight: 900;
      color: @color-gray-dark;
      letter-spacing: 0.1em;
    }
    .pet-types {
      display: block;
      margin-top: 2em;
      width: 100%;

      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-align-content: stretch;
      -ms-flex-line-pack: stretch;
      align-content: stretch;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;

      .pet-type {
        display: inline-block;
        width: ~"calc(50% - 1em)";
        border-radius: 0.25em;
        vertical-align: middle;

        img {
          width: 70%;
          display: block;
          margin: 0em auto;
        }

        &.selected {
          background-color: @color-cream-dark;
          -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.68);
          -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.68);
          box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.68);
        }
        &.unselected {
          background-color: @color-white;
        }
      }
    }
  }
}
</style>