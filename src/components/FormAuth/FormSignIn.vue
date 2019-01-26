<script>
/* eslint-disable */

import TokAuthHelper from "./../../scripts/auth/auth.helper.js";

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
      this.AUTH.doLogging(this.USER.email, this.USER.password).then( response => {
        if(response.status){
          console.warn(' WOW OMG ALL OK')
        }else{
          console.error(' TOK PETS APP ::  AUTH ERROR ')
        }
      })
    },
    
    doFormInputEventCatch(InputParameter,InputValue){
      this.USER[InputParameter] = InputValue;
    }

  },

  created() {
    this.AUTH = new TokAuthHelper();
  },

  data() {
    return {
      USER: {
        email: "",
        password: ""
      },
      AUTH : {}
    };
  }
};
</script>

 <template>
  <form v-on:submit.prevent="onSubmitSignIn">
    <form-input-email @onEmailTyped = "doFormInputEventCatch('email',$event)"></form-input-email>
    <form-input-password @onPasswordTyped = "doFormInputEventCatch('password',$event)"></form-input-password>
    <input type="submit" value="SIGN IN">
  </form>
</template>
