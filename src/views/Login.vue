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

import LoginEmailInputComponent from "../components/Login/login.email.input.component";
import LoginPasswordInputComponent from "../components/Login/login.password.input.component";

import TokAuthHelper from "./../scripts/auth/auth.helper.js";

// --- TokPets View Component --- //
export default {
  name: "login",

  components: {
    TokLoadingBar,
    LoginEmailInputComponent,
    LoginPasswordInputComponent
  },

  computed: mapGetters(["count", "recentHistory"]),
  methods: {
    ...mapActions([
      "increment",
      "decrement",
      "incrementIfOdd",
      "incrementAsync"
    ]),

    nextState() {
      const currentStateIndex = Math.min(
        Math.max(0, this.STATES.findIndex(STATE => STATE === this.STATE)),
        this.STATES.length - 2
      );
      const nextState = isNaN(currentStateIndex)
        ? this.STATES[0]
        : this.STATES[currentStateIndex + 1];
      this.STATE = nextState;
    },
    prevState() {
      const currentStateIndex = Math.max(
        Math.min(0, this.STATES.findIndex(STATE => STATE === this.STATE)),
        this.STATES.length - 2
      );
      const nextState = isNaN(currentStateIndex)
        ? this.STATES[0]
        : this.STATES[currentStateIndex - 1];
      this.STATE = nextState;
    },

    getLoginStateClass() {
      let styleClass = "default";
      if (this.STATE === "onSignin") styleClass = "light";
      if (this.STATE === "onSignup") styleClass = "light";
      return styleClass;
    },

    getLogoURL() {
      let url = "/img/login/tok_blanco.png";
      if (this.STATE === "onSignin") url = "/img/login/tok_negro.png";
      if (this.STATE === "onSignup") url = "/img/login/tok_negro.png";
      return url;
    },

    onLoad() {
      this.UI.isLoaded = true;
      this.nextState();
      setTimeout(() => this.nextState(), 1000);
    },

    goToSignInView() {
      this.$router.push("signin");
    },

    doUpdateEmail($email) {
      this.USER.email = $email;
      if ($email === "") {
        this.UI.isErrorEmail = false;
        this.UI.isErrorPassword = false;
        this.UI.isErrorPasswordRecovery = false;
      }
    },

    doUpdatePassword($password) {
      this.USER.password = $password;
      if ($password === "") {
        this.UI.isErrorEmail = false;
        this.UI.isErrorPassword = false;
        this.UI.isErrorPasswordRecovery = false;
      }
    },

    doUpdatePasswordError() {
      this.UI.isErrorPasswordRecovery = true;
    },

    doPasswordRecoverySuccess() {
      this.STATE = this.STATES[1];
    },

    doLogin() {
      if (this.STATE != "onSignin") {
        this.STATE = "onSignin";
      } else {
        const auth = new TokAuthHelper();
        auth
          .doLogging(this.USER.email, this.USER.password)
          .then(response => {
            if (response.status) {
              this.$router.push("main");
              this.UI.isErrorEmail = false;
              this.UI.isErrorPassword = false;
            } else {
              this.UI.isErrorEmail = true;
              this.UI.isErrorPassword = true;
            }
          })
          .catch(error => {
            this.UI.isErrorEmail = false;
            this.UI.isErrorPassword = false;
          });
      }
    }
  },

  created() {},

  mounted() {},

  data() {
    return {
      UI: {
        isLoaded: false,
        isErrorEmail: false,
        isErrorPassword: false,
        isErrorPasswordRecovery: false
      },
      USER: {
        email: "",
        password: ""
      },
      STATES: ["onLoading", "onLoaded", "onTransition", "onSignin", "onSignup"],
      STATE: "onLoading"
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
    <div class="login-logo" :class="getLoginStateClass()">
      <img :src="getLogoURL()">
      <div
        class="login-announcement signup"
        v-show="UI.isLoaded && STATE !== 'onSignin' && STATE !== 'onSignup' "
        @click="goToSignInView()"
      >
        <h2 class="announcement title">Create An Account **</h2>
        <h2 class="announcement subtitle">I'm new in Tok</h2>
      </div>
    </div>

    <!-- --------------------------------------------------- -->

    <!-- --------------------------------------------------- -->
    <!-- --- View::Login => Loading Bar -------------------- -->
    <!-- --------------------------------------------------- -->
    <div class="login-loading-bar" v-if="!UI.isLoaded">
      <tok-loading-bar @onLoaded="onLoad()"/>
    </div>
    <!-- --------------------------------------------------- -->

    <!-- --------------------------------------------------- -->
    <!-- --- View::Login => Form ---------------------------- -->
    <!-- --------------------------------------------------- -->
    <form class="form signin" v-if="STATE == 'onSignin' || STATE == 'onSignup'">
      <login-email-input-component @onEmailTyped="doUpdateEmail($event)" :error="UI.isErrorEmail"/>
      <login-password-input-component
        @onPasswordTyped="doUpdatePassword($event)"
        @onPasswordRecoveryError="doUpdatePasswordError()"
        @onRecoverySuccess="doPasswordRecoverySuccess()"
        :recoveryError="UI.isErrorPasswordRecovery"
        :error="UI.isErrorPassword"
      />
    </form>
    <!-- --------------------------------------------------- -->

    <!-- --------------------------------------------------- -->
    <!-- --- View::Login => Login Button ------------------- -->
    <!-- --------------------------------------------------- -->
    <div
      class="login-button button"
      :class="getLoginStateClass()"
      v-show="UI.isLoaded"
      @click="doLogin();"
    >
      <h2 class="button-title">Log In</h2>
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
  &.default {
    #view-theme-dark();
  }
  &.light {
    #view-theme-light();
  }
}

// -- ---------------------------------- -- //
// -- -- @Styles :: View/Login --------- -- //
// -- ---------------------------------- -- //
div.view.view-login {
  div.login-logo {
    img {
      display: block;
      height: calc(100% - 4em);
      margin: 0 auto;
    }

    display: block;
    margin: 0 auto;

    .flex-display(flex);
    .flex-direction(column);
    .justify-content(space-between);

    &.default {
      height: 50%;
      margin-top: 33%;
    }
    &.light {
      height: 50%;
      margin-top: 12%;
      img {
        height: calc(100%);
      }
    }
  }
  div.login-loading-bar {
    display: block;
    padding: 5em 0em;
  }
  div.login-button {
    #button();
  }

  div.button {
    &.default {
      #button-theme-white();
    }
    &.light {
      #button-theme-black();
    }
  }

  div.login-announcement {
    display: block;
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    border-top: 1px solid @color-gray;
    padding-top: 1em;
    position: relative;
    top: 0em;
    .title {
      font-size: 1em;
    }
    .subtitle {
      font-size: 0.85em;
      opacity: 0.35;
    }
  }
  form.form.signin {
    display: block;
    margin: 0 auto;
    width: calc(100% - 3em);
  }
}
</style>
