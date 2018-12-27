 <template>
 <div>

    <div class="error-message" v-if="ERROR.PASSWORD_RESET">
     {{ ERROR.PASSWORD_RESET }}
     </div>

    <form class="dark-form" v-on:submit.prevent="doPasswordReset()">
        <div class="input-group email">
            <img class="email" src="@/assets/icons/email.png" alt="Email Icon" >
            <input type="email" placeholder="Ingresa tu Email" v-model="USER.email" required>
        </div>
        <input type="submit" value="-SUBMIT-">
    </form>

 </div>
</template>

<script>
/* eslint-disable */

/* ------------------------------------- */
/* -- Import Vendors & Libs ------------ */
/* ------------------------------------- */
import firebase from "firebase";
/* ------------------------------------- */


/* ------------------------------------- */
/* -- Import Models---------------- */
/* ------------------------------------- */
import TokUser from '@/models/user.model.js';
import TokPet from '@/models/pet.model.js';
/* ------------------------------------- */



export default {
  name: "FormRecoveryPassword",
  
  components: {},
  
  methods: {

    doPasswordReset(){

      const user_email = this.USER.email;

      firebase.auth()
      .sendPasswordResetEmail(user_email)
      .then( response => {

        this.$modal.hide('reset-password-modal');

        this.$ga.event({
            eventCategory: 'auth_recovery_password',
            eventAction: 'successful',
            eventLabel: 'ok',
        })
        

      }).catch( error => {
        
        if(error.code == 'auth/invalid-email'){
            this.ERROR.PASSWORD_RESET = ' Invalid Email ';
        }

        this.$ga.event({
            eventCategory: 'auth_recovery_password',
            eventAction: 'error',
            eventLabel: 'error',
        })
        
      });
    }
  },
  
  mounted(){ 

  },

  data() {
    return {
        USER:{
            email: ''
        },
        ERROR:{
            PASSWORD_RESET : ''
        }
    };
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../../styles/main.less";

.error-message{
    text-align: center;
    color: pink;
    font-size: 0.85em;
    text-transform: uppercase;
    padding: 0.25em;
    margin: 0.25em;
}

</style>
