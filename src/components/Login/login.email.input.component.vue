<script>
import { setInterval } from "timers";
/* eslint-disable */

export default {
  name: "LoginEmailInputComponent",

  methods: {},

  props: ["error", "errorPosition"],

  watch: {
    error: function(newError, oldError) {
      this.UI.isError = newError;
    }
  },

  mounted() {
    this.UI.isError = false;
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
    updateEmail() {
      this.$emit("onEmailTyped", this.email);
      if (this.email.length > 0) {
        this.UI.isClick = true;
      } else {
        this.UI.isClick = false;
      }
    }
  },

  data() {
    return {
      UI: {
        isError: false,
        isClick: false
      },
      email: ""
    };
  }
};
</script>

<template>
  <div>
    <span
      class="error-span"
      v-if="!UI.isError && errorPosition === 'top'"
      style="color:rgba(0,0,0,0) !important"
    >Unregistered e-mail</span>
    <span class="error-span" v-if="UI.isError && errorPosition === 'top'">Unregistered e-mail</span>
    <div class="form-input email" :class="getClass()">
      <input
        type="email"
        placeholder="Email No.1"
        v-model="email"
        @blur="updateEmail()"
        @keyup="updateEmail()"
        @click="UI.isClick = true"
      >
      <img style="opacity:0" class src="../../assets/forms/error_rojo.png" v-if="!UI.isError">
      <img class src="../../assets/forms/error_rojo.png" v-if="UI.isError">
    </div>
    <span
      class="error-span"
      v-if="!UI.isError && errorPosition === 'bottom'"
      style="color:white !important"
    >Unregistered e-mail</span>
    <span class="error-span" v-if="UI.isError && errorPosition === 'bottom'">Unregistered e-mail</span>
  </div>
</template>

<style lang="less">
@import "./../../styles/main.less";

input,
input:before,
input:after {
  -webkit-user-select: initial;
  -khtml-user-select: initial;
  -moz-user-select: initial;
  -ms-user-select: initial;
  user-select: initial;
}
div.form-input.email {
  display: block;
  width: 100%;

  letter-spacing: 1px;
  padding: 0.9em 0.5em !important;

  box-sizing: border-box;

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

  border: 1px solid rgba(0, 0, 0, 0);

  &.error {
    border: 1px solid @color-red !important;
    padding: 0.9em 0.5em !important;
  }

  &.default {
    background: none;
    border: 1px solid rgba(0, 0, 0, 0);
    border-bottom: 1px solid #9b9797;
    opacity: 0.5;
    input {
      background: none;
    }
  }

  &.typing {
    border: 1px solid white;
    background-color: white;
    border-bottom: 1px solid @color-black !important;
  }

  img {
    display: block;
    width: 1.8em !important;
  }

  input {
    border: none;
    width: 250px;
    font-size: 16px !important;
    letter-spacing: 1px !important;
  }
}

span.error-span {
  color: @color-red !important;
  font-size: 0.8em !important;
  letter-spacing: 1px !important;
  position: relative !important;
  display: block !important;
  padding: 0.5em 0.7em !important;
}
</style>
