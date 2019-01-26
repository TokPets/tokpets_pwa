<template>
  <form class="Form-Pet-Info" v-on:submit.prevent="onSubmitSignUp">



    <div class="form-group">
      
      <h1>PET INFORMATION</h1>      
    
      <!-- Dog or Cat Selector -->
      <form-input-type @onTypeSelect = "doFormInputEventCatch('type',$event)"/>

      <!-- Pet's Name -->
      <form-input-name @onNameTyped = "doFormInputEventCatch('name',$event)"></form-input-name>

      <!-- Pet's Gender -->
      <form-input-gender @onBreedSelected = "doFormInputEventCatch('breed',$event)"></form-input-gender>

      <!-- Pet's Birthday -->
      <form-input-birthday></form-input-birthday>

      <!-- Pet's Breed
      <form-input-breed></form-input-breed>
       -->

      <!-- Pet's Size -->
      <form-input-size></form-input-size>

      <!-- Pet's Country -->
      <form-input-country></form-input-country>

      <!-- Pet's City -->
      <form-input-city></form-input-city>

      <!-- Pet's Tracker's Code -->
      <form-input-tracker-code></form-input-tracker-code>

    </div>

    <div class="form-group">
      <h1>OWNER INFO</h1>
      <input type="submit" value="SING UP">
    </div>

    
    
  </form>
</template>

<script>
/* eslint-disable */

/* ------------------------------------- */
/* -- Import Vendors & Libs ------------ */
/* ------------------------------------- */

/* ------------------------------------- */

/* ------------------------------------- */
/* -- Import Components ---------------- */
/* ------------------------------------- */
  import FormInputBirthday from './FormSignUp_Inputs/FormInputBirthday';
  import FormInputType from './FormSignUp_Inputs/FormInputType';
  import FormInputBreed from './FormSignUp_Inputs/FormInputBreed';
  import FormInputCity from './FormSignUp_Inputs/FormInputCity';
  import FormInputCountry from './FormSignUp_Inputs/FormInputCountry';
  import FormInputEmail from './FormSignUp_Inputs/FormInputEmail';
  import FormInputGender from './FormSignUp_Inputs/FormInputGender';
  import FormInputName from './FormSignUp_Inputs/FormInputName';
  import FormInputPassword from './FormSignUp_Inputs/FormInputPassword';
  import FormInputPhone from './FormSignUp_Inputs/FormInputPhone';
  import FormInputSize from './FormSignUp_Inputs/FormInputSize';
  import FormInputTrackerCode from './FormSignUp_Inputs/FormInputTrackerCode';
/* ------------------------------------- */

/* ------------------------------------- */
/* -- Import Models---------------- */
/* ------------------------------------- */
import TokUser from "@/models/user.model.js";
import TokPet from "@/models/pet.model.js";
/* ------------------------------------- */

export default {

  name: "FormSignUp",

  components: {
    FormInputType,
    FormInputBirthday,
    FormInputBreed,
    FormInputCity,
    FormInputCountry,
    FormInputEmail,
    FormInputGender,
    FormInputName,
    FormInputPassword,
    FormInputPhone,
    FormInputSize,
    FormInputTrackerCode
},

  methods: {
    
    doFormInputEventCatch(InputParameter,InputValue){
      this.PET[InputParameter] = InputValue; // cat, dog
    },

    onSubmitSignUp() {

    }
  },

  mounted() {

    let tokUser = new TokUser();
    let tokPet = new TokPet();

    this.USER = tokUser;
    this.PET = tokPet;
  },

  data() {
    return {
      USER : {},
      PET : {}
    };
  }
};
</script>

<style lang="less" scoped>

  @import (reference) "../../styles/main.less";

  .form-group{
    h1{
      font-family: 'HelveticaNeue-Bold';
      font-size: 1.20em;
      text-align: center;
    }
  }
/*


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



*/
</style>
