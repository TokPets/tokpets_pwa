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
</style>
