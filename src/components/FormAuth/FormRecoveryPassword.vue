<script>
/* eslint-disable */

/* ------------------------------------- */
/* -- Import Models--------------------- */
/* ------------------------------------- */
import TokUser from '@/models/user.model.js'
import TokPet from '@/models/pet.model.js'
/* ------------------------------------- */


/* ------------------------------------- */
/* -- Import Helpers & Services -------- */
/* ------------------------------------- */
import TokAuthHelper from '@/scripts/auth/auth.helper.js'
/* ------------------------------------- */


export default {
    
  name: "FormRecoveryPassword",
  
  components: {

  },
  
  methods: {

    onPasswordRecovery(){
        this.AUTH.doRecoveryPassword(this.USER.email)
        .then( response => {
            this.$modal.hide('reset-password-modal');
        })
        .catch( error => {
            if(error.code == 'auth/invalid-email'){
                this.ERROR.PASSWORD_RESET = ' Invalid Email ';
            }
        })
    }
  },
  
  mounted(){ 
      this.AUTH = new TokAuthHelper();
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

 <template>
 <div>

    <div class="error-message" v-if="ERROR.PASSWORD_RESET">
     {{ ERROR.PASSWORD_RESET }}
     </div>

    <form class="dark-form" v-on:submit.prevent="onPasswordRecovery()">
        <div class="input-group email">
            <img class="email" src="@/assets/icons/email.png" alt="Email Icon" >
            <input type="email" placeholder="Ingresa tu Email" v-model="USER.email" required>
        </div>
        <input type="submit" value="-SUBMIT-">
    </form>

 </div>
</template>

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
