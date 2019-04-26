<template>
  <section class="device-code">
    <img class="logo" src="../../assets/login/Registrocorazon.png">
    <h1>
      <strong>CREATE</strong> AN ACCOUNT
    </h1>
    <h2>Please enter the Tok Tracker code</h2>

    <div class="code">
      <input
        ref="refCodeInput0"
        maxlength="1"
        v-model="DATA.CODE[0]"
        @keyup="setCodeFocus(0,$event)"
        @click="resetDataCode(0)"
      >
      <input
        ref="refCodeInput1"
        maxlength="1"
        v-model="DATA.CODE[1]"
        @keyup="setCodeFocus(1,$event)"
        @click="resetDataCode(1)"
      >
      <input
        ref="refCodeInput2"
        maxlength="1"
        v-model="DATA.CODE[2]"
        @keyup="setCodeFocus(2,$event)"
        @click="resetDataCode(2)"
      >
      <input
        ref="refCodeInput3"
        maxlength="1"
        v-model="DATA.CODE[3]"
        @keyup="setCodeFocus(3,$event)"
        @click="resetDataCode(3)"
      >
      <input
        ref="refCodeInput4"
        maxlength="1"
        v-model="DATA.CODE[4]"
        @keyup="setCodeFocus(4,$event)"
        @click="resetDataCode(4)"
      >
      <input
        ref="refCodeInput5"
        maxlength="1"
        v-model="DATA.CODE[5]"
        @keyup="setCodeFocus(5,$event)"
        @click="resetDataCode(5)"
      >
    </div>

    <br>
    <br>

    <div class="button" @click="doSigninPet()">CREATE PROFILE</div>
  </section>
</template>


<script>
export default {
  name: "SignUpSectionDeviceCode",

  computed: {},

  methods: {
    doSigninPet() {
      this.$emit("onNextButton");
    },
    setCodeFocus(n, $event) {}
  },

  mounted() {},

  data() {
    return {
      DATA: {
        CODE: ["", "", "", "", "", ""]
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
    strong {
      font-weight: 900;
    }
  }
  h2 {
    font-size: 1em;
    font-weight: 300;
    padding-bottom: 1em;
    strong {
      font-weight: 900;
    }
  }
  .code {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  input {
    border: none;
    width: 1.3em;
    text-align: center;
    background: none;
    color: dimgrey;
    font-size: 1.25em;
    letter-spacing: 0em;
    margin: 0em 0.25em;
    border-bottom: 1px solid black;
  }
  input:focus {
    outline: none;
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
}
</style>