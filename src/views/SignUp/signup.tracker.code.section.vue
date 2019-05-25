<template>
  <section class="device-code">
    <img class="logo" src="../../assets/login/Registrocorazon_2.png">
    <h1>
      <strong>Create</strong> an account
    </h1>
    <h2>Please enter the Tok Tracker code</h2>

    <div class="code" :class="getErrorClass()">
      <div class="code-wrapper-mask">
        <div class="code-wrapper">
          <input maxlength="6" v-model="DATA.CODE" value="0123456">
          <div class="dashed-bar"></div>
        </div>
      </div>
    </div>
    <span class="error" v-if="getErrorClass() === 'error'">Invalid Tok Tracker Code</span>

    <br>
    <br>

    <div class="button" :class="getDisabledClass()" @click="doSigninPet()">Create Profile</div>
  </section>
</template>


<script>
export default {
  name: "SignUpSectionDeviceCode",

  computed: {},

  methods: {
    getErrorClass() {
      if (this.DATA.CODE.length <= 5) {
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
      return this.DATA.CODE.length > 5;
    },
    doSigninPet() {
      if (this.checkCode()) {
        this.$store.dispatch("setTrackerCode", this.DATA.CODE);
        this.$emit("onNextButton");
      }
    },
    setCodeFocus(n, $event) {},

    inputOnFocus1() {
      console.log("inputOnFocus1");
    },
    inputOnFocus2() {
      console.log("inputOnFocus2");
    },
    inputOnFocus3() {
      console.log("inputOnFocus3");
    },
    inputOnFocus4() {
      console.log("inputOnFocus");
    }
  },

  mounted() {},

  data() {
    return {
      UI: {
        isDisabled: true
      },
      DATA: {
        CODE: ""
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

  .button {
    letter-spacing: 1px;
  }

  .logo {
    display: block;
    width: 34%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0px;
    padding-top: 115px;
    padding-bottom: 42px;
  }
  h1 {
    font-size: 1.25em;
    font-weight: 300;
    padding-bottom: 0em;
    color: @color-black;
    strong {
      font-weight: 900;
    }
  }
  h2 {
    font-size: 13.3px;
    font-weight: 300;
    letter-spacing: 1px;
    padding-bottom: 0em;
    padding-top: 5px;
    color: #707070;
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
    padding: 7px 20px;
    margin: 20px 0px;
    margin-bottom: 0px;
    width: fit-content;
    box-sizing: border-box;

    border: 1px solid white;
    &.error {
      border: 1px solid @color-red;
    }
  }

  span.error {
    font-size: 12.8px;
    letter-spacing: 1px;
    line-height: 12.8px;
    padding-top: 10px;
  }

  .code-wrapper-mask {
    display: block;
    overflow: hidden;
    width: 88%;
    margin: 0 auto;
  }
  .code-wrapper {
    div.dashed-bar {
      display: block;
      box-sizing: border-box;
      width: 100%;
      font-size: 20px;
      padding-left: 1.5ch;
      height: 1px;
      background: none;
      width: ~"calc(100% - 1em)";
      margin: 0 auto;
      height: 1px;
      background-image: linear-gradient(
        90deg,
        #000,
        #000 75%,
        transparent 75%,
        transparent 100%
      );
      background-size: 20px 1px;
      border: none;

      background-image: linear-gradient(
        90deg,
        #000,
        #000 69%,
        transparent 0%,
        transparent 100%
      );
      background-size: 29px 1px;
    }
    input {
      border: none;
      font-size: 20px;
      width: 10.5ch;
      background: repeating-linear-gradient(
          90deg,
          dimgrey 0,
          dimgrey 1ch,
          transparent 0,
          transparent 1.5ch
        )
        0 100%/100% 2px no-repeat;
      color: dimgrey;
      font: 5ch consolas, monospace;
      letter-spacing: 0.5ch;

      font-size: 20px;
      width: 18ch;
      letter-spacing: 1.6ch;
      padding-left: 1.5ch;
    }
    input:focus {
      outline: none;
      color: @color-gray-dark;
    }
  }
}
</style>