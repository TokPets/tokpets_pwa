<template>
  <div class="view">

    <img  class="main-logo" alt="TokPets Logo" src="../assets/large_title_and_logo.png">

    <tabs class="tabs">
      <tab title=" - SIGN IN - " active="true">
        <form-sign-in/>
        <a @click="doShowModal()"> Forgot your password? </a>
      </tab>
      <tab title=" - SIGN UP - ">
         <form-sign-up/>
      </tab>
    </tabs>



    <modal name="reset-password-modal" :width="225" :height="200" transition="pop-out">
      <div class="modal-content">
        <h1>RESET PASSWORD</h1>
        <p>We will send you an email to reset your password</p>
        <form-recovery-password/>
      </div>
    </modal>

  </div>
</template>

<script>
/* eslint-disable */

/* ------------------------------------- */
/* -- Import Vendors & Libs ------------ */
/* ------------------------------------- */
import firebase from "firebase";
import { page } from 'vue-analytics'

/* ------------------------------------- */


/* ------------------------------------- */
/* -- Import Components ---------------- */
/* ------------------------------------- */
import { Tabs, Tab } from "./../components/Tabs/index.js";
import FormSignIn from "./../components/FormAuth/FormSignIn";
import FormSignUp from "./../components/FormAuth/FormSignUp";
import FormRecoveryPassword from "./../components/FormAuth/FormRecoveryPassword";
/* ------------------------------------- */


/* ------------------------------------- */
/* -- Import Models---------------- */
/* ------------------------------------- */
import TokUser from './../models/user.model.js';
import TokPet from './../models/pet.model.js';
/* ------------------------------------- */



export default {

  name: "home",

  components: { 
    Tabs, Tab,
    FormSignIn,
    FormSignUp,
    FormRecoveryPassword
  },

  methods: {

    track () {
      page('/')
    },

    doShowModal(){
      this.$modal.show('reset-password-modal');
    }

  },

  created(){

  },

  mounted(){

    // Google Analytics Track
    this.track();

  },
  data() {
    return {
      USER:{},
      ERROR: {},
      PET:{},
      USER_FIELDS:[],
      PET_FIELDS:[]
    };
  }
};
</script>

<style lang="less" scoped>

@import (reference) "../styles/main.less";

.view{
  width: 100vw;
  overflow-x: hidden;
}
.main-logo {
  width: 25vw;
  display: block;
  margin: 5em auto;
  margin-bottom: 2.5em;
}

.tabs {
  width: 100%;
  display: block;
  max-width: 225px;
  margin: 0 auto;
}

.modal-content{
  
  display: block;
  
  width: 100%;
  height: 100%;

  padding: 1em;

  box-sizing: border-box;

  border-radius: 0.15em;
  color: @color-white;
  background-color: @color-black;

  h1{

  }
  p{
    margin: 1.25em 1em;
    font-size: 0.65em;
    text-align: center;
  }
  

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

}


.Form-Pet-Info{
  background-color: white;
  padding: 1em;
  margin: 1em 0em;
}
.pet-icons{

  width: 100%;
  cursor: pointer;

  .pet-icon-dog{
    width: 50%;
  }
  .pet-icon-cat{
    width: 50%;
  }

      display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}




</style>
