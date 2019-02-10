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
      }
    };
  }
};
</script>


<template>

  <div class="view login-view">
    <tok-cover-image/>
    <tok-loading-bar/>
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

</style>
