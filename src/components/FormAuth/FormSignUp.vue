<template> 
 <form class="Form-Pet-Info" v-on:submit.prevent="onSubmitSignUp">

          <div class="form-group">
            <h1>PET INFORMATION</h1>
            <div class="pet-icons">
              
              <img src="@/assets/icons/dog_normal.png" alt="Dog Icon" class="pet-icon-dog" v-if="PET.type=='dog'" @click="PET.type = 'dog'">
              <img src="@/assets/icons/dog_inverted.png" alt="Dog Icon" class="pet-icon-dog" v-if="PET.type !='dog'" @click="PET.type = 'dog'">

              <img src="@/assets/icons/dog_normal.png" alt="Cat Icon" class="pet-icon-cat" v-if="PET.type=='cat'" @click="PET.type = 'cat'">
              <img src="@/assets/icons/dog_inverted.png" alt="Cat Icon" class="pet-icon-cat" v-if="PET.type !='cat'" @click="PET.type = 'cat'">

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

/* ------------------------------------- */


/* ------------------------------------- */
/* -- Import Models---------------- */
/* ------------------------------------- */
import TokUser from '@/models/user.model.js';
import TokPet from '@/models/pet.model.js';
/* ------------------------------------- */



export default {
  name: "FormSignUp",
  
  components: {},
  
  methods: {
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
@import (reference) "./../../styles/main.less";

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
