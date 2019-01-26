 <template>
  <form v-on:submit.prevent="onSubmitSignIn">
    <form-input-email></form-input-email>
    <form-input-password></form-input-password>
    <input type="submit" value="SIGN IN">
  </form>
</template>

<script>
/* eslint-disable */

/* ------------------------------------- */
/* -- Import Form's Inputs ------------ */
/* ------------------------------------- */
  import FormInputEmail from "./FormSignIn_Inputs/FormInputEmail";
  import FormInputPassword from "./FormSignIn_Inputs/FormInputPassword";
/* ------------------------------------- */

export default {
  name: "FormSignIn",

  components: {
    FormInputEmail,
    FormInputPassword
  },

  methods: {
    onSubmitSignIn() {
    
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
