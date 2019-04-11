<script>
/* eslint-disable */

export default {
  name: "LoginEmailInputComponent",

  methods: {},

  props: ["error"],

  watch: {
    error: function(newError, oldError) {
      this.UI.isError = newError;
    }
  },

  mounted() {},

  methods: {
    isError() {
      return this.UI.isError ? "error" : "default";
    },
    updateEmail() {
      this.$emit("onEmailTyped", this.email);
    }
  },

  data() {
    return {
      UI: {
        isError: false
      },
      email: ""
    };
  }
};
</script>

<template>
  <div>
    <span class="error-span" v-if="UI.isError">Unregistered e-mail</span>
    <div class="form-input email" :class="isError()">
      <input type="email" placeholder="Email Placeholder" v-model="email" @blur="updateEmail()">
      <img class src="../../assets/forms/error_rojo.png" v-if="UI.isError">
    </div>
  </div>
</template>

<style lang="less">
@import "./../../styles/main.less";
div.form-input.email {
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
