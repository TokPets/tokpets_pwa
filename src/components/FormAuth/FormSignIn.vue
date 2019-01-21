 <template>
  <form v-on:submit.prevent="onSubmitSignIn">
    <div class="input-group email">
      <img class="email" src="@/assets/icons/email.png" alt="Email Icon">
      <input
        type="email"
        placeholder="Ingresa tu Email"
        v-model="USER.email"
        required
        aria-required="true"
      >
    </div>
    <div class="input-group password">
      <img class="password" src="@/assets/icons/lock.png" alt="Password Icon">
      <input
        type="password"
        placeholder="Ingresa tu Password"
        v-model="USER.password"
        required
        aria-required="true"
      >
    </div>
    <input type="submit" value="SIGN IN">
  </form>
</template>

<script>
/* eslint-disable */

/* ------------------------------------- */
/* -- Import Vendors & Libs ------------ */
/* ------------------------------------- */
import firebase from "firebase";
/* ------------------------------------- */

export default {
  name: "FormSignIn",

  components: {},

  methods: {
    onSubmitSignIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.USER.email, this.USER.password)
        .then(response => {
          this.$ga.event({
            eventCategory: "auth_sign_in",
            eventAction: "successful",
            eventLabel: "ok"
          });

          this.$router.push("main");
        })
        .catch(error => {
          this.$ga.event({
            eventCategory: "auth_sign_in",
            eventAction: "error",
            eventLabel: "error"
          });
        });
    }
  },

  mounted() {},

  data() {
    return {
      USER: {
        email: "",
        password: ""
      }
    };
  }
};
</script>

<style lang="less" scoped>
//  @import (reference) "./../../styles/main.less";
</style>
