<template>
  <section class="device-code">
    <img class="logo" src="../../assets/login/Registrocorazon.png">
    <h1>
      <strong>Create</strong> an account
    </h1>
    <h2>Please enter the Tok Tracker code</h2>

    <div class="code" :class="getErrorClass()">
      <div class="code-wrapper">
        <input type="number" max="9999999" @blur="checkCode()" v-model="DATA.CODE">
        <input type="text" pattern="\d*" maxlength="4">
      </div>
    </div>
    <span class="error" v-if="getErrorClass() === 'error'">Invalid Tok Tracker Code</span>

    <br>
    <br>

    <div class="button" :class="getDisabledClass()" @click="doSigninPet()">CREATE PROFILE</div>
  </section>
</template>


<script>
export default {
  name: "SignUpSectionDeviceCode",

  computed: {},

  methods: {
    getErrorClass() {
      if (this.checkCode()) {
        return "default";
      } else {
        return "error";
      }
    },
    getDisabledClass() {
      if (this.checkCode()) {
        return "default";
      } else {
        return "disabled";
      }
    },
    checkCode() {
      return this.DATA.CODE.length > 6;
    },
    doSigninPet() {
      if (this.checkCode()) {
        this.$store.dispatch("setTrackerCode", this.DATA.CODE);
        this.$emit("onNextButton");
      }
    },
    setCodeFocus(n, $event) {}
  },

  mounted() {},

  data() {
    return {
      UI: {
        isDisabled: true
      },
      DATA: {
        CODE: 0
      }
    };
  }
};
</script>


<style lang="less">
@import (reference) "../../styles/main.less";
section.device-code {
  font-family: "HelveticaNeue-Light";
  font-weight: 300;

  .logo {
    display: block;
    width: 85%;
  }
  h1 {
    font-size: 1.25em;
    font-weight: 300;
    padding-bottom: 1em;
    color: @color-black;
    strong {
      font-weight: 900;
    }
  }
  h2 {
    font-size: 1em;
    font-weight: 300;
    padding-bottom: 1em;
    color: @color-gray-dark;
    strong {
      font-weight: 900;
    }
  }

  width: 100%;
  height: 100vh;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  .code {
    background-color: @color-white;
    padding: 1em;
    width: fit-content;
    box-sizing: border-box;

    border: 1px solid white;
    &.error {
      border: 1px solid @color-red;
    }
  }
  .code-wrapper {
    @char-w: 1ch;
    @char-size: 3ch;
    @gap: 0.5 * @char-w;
    @n-char: 7;
    @in-w: @n-char* (@char-w + @gap);

    background-image: url("./../../assets/login/tracker_code_bg.png");
    background-size: 14.5%;
    background-repeat: repeat-x;
    background-position: bottom left;

    padding-bottom: 0.5em;

    input {
      border: none;
      width: @in-w;
      background-color: rgba(0, 0, 0, 0);
      font-size: @char-size;
      color: @color-black;
      letter-spacing: @gap;

      &:focus {
        outline: none;
        color: @color-gray-dark;
      }
    }
  }
}
</style>