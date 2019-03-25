<script>
/**
 * -------------------------------------------
 * ---- View :: Login ------------------------
 * -------------------------------------------
 *
 * -------------------------------------------
 */

// --- Vuex States --- //
import { mapGetters, mapActions } from "vuex";

// --- TokPets Components --- //
import TokLoadingBar from "../components/Login/TokLoadingBar";
import { setTimeout } from 'timers';

// --- TokPets View Component --- //
export default {
  name: "login",

  components: {
    TokLoadingBar
  },

  computed: mapGetters(["count", "recentHistory"]),
  methods: {
      ...mapActions([
        "increment",
        "decrement",
        "incrementIfOdd",
        "incrementAsync"
      ]),
 
      nextState(){
        const currentStateIndex = Math.min(Math.max(0,this.STATES.findIndex( STATE => STATE === this.STATE)), this.STATES.length - 2);
        const nextState = isNaN(currentStateIndex) ? this.STATES[0] : this.STATES[currentStateIndex + 1];
        this.STATE = nextState;
      },
      prevState(){
        const currentStateIndex =Math.max(Math.min(0,this.STATES.findIndex( STATE => STATE === this.STATE)), this.STATES.length - 2);
        const nextState = isNaN(currentStateIndex) ? this.STATES[0] : this.STATES[currentStateIndex - 1];
        this.STATE = nextState;
      },

      getLoginStateClass(){
        let styleClass = 'default';
        if(this.STATE === 'onSignin') styleClass = 'light';
        if(this.STATE === 'onSignup') styleClass = 'light';
        return styleClass;
      },

      getLogoURL(){
        let url = '/img/login/tok_blanco.png';
        if(this.STATE === 'onSignin') url = '/img/login/tok_negro.png';
        if(this.STATE === 'onSignup') url = '/img/login/tok_negro.png';
        return url;
      },


      onLoad(){
        this.UI.isLoaded = true;
        this.nextState();
        setTimeout( () => this.nextState() , 1000);
      }

  },

  created() {},

  mounted() {
  },

  data() {
    return {
      UI: {
        isLoaded : false
      },
      STATES : ['onLoading','onLoaded','onTransition','onSignin','onSignup'],
      STATE : 'onLoading'
    };
  }
};
</script>



<template>

    <!-- ----------------------------------------------------- -->
    <!-- --- View::Login                 --------------------- -->
    <!-- ----------------------------------------------------- -->
    <div class="view view-login" :class="getLoginStateClass()">


      <!-- --------------------------------------------------- -->
      <!-- --- View::Login => TokPets Logo ------------------- -->
      <!-- --------------------------------------------------- -->
      <div class="login-logo">
        <img :src="getLogoURL()" >
        <div class="login-announcement signup" v-show="UI.isLoaded && STATE !== 'onSignin' && STATE !== 'onSignup' " @click="STATE = 'onSignup'">
          <h2 class="announcement title">Create An Account **</h2>
          <h2 class="announcement subtitle">I'm new in Tok</h2>
        </div>
      </div>
        
      <!-- --------------------------------------------------- -->



      
      <!-- --------------------------------------------------- -->
      <!-- --- View::Login => Loading Bar -------------------- -->
      <!-- --------------------------------------------------- -->
      <div class="login-loading-bar" v-if="!UI.isLoaded">
          <tok-loading-bar @onLoaded = "onLoad()"/>
      </div>
      <!-- --------------------------------------------------- -->




      <!-- --------------------------------------------------- -->
      <!-- --- View::Login => Login Button ------------------- -->
      <!-- --------------------------------------------------- -->
      <div class="login-button button" :class="getLoginStateClass()"
      v-show="UI.isLoaded" @click="STATE = 'onSignin'" >
          <h2 class="button-title"> Log In </h2>
      </div>
      <!-- --------------------------------------------------- -->


    </div>
    <!-- ----------------------------------------------------- -->
</template>














<style lang="less">
@import (reference) "../styles/main.less";
// -- ---------------------------------- -- //
// -- -- @Styles :: View/Login --------- -- //
// -- ---------------------------------- -- //
div.view.view-login {

  // -- ---- Constructor ----- -- //
  #view();

  // -- - Themes & Modifiers - -- //
  &.default{
    #view-theme-dark(); 
  }
  &.light{
    #view-theme-light(); 
  }
  

}

// -- ---------------------------------- -- //
// -- -- @Styles :: View/Login --------- -- //
// -- ---------------------------------- -- //
div.view.view-login {
  div.login-logo {
    img{
      display: block;
      height: calc(100% - 4em);
       margin: 0 auto;

       &.logo-class{
         &-onSignin{

         }
         &-onSignup{

         }
       }
    }
       display: block;
       .flex-display(flex);
       .flex-direction(column);
       .justify-content(space-between);
      height: 50%;
      margin: 0 auto;
      margin-top: 33%;
  }
  div.login-loading-bar{
    display: block;
    padding: 5em 0em;
  }
  div.login-button{
    #button();
  }

  div.button{
    &.default{
      #button-theme-white();
    }
    &.light{
      #button-theme-black();
    }
  }
  

  div.login-announcement{
    display: block;
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    border-top: 1px solid @color-gray;
    padding-top: 1em;
    position: relative;
    top: 0em;
    .title{
      font-size: 1em;
    }
    .subtitle{
      font-size: 0.85em;
      opacity: 0.35;
    }
  }
}
</style>
