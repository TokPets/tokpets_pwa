<template>
  <div class="signin view" :class="getViewClass()">
    <!-- ------------------------------- -->
    <!-- --------- HEADER -------------- -->
    <!-- ------------------------------- -->
    <div class="header">
      <img src="./../../assets/login/Registroflecha2.png" @click="goBack()">
      <img src="./../../assets/login/Registrotok_blanco.png" @click="goHome()" v-if="UI.isTutorial">
      <img src="./../../assets/login/Registrotok.png" @click="goHome()" v-if="!UI.isTutorial">
    </div>
    <!-- ------------------------------- -->

    <!-- -------------------------------- -->
    <!-- ----------- TUTORIAL ----------- -->
    <!-- -------------------------------- -->
    <div v-if="UI.isTutorial">
      <SignUpSectionTutorial @onNextButton="doSkipTutorial()"/>
    </div>
    <!-- -------------------------------- -->

    <!-- -------------------------------- -->
    <!-- --------- DEVICE CODE----------- -->
    <!-- -------------------------------- -->
    <div class="section-code" v-if="UI.isTokDeviceCode">
      <SignUpSectionDeviceCode @onNextButton="doSigninPet()"/>
    </div>

    <!-- -------------------------------- -->

    <!-- -------------------------------- -->
    <!-- --------- PET INFO ------------- -->
    <!-- -------------------------------- -->
    <div class="section-pet" v-if="UI.isSigninPet">
      <SignUpSectionPet @onNextButton="doSigninUser()"/>
    </div>
  </div>
</template>


<script>
import SignUpSectionTutorial from "../../views/SignUp/signup.tutorial.section";
import SignUpSectionDeviceCode from "../../views/SignUp/signup.tracker.code.section";
import SignUpSectionPet from "../../views/SignUp/signup.pet.section";

export default {
  name: "signin",

  components: {
    SignUpSectionTutorial,
    SignUpSectionDeviceCode,
    SignUpSectionPet
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
        isTokDeviceCode: false,
        isSigninPet: false
      }
    };
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
      this.UI.isSigninPet = false;
    },

    doSigninPet() {
      this.UI.isTutorial = false;
      this.UI.isTokDeviceCode = false;
      this.UI.isSigninPet = true;
    },

    doSigninUser() {},

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
    background-color: @color-black;
    background: rgba(40, 40, 40, 1);
    background: -moz-linear-gradient(
      top,
      rgba(40, 40, 40, 1) 0%,
      rgba(40, 40, 40, 1) 69%,
      rgba(255, 255, 255, 1) 70%,
      rgba(255, 255, 255, 1) 100%
    );
    background: -webkit-gradient(
      left top,
      left bottom,
      color-stop(0%, rgba(40, 40, 40, 1)),
      color-stop(69%, rgba(40, 40, 40, 1)),
      color-stop(70%, rgba(255, 255, 255, 1)),
      color-stop(100%, rgba(255, 255, 255, 1))
    );
    background: -webkit-linear-gradient(
      top,
      rgba(40, 40, 40, 1) 0%,
      rgba(40, 40, 40, 1) 69%,
      rgba(255, 255, 255, 1) 70%,
      rgba(255, 255, 255, 1) 100%
    );
    background: -o-linear-gradient(
      top,
      rgba(40, 40, 40, 1) 0%,
      rgba(40, 40, 40, 1) 69%,
      rgba(255, 255, 255, 1) 70%,
      rgba(255, 255, 255, 1) 100%
    );
    background: -ms-linear-gradient(
      top,
      rgba(40, 40, 40, 1) 0%,
      rgba(40, 40, 40, 1) 69%,
      rgba(255, 255, 255, 1) 70%,
      rgba(255, 255, 255, 1) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(40, 40, 40, 1) 0%,
      rgba(40, 40, 40, 1) 69%,
      rgba(255, 255, 255, 1) 70%,
      rgba(255, 255, 255, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#282828', endColorstr='#ffffff', GradientType=0 );
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
    &.disabled {
      opacity: 0.35;
    }
  }

  .header {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 10000;
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
    box-sizing: border-box;
    padding: 1em;
    padding-top: 0.25em;
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
      box-sizing: border-box;
      padding: 3.25em;
      object-fit: contain;
      object-position: center;
      background-color: #282828;
      z-index: 0;
    }
    .intro-card-content {
      display: block;
      width: 80%;
      height: 30%;
      padding-top: 1em;
      margin: 0 auto;
      background-color: #ffffff;
      z-index: 0;
      color: #444444;
      font-size: 16px;
      h1 {
        font-family: "HelveticaNeue-Light";
        font-weight: 900;
        font-size: 20px;
        padding: 0px 0px 0px 0px;
        width: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0px;
        text-align: center;
        font-weight: 600;
        font-size: 1.25em;
        letter-spacing: 1px;
        opacity: 0.8;
        padding-top: 1.25em;
      }
      h2 {
        font-family: "HelveticaNeue-Light";
        font-weight: 300;
        font-size: 13.3px;
        margin: 0px;
        text-align: center;
        padding: 0px 0px 0px 0px;
        width: 90%;
        margin: 0 auto;
        padding-bottom: 1em;
        padding-top: 1em;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0px;
        letter-spacing: 1px;
        line-height: 16px;
        opacity: 0.7;
        padding-top: 0.5em;
        padding-bottom: 2.25em;
      }
    }
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