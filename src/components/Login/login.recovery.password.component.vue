<script>
/* eslint-disable */

import ClickOutside from "vue-click-outside";
import LoginEmailInputComponent from "../../components/Login/login.email.input.component";
import TokAuthHelper from "./../../scripts/auth/auth.helper.js";
import { setTimeout } from "timers";

export default {
  name: "LoginRecoveryPasswordComponent",

  props: ["isModalOn", "isError"],

  components: {
    LoginEmailInputComponent
  },

  mounted() {
    this.ERROR = false;
    setTimeout(() => {
      console.log(" UI.isModalContentOn :: Begin");
      this.UI.isModalContentOn = true;
    }, 250);
  },

  methods: {
    hide() {
      setTimeout(() => {
        console.log(" UI.isModalContentOn :: End");
        this.UI.isModalContentOn = false;
        setTimeout(() => {
          this.$emit("onClose");
        }, 250);
      }, 0);
    },
    clickToClose(command) {
      //this.$emit("onClose");
    },
    doSendRecoveryPassword() {
      if (this.EMAIL.length > 1 && this.EMAIL.includes("@")) {
        const auth = new TokAuthHelper();
        auth
          .doCheckIsEmailIsRegistered(this.EMAIL)
          .then(response => {
            console.warn("response");
            console.warn(response);
            if (response.isRegistered === true) {
              this.ERROR = false;
              this.UI.isSend = true;
              setTimeout(() => {
                this.ERROR = false;
                this.UI.isSend = true;
                this.isModalOn = false;
                this.$emit("onRecoveryPassword", this.EMAIL);
              }, 2000);
              console.log("OK");
            } else {
              this.ERROR = true;
              this.UI.isSend = false;
              console.error("ERROR isRegistered False  " + this.EMAIL);
            }
          })
          .catch(error => {
            console.error("error");
            console.error(response);
            this.ERROR = true;
            this.UI.isSend = false;
            console.error("ERROR catch " + this.EMAIL);
          });
      } else {
        this.ERROR = true;
        this.UI.isSend = false;
        console.error("ERROR no @  " + this.EMAIL);
      }
      //this.$emit("onRecoveryPassword", this.EMAIL);
    },
    updateRecoveryEmail() {
      if (this.EMAIL.length > 2) {
        this.ERROR = false;
      } else {
        this.ERROR = true;
      }
    },
    doUpdateEmail($event) {
      this.EMAIL = $event;
    },
    getButtonClass() {},
    getInputClass() {
      if (this.EMAIL.length > 1) {
        return "typing";
      } else {
        return "default-normal";
      }
    }
  },

  data() {
    return {
      EMAIL: "",
      ERROR: true,
      UI: {
        isClick: false,
        isModalContentOn: false,
        isSend: false
      }
    };
  },

  directives: {
    ClickOutside
  }
};
</script>

<template>
  <transition name="modal" v-if="isModalOn">
    <div class="modal-mask">
      <div class="modal-wrapper" v-bind:class="{ active: UI.isModalContentOn }">
        <div class="modal-container" v-click-outside="hide" v-touch:swipe.down="hide">
          <div class="modal-body">
            <div class="wrapper" v-if="!UI.isSend">
              <h1>Reset password</h1>
              <h2>We will send you an e-email with a link to reset your password, please check it.</h2>
              <!-- -->
              <!-- -->
              <LoginEmailInputComponent @onEmailTyped="doUpdateEmail($event)" :error="ERROR"/>
              <!-- -->
              <!-- -->
            </div>
            <div class="wrapper" v-if="UI.isSend">
              <h1>Recovery email has been sended suscesfully</h1>
              <p>Please check your inbox</p>
            </div>
            <div
              class="button"
              v-if="!UI.isSend"
              @click="doSendRecoveryPassword()"
              :class="getInputClass()"
            >Send</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="less">
@import "./../../styles/main.less";
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.85);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: bottom;

  position: relative;
  bottom: -40vh;

  transition-delay: 0s;

  -webkit-transition: bottom 500ms ease-in-out;
  -moz-transition: bottom 500ms ease-in-out;
  -ms-transition: bottom 500ms ease-in-out;
  -o-transition: bottom 500ms ease-in-out;
  transition: bottom 500ms ease-in-out;
  &.active {
    position: relative;
    bottom: 0vh;
    -webkit-transition: bottom 500ms ease-in-out;
    -moz-transition: bottom 500ms ease-in-out;
    -ms-transition: bottom 500ms ease-in-out;
    -o-transition: bottom 500ms ease-in-out;
    transition: bottom 500ms ease-in-out;

    transition-delay: 0s;
  }
}

.modal-container {
  width: 100%;
  margin: 0px auto;
  padding: 20px 0px 0px 0px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 8px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: opacity 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 10px 0;
  margin-bottom: 0px;

  .wrapper {
    display: block;
    width: 100%;
    padding: 1.25em;
    padding-top: 0em;
    padding-bottom: 1em;
    box-sizing: border-box;

    color: @color-black;

    h1 {
      font-weight: 900;
      font-size: 13.3px;
      padding: 0px 0px 0px 0px;
      width: 100%;
      box-sizing: border-box;
      margin: 0px;
      text-align: center;
      font-weight: 600;
      font-size: 1.25em;
      letter-spacing: 1px;
      opacity: 0.8;
      padding-top: 0.5em;
    }
    h2 {
      font-weight: 300;
      font-size: 13.3px;
      padding: 0px;
      margin: 0px;
      text-align: center;
      padding: 0px 0px 0px 0px;
      width: 90%;
      margin: 0 auto;
      padding-bottom: 1em;
      padding-top: 1em;
      box-sizing: border-box;
      padding: 0px;
      letter-spacing: 1px;

      line-height: 16px;
      opacity: 0.7;
      padding-top: 0.5em;
      padding-bottom: 2.25em;
    }
  }

  .button {
    display: block;
    width: 100%;
    margin: 0 auto;
    padding: 0px;
    padding: 1em;
    box-sizing: border-box;
    background-color: @color-black;
    opacity: 0.6;
    color: white;
    box-shadow: none;
    border: none;
    text-align: center;
    &.typing {
      opacity: 1;
    }
  }
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
