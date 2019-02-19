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
  name: "login",

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
      WINDOW: {
        width: "",
        height: ""
      },
      UI: {
        isLoaded: false,
        isButtonLoaded: false,
        ActiveButton: "SIGIN"
      }
    };
  }
};
</script>


<template>
  <div class="view login-signup-view"></div>
</template>


<style lang="less">
@import (reference) "../../styles/main.less";

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
  height: 20vh;
  position: fixed;
  bottom: 5vh;
  left: 10vw;
}
</style>
