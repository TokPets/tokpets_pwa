<script>
/* eslint-disable */

export default {
  name: "LoginRecoveryPasswordComponent",

  props: ["isModalOn", "isError"],

  mounted() {},

  methods: {
    clickToClose(command) {
      this.$emit("onClose");
    },
    doSendRecoveryPassword() {
      this.$emit("onRecoveryPassword", this.EMAIL);
    }
  },

  data() {
    return {
      EMAIL: ""
    };
  }
};
</script>

<template>
  <transition name="modal" v-if="isModalOn">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <div class="wrapper">
              <h1 @click="clickToClose()">Reset password</h1>
              <h2>We will send you an e-email with a link to reset your password, please check it!</h2>
              <input placeholder="E-mail" v-model="EMAIL">
              <span v-if="isError">Unregisterd Email</span>
            </div>

            <div class="button" @click="doSendRecoveryPassword()">SEND</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="less">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: bottom;
}

.modal-container {
  width: 100%;
  margin: 0px auto;
  padding: 20px 0px 0px 0px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
  margin-bottom: 0px;
  .wrapper {
    display: block;
    width: 100%;
    padding: 1.25em;
    padding-top: 0em;
    padding-bottom: 1em;
    box-sizing: border-box;
    h1 {
      font-weight: 900;
      font-size: 1.25em;
      padding: 0px 0px 0px 0px;
      width: 100%;
      box-sizing: border-box;
      margin: 0px;
      text-align: center;
    }
    h2 {
      font-weight: 300;
      font-size: 0.7em;
      padding: 0px;
      margin: 0px;
      text-align: justify;
      padding: 0px 0px 0px 0px;
      width: 70%;
      margin: 0 auto;
      padding-bottom: 1em;
      padding-top: 1em;
      box-sizing: border-box;
    }
    input {
      display: block;
      width: 70%;
      margin: 0 auto;
      padding: 0em;
      padding-top: 10px;
      padding-bottom: 10px;
      box-sizing: border-box;
      border: none;
      outline: none;
      color: black;
    }
    span {
      display: block;
      font-size: 0.85em;
      color: red;
      padding: 2px;
      display: block;
      width: 70%;
      margin: 0 auto;
    }
  }

  .button {
    display: block;
    width: 100%;
    margin: 0 auto;
    padding: 0px;
    padding: 1em;
    box-sizing: border-box;
    background-color: gray;
    color: white;
    box-shadow: none;
    border: none;
    text-align: center;
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
