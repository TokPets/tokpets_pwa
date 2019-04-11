<script>
/* eslint-disable */
import LoginRecoveryPasswordComponent from "./login.recovery.password.component";
import TokAuthHelper from "./../../scripts/auth/auth.helper.js";

export default {
  name: "LoginPasswordInputComponent",

  components: {
    LoginRecoveryPasswordComponent
  },

  props: ["error", "recoveryError"],

  mounted() {},

  watch: {
    error: function(newError, oldError) {
      this.UI.isError = newError;
    }
  },

  methods: {
    isError() {
      return this.UI.isError ? "error" : "default";
    },
    updatePassword() {
      this.$emit("onPasswordTyped", this.password);
    },
    showRecoveryModal() {
      this.UI.isModalRecoveryPasswordOpened = true;
    },
    doRecoveryPassword(in_email) {
      if (in_email) {
        const email = in_email + "";
        const auth = new TokAuthHelper();

        auth
          .doRecoveryPassword(email)
          .then(response => {
            console.warn("RecoveryEmail");
            this.doCloseModal();
            this.$emit("onRecoverySuccess");
          })
          .catch(error => {
            if (error && error.code === "auth/invalid-email") {
              this.$emit("onPasswordRecoveryError");
            }
          });
      }
    },
    doCloseModal() {
      //this.UI.isModalRecoveryPasswordOpened = false;
      if (this.UI && this.UI.isModalRecoveryPasswordOpened) {
        this.UI.isModalRecoveryPasswordOpened = false;
      }
    }
  },

  data() {
    return {
      UI: {
        isError: false,
        isOpenPassword: false,
        isModalRecoveryPasswordOpened: false
      },
      password: ""
    };
  }
};
</script>

<template>
  <div>
    <div>
      <div class="form-input password" :class="isError()">
        <input
          type="password"
          placeholder="Password Placeholder"
          v-model="password"
          v-if="!UI.isOpenPassword"
          @blur="updatePassword()"
        >
        <input
          type="text"
          placeholder="Password Placeholder"
          v-model="password"
          v-if="UI.isOpenPassword"
          @blur="updatePassword()"
        >
        <img class src="../../assets/forms/error_rojo.png" v-if="UI.isError">
        <img
          class
          src="../../assets/forms/ojo_negro.png"
          v-if="!UI.isError && !UI.isOpenPassword"
          @click="UI.isOpenPassword = true"
        >
        <img
          class
          src="../../assets/forms/ojo_blanco.png"
          v-if="!UI.isError && UI.isOpenPassword"
          @click="UI.isOpenPassword = false"
        >
      </div>
      <span class="error-span" v-if="UI.isError" @click="showRecoveryModal()">Forgot your password ?</span>
    </div>
    <div>
      <login-recovery-password-component
        :isModalOn="UI.isModalRecoveryPasswordOpened"
        :isError="recoveryError"
        @onClose="doCloseModal()"
        @onRecoveryPassword="doRecoveryPassword($event)"
      ></login-recovery-password-component>
    </div>
  </div>
</template>

<style lang="less">
@import "./../../styles/main.less";
div.form-input.password {
  display: block;
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
  background-color: white;

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  border: 1px solid white;
  &.error {
    border: 1px solid red;
  }

  img {
    display: block;
    width: 2.5em;
  }
  input {
    border: none;
    width: calc(100% - 3em);
    padding: 0px;
  }
}
span.error-span {
  color: red;
  padding: 0.25em;
}
</style>
