<script>
/* eslint-disable */

/* ---------------------------------------------------------- */
/* -- Import Vendors & Libs --------------------------------- */
/* ---------------------------------------------------------- */
import firebase from "firebase";
import { page } from "vue-analytics";

/* ---------------------------------------------------------- */

/* ---------------------------------------------------------- */
/* -- Import Components ------------------------------------- */
/* ---------------------------------------------------------- */
import { Tabs, Tab } from "./../components/Tabs/index.js";
import FormSignIn from "./../components/FormAuth/FormSignIn";
import FormSignUp from "./../components/FormAuth/FormSignUp";
import FormRecoveryPassword from "./../components/FormAuth/FormRecoveryPassword";
/* ---------------------------------------------------------- */

/* ---------------------------------------------------------- */
/* -- Import Models------------------------------------------- */
/* ---------------------------------------------------------- */
import TokUser from "./../models/user.model.js";
import TokPet from "./../models/pet.model.js";
/* ---------------------------------------------------------- */

export default {
  name: "home",

  components: {
    Tabs,
    Tab,
    FormSignIn,
    FormSignUp,
    FormRecoveryPassword
  },

  methods: {
    
    track() {
      page("/");
    },

    doShowModal() {
      this.$modal.show("modal-reset-password");
    }
  },

  created() {
    this.WINDOW.width = Math.max(window.screen.width*0.8, 250);
    this.WINDOW.height = Math.max(window.screen.height*0.3, 250);
  },

  mounted() {
    // Google Analytics Track
    this.track();
  },
  data() {
    return {
      USER: {},
      ERROR: {},
      PET: {},
      WINDOW : {
        width: '',
        height: ''
      }
    };
  }
};

</script>


<template>
  <div class="view home-view">

    <img class="home-view-logo" alt="TokPets Logo" src="../assets/large_title_and_logo.png">
    
    <tabs class="home-view-tabs">
      <tab title=" - SIGN IN - " active="true">
        <form-sign-in/>
        <a @click="doShowModal()">Forgot your password?</a>
      </tab>
      <tab title=" - SIGN UP - ">
        <form-sign-up/>
      </tab>
    </tabs>

  
    <modal name="modal-reset-password" :width="WINDOW.width" :height="WINDOW.height" transition="pop-out">
      <div class="home-view-modal">

        <h1>RESET PASSWORD</h1>
        <p>We will send you an email to reset your password</p>

        <form-recovery-password/>

      </div>
    </modal>
  

  </div>
</template>


<style lang="less">


  // ------------------------------------- //
  // -- @import(reference) --------------- //
  // ------------------------------------- //
    @import (reference) "../styles/main.less";
  // ------------------------------------- //


  // ------------------------------------- //
  // -- home-view : View() --------------- //
  // ------------------------------------- //
    div.view.home-view{
      
      #view();

    }
  // ------------------------------------- //


  // ------------------------------------- //
  // -- home-view-logo  ------------------ //
  // ------------------------------------- //
      img.home-view-logo{
        
        display:block;
        margin: 0 auto;
        padding: 0px;

        width: 40vw;
        height: 75vw;
        
      }
  // ------------------------------------- //


  // ------------------------------------- //
  // -- home-view-tabs  ------------------ //
  // ------------------------------------- //
      div.home-view-tabs{
        display: block;
        width: 100%;
        max-width: ~"70vw";
      }
  // ------------------------------------- //


  // ------------------------------------- //
  // -- home-view-modal  ----------------- //
  // ------------------------------------- //
      div.home-view-modal{
        #ModalResetPassword();
      }
  // ------------------------------------- //


</style>
