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
//import { Tabs, Tab } from "./../components/Tabs/index.js";

import TokCoverImage from "./../components/Login/TokCoverImage.vue";
import TokLoadingBar from "./../components/Login/TokLoadingBar.vue";

//import FormSignIn from "./../components/FormAuth/FormSignIn";
//import FormSignUp from "./../components/FormAuth/FormSignUp";
//import FormRecoveryPassword from "./../components/FormAuth/FormRecoveryPassword";
/* ---------------------------------------------------------- */

/* ---------------------------------------------------------- */
/* -- Import Models------------------------------------------- */
/* ---------------------------------------------------------- */
import TokUser from "./../models/user.model.js";
import TokPet from "./../models/pet.model.js";
/* ---------------------------------------------------------- */

export default {
  name: "login",

  components: {
    //Tabs,
    //Tab,
    //FormSignIn,
    //FormSignUp,
    //FormRecoveryPassword,
    TokCoverImage,
    TokLoadingBar
  },

  methods: {
    track() {
      page("/");
    },

    doShowModal() {
      this.$modal.show("modal-reset-password");
    },

    setIntroLoaded() {
      this.UI.isLoaded = true;
    },

    goToLoginView(viewname) {
      if (viewname === "SIGNIN") {
        this.UI.ActiveButton = "SIGNIN";
        this.UI.isButtonLoaded = true;
        setTimeout(() => {
          this.$router.push("login/signin");
        }, 1000);
      }

      if (viewname === "SIGNUP") {
        this.UI.ActiveButton = "SIGNUP";
        this.UI.isButtonLoaded = true;
        setTimeout(() => {
          this.$router.push("login/signup");
        }, 1000);
      }
    }
  },

  created() {
    this.WINDOW.width = Math.max(window.screen.width * 0.8, 250);
    this.WINDOW.height = Math.max(window.screen.height * 0.3, 250);
  },

  mounted() {
    // Google Analytics Track
    this.track();
  },

  data() {
    return {
      USER: {},
      ERROR: {},
      PET: {},
      WINDOW: {
        width: "",
        height: ""
      },
      UI: {
        isLoaded: false,
        isButtonLoaded: false,
        ActiveButton: "SIGNIN"
      }
    };
  }
};
</script>


<template>
  <div class="view login-view">
    <div class="view-top">
      <tok-cover-image :is-loaded="!UI.isButtonLoaded"/>
    </div>

    <div class="view-bottom">
      <tok-loading-bar @onLoaded="setIntroLoaded()"/>

      <button
        class="button theme-light size-single-line"
        :class="[{ active: UI.ActiveButton == 'SIGNIN' }]"
        @click="goToLoginView('SIGNIN')"
        v-if="UI.isLoaded"
      >
        <h2 class="button-title">LOGIN</h2>
      </button>
      
      <button
        class="button theme-transparent-light size-double-line"
        :class="[ { active: UI.ActiveButton == 'SIGNUP' } ]"
        @click="goToLoginView('SIGNUP')"
        v-if="UI.isLoaded"
      >
        <h2 class="button-title">CREATE ACCOUNT</h2>
        <h3 class="button-subtitle">I'M NEW IN TOK</h3>
      </button>
    </div>
  </div>
</template>


<style lang="less">
@import (reference) "../styles/main.less";

div.view.login-view {
  #view();
}

img.login-view-logo {
  display: block;
  margin: 0 auto;
  padding: 0px;

  width: 40vw;
  height: 75vw;
}

div.login-view-tabs {
  display: block;
  width: 100%;
  max-width: ~"70vw";
}

div.login-view-modal {
  #ModalResetPassword();
}

.view-top {
  display: block;
  width: 80vw;
  height: 80vh;
  position: fixed;
  top: 10vh;
  left: 10vw;
}
.view-bottom {
  display: block;
  width: 80vw;
  height: auto;
  position: fixed;
  bottom: 1em;
  left: 10vw;
}
</style>
