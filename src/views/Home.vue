<template>
  <div class="view">

    <img  class="main-logo" alt="TokPets Logo" src="../assets/large_title_and_logo.png">

    <tabs class="tabs">

      <tab title=" - SIGN IN - " active="true">
       <form v-on:submit.prevent="onSubmitSignIn">
          <div class="input-group email">
            <img class="email" src="../assets/icons/email.png" alt="Email Icon" >
            <input type="email" placeholder="Ingresa tu Email" v-model="USER.email">
          </div>
          <div class="input-group password">
            <img class="password" src="../assets/icons/lock.png" alt="Password Icon" >
            <input type="password" placeholder="Ingresa tu Password" v-model="USER.password">
          </div>
          <input type="submit" value="SIGN IN">
          <a @click="doShowResetPasswordModal()"> Forgot your password? </a>
        </form>
      </tab>

      <tab title=" - SIGN UP - ">
         <form class="Form-Pet-Info" v-on:submit.prevent="onSubmitSignUp">

          <div class="form-group">
            <h1>PET INFORMATION</h1>
            <div class="pet-icons">
              
              <img src="../assets/icons/dog_normal.png" alt="Dog Icon" class="pet-icon-dog" v-if="PET.type=='dog'" @click="PET.type = 'dog'">
              <img src="../assets/icons/dog_inverted.png" alt="Dog Icon" class="pet-icon-dog" v-if="PET.type !='dog'" @click="PET.type = 'dog'">

              <img src="../assets/icons/dog_normal.png" alt="Cat Icon" class="pet-icon-cat" v-if="PET.type=='cat'" @click="PET.type = 'cat'">
              <img src="../assets/icons/dog_inverted.png" alt="Cat Icon" class="pet-icon-cat" v-if="PET.type !='cat'" @click="PET.type = 'cat'">

            </div>

            <div class="input-group" v-for="field in PET_FIELDS">
              <img class="" alt="" src="">
              <input type="text" :placeholder="field.placeholder">
            </div>

          </div>

          <div class="form-group">
            <h1>OWNER INFO</h1>
            <div class="input-group" v-for="field in USER_FIELDS">
              <img class="" alt="" src="">
              <input type="text" :placeholder="field.placeholder">
            </div>
          </div>

          <input type="submit" value="SING UP">

        </form>
      </tab>
    </tabs>



    <modal name="reset-password-modal" :width="225" :height="200" transition="pop-out">
      <div class="modal-content">
        <h1>RESET PASSWORD</h1>
        <p>We will send you an email to reset your password</p>
        <form class="dark-form" v-on:submit.prevent="doPasswordReset()">
          <div class="input-group email">
            <img class="email" src="../assets/icons/email.png" alt="Email Icon" >
            <input type="email" placeholder="Ingresa tu Email" v-model="USER.email">
          </div>
          <input type="submit" value="-SUBMIT-">
        </form>
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
/* ------------------------------------- */


/* ------------------------------------- */
/* -- Import Components ---------------- */
/* ------------------------------------- */
import { Tabs, Tab } from "./../components/Tabs/index.js";
/* ------------------------------------- */


/* ------------------------------------- */
/* -- Import Models---------------- */
/* ------------------------------------- */
import TokUser from './../models/user.model.js';
import TokPet from './../models/pet.model.js';
/* ------------------------------------- */



export default {
  name: "home",
  components: { Tabs, Tab },
  methods: {
    onSubmitSignIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.USER.email, this.USER.password)
        .then(response => {
          console.warn('*** SIGN IN')
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    },
    onSubmitSignUp() {
      firebase
        .auth().createUserWithEmailAndPassword(this.USER.email, this.USER.password)
        .then(response => {
          console.warn('*** SIGN IN')
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    },
    doPasswordReset(){
      const emailAddress = this.USER.email;
      firebase.auth().sendPasswordResetEmail(emailAddress).then( response => {
        this.$modal.hide('reset-password-modal');
      }).catch( error => {
        console.error(error);
      });
    },
    doShowResetPasswordModal(){
      this.$modal.show('reset-password-modal');
    }
  },
  mounted(){

    let tokUser = new TokUser();
    this.USER = tokUser;

    let tokPet = new TokPet();
    this.PET = tokPet;

    let USER_FIELDS = Object.keys(this.USER);
    let PET_FIELDS = Object.keys(this.PET);


    this.USER_FIELDS = USER_FIELDS.map( user_field => {
      return {
        placeholder : user_field
      }
    });

     this.PET_FIELDS = PET_FIELDS.map( pet_field => {
      return {
        placeholder: pet_field
      }
    });

    console.error('USER_FIELDS')
    console.error(USER_FIELDS)

    console.error('PET_FIELDS')
    console.error(PET_FIELDS)


    
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
