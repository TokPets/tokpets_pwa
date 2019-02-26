<script>
/* eslint-disable */

import firebase from "firebase";
import { page } from "vue-analytics";
import TokUser from "./../../models/user.model.js";
import TokPet from "./../../models/pet.model.js";
import FormInputEmail from "./../../components/FormAuth/FormSignIn_Inputs/FormInputEmail";
import FormInputPassword from "./../../components/FormAuth/FormSignIn_Inputs/FormInputPassword";

export default {
  name: "signin",

  components: {
    FormInputEmail,
    FormInputPassword
  },

  methods: {
    track() {
      page("/login/signin/");
    },
    onSubmitSignIn() {
      this.AUTH.doLogging(this.USER.email, this.USER.password).then(
        response => {
          if (response.status) {
            this.$router.push("main");
          } else {
            console.error(" TOK PETS APP ::  AUTH ERROR ");
          }
        }
      );
    },

    doFormInputEventCatch(InputParameter, InputValue) {
      this.USER[InputParameter] = InputValue;
    }
  },

  created() {},

  mounted() {
    // Google Analytics Track
    this.track();
  },

  data() {
    return {
      USER: new TokUser()
    };
  }
};
</script>


<template>
  <div class="view login-signin-view">
    <!-- -->
    <!-- View.position :: TOP -->
    <div class="view-position-top">
      <img class="logo" src="../../assets/login/tok_negro.png">
    </div>

    <!-- -->
    <!-- View.position :: MIDDLE -->
    <div class="view-position-middle">
      <form v-on:submit.prevent="onSubmitSignIn">
        <form-input-email @onEmailTyped="doFormInputEventCatch('email',$event)"></form-input-email>
        <form-input-password @onPasswordTyped="doFormInputEventCatch('password',$event)"></form-input-password>
      </form>
    </div>

    <!-- -->
    <!-- View.position :: BOTTOM -->
    <div class="view-position-bottom">
      <div class="buttons">
        <button class="button theme-dark size-single-line">
          <h2 class="button-title">LOGIN</h2>
        </button>
        <button class="button theme-transparent-dark size-double-line">
          <h2 class="button-title">CREATE ACCOUNT</h2>
          <h3 class="button-subtitle">I'M NEW IN TOK</h3>
        </button>
      </div>
    </div>
  </div>
</template>


<style lang="less">
@import (reference) "../../styles/main.less";
div.view.login-signin-view {
  @layout-orientation: column;
  @layout-position: center;
  @layout-justify: space-between;
  #view(@layout-orientation, @layout-position, @layout-justify);

  box-sizing: border-box;
  padding: 1em;
}

.login-signin-view {
  .logo {
    display: block;
    position: relative;
    margin: 0px auto;
    padding: 0px;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 80%;
    height: auto;
  }
  div.buttons {
  }
}
</style>
