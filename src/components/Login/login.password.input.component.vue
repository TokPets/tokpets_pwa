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
    getClass() {
      if (this.UI.isError) {
        return "error";
      } else {
        if (this.UI.isClick) {
          return "typing";
        } else {
          return "default";
        }
      }
    },
    updatePassword() {
      this.$emit("onPasswordTyped", this.password);
      if (this.password.length > 0) {
        this.UI.isClick = true;
      } else {
        this.UI.isClick = false;
      }
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
        isClick: false,
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
      <div class="form-input password" :class="getClass()">
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          v-if="!UI.isOpenPassword"
          @click="UI.isClick = true"
          @blur="updatePassword()"
          @keyup="updatePassword()"
        >
        <input
          type="text"
          placeholder="Password"
          v-model="password"
          v-if="UI.isOpenPassword"
          @click="UI.isClick = true"
          @keyup="updatePassword()"
          @blur="updatePassword()"
        >
        <img class src="../../assets/forms/error_rojo.png" v-if="UI.isError">

        <img
          class="ojito"
          src="../../assets/login/Registroojo.png"
          v-if="(!UI.isError && !UI.isOpenPassword) && UI.isClick"
          @click="UI.isOpenPassword = true"
        >
        <img
          class="ojito"
          src="../../assets/login/Registroojotachado.png"
          v-if="(!UI.isError && UI.isOpenPassword) && UI.isClick"
          @click="UI.isOpenPassword = false"
        >
      </div>
      <span class="error-span" v-if="UI.isError" @click="showRecoveryModal()">Forgot your password ?</span>
    </div>
    <div>
      <login-recovery-password-component
        v-if="UI.isModalRecoveryPasswordOpened"
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
  font-size: 14px !important;

  padding: 0.9em 0.5em;

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

  &.error {
    border: 1px solid @color-red !important;
    background-color: white !important;
    padding: 0.5em 0.3em !important;
  }

  &.default {
    background: none;
    border: 1px solid rgba(0, 0, 0, 0);
    border-bottom: 1px solid #9b9797;
    opacity: 0.5;
    input {
      background: none;
      font-size: 16px !important;
    }
  }

  &.typing {
    border: 1px solid white;
    background-color: white;
    padding: 0.9em 0.5em !important;
    border-bottom: 1px solid @color-black !important;
  }
  img {
    display: block;
    width: 1.8em;
    &.ojito {
      padding: 0.35em;
      width: 1.2em;
    }
  }
  input {
    border: none;
    width: 250px;
    padding: 0px;
    font-size: 16px !important;
    letter-spacing: 1px;
  }
}
span.error-span {
  color: @color-red;
  padding: 0.25em;
}
</style>
