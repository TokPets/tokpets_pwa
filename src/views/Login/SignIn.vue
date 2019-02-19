<script>
/* eslint-disable */

/* ---------------------------------------------------------- */
/* -- Import Vendors & Libs --------------------------------- */
/* ---------------------------------------------------------- */
import firebase from "firebase";
import { page } from "vue-analytics";
/* ---------------------------------------------------------- */

/* ---------------------------------------------------------- */
/* -- Import Components ------------------------------------- */
/* ---------------------------------------------------------- */

/* ---------------------------------------------------------- */

/* ---------------------------------------------------------- */
/* -- Import Models------------------------------------------- */
/* ---------------------------------------------------------- */
import TokUser from "./../../models/user.model.js";
import TokPet from "./../../models/pet.model.js";
/* ---------------------------------------------------------- */

export default {
  name: "signin",

  components: {},

  methods: {
    track() {
      page("/");
    }
  },

  created() {},

  mounted() {
    // Google Analytics Track
    this.track();
  },

  data() {
    return {
      USER: {},
      ERROR: {},
      PET: {},
      UI: {
        EMAIL: {
          ICON:{
            src: '../../assets/forms/check_negro.png',
            alt: 'Email Tok Pets'
          }
        }
      }
    };
  }
};
</script>


<template>
  <div class="view login-signin-view">
    <img class="login-signin-view-logo" src="../../assets/login/tok_negro.png">

    <form>
      <div class="input-group input-email">
        
        <div class="input-group-error">
          <span>Unregistred email</span>
        </div>

        <div class="input-group-wrapper">
          <input class="input-email" type="text" placeholder="E-mail">
          <img class="input-icon" :src="UI.EMAIL.ICON.src" :alt="UI.EMAIL.ICON.alt"> 
        </div>
        
      </div>
    </form>

    <div class="view-bottom">
      <button class="button no-solid theme-dark active" @click="goToLoginView('SIGNIN')">
        <h2 class="button-title x100">LOG IN</h2>
      </button>
      
      <button
        class="button no-solid theme-dark"
        style="color:black"
        @click="goToLoginView('SIGNUP')"
      >
        <h2 class="button-title x75">CREATE ACCOUNT</h2>
        <h3 class="button-subtitle x25">I'M NEW IN TOK</h3>
      </button>
    </div>
  </div>
</template>


<style lang="less">
@import (reference) "../../styles/main.less";
div.view.login-signin-view {
  #view();
}

img.login-signin-view-logo {
  display: block;
  margin: 0 auto;
  padding: 10vh;
  width: ~"calc(100vw - 20vh)";
  height: auto;
}

.view-bottom {
  display: block;
  width: 80vw;
  height: 20vh;
  position: fixed;
  bottom: 5vh;
  left: 10vw;
}
</style>
