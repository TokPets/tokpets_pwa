<template>
  <section class="section-pet">
    <div class="section-header">
      <h1>
        <strong>Pet</strong> Information
      </h1>
      <h2>#{{ DATA.TRACKER.CODE }}</h2>

      <div class="pet-types">
        <div class="pet-type cat selected" @click="setPetType('CAT')" v-if="DATA.PET.type ==='CAT'">
          <img src="../../assets/login/Registrogato1.png">
        </div>
        <div
          class="pet-type cat unselected"
          @click="setPetType('CAT')"
          v-if="DATA.PET.type !== 'CAT'"
        >
          <img src="../../assets/login/Registrogato2.png">
        </div>
        <div
          class="pet-type dog selected"
          @click="setPetType('DOG')"
          v-if="DATA.PET.type === 'DOG'"
        >
          <img src="../../assets/login/Registroperro2.png">
        </div>

        <div
          class="pet-type dog unselected"
          @click="setPetType('DOG')"
          v-if="DATA.PET.type !=='DOG'"
        >
          <img src="../../assets/login/Registroperro1.png">
        </div>
      </div>
    </div>

    <div class="section-content">
      <div class="wrapper">
        <h3>General Information</h3>
        <div class="pet-inputs">
          <div class="pet-input pet-name">
            <SigninPetNameInputComponent @onPetNameTyped="updateNameTyped($event)"></SigninPetNameInputComponent>
          </div>
          <div class="pet-input pet-gender">
            <SigninPetGenderInputComponent @onPetGenderTyped="updateGenderTyped($event)"></SigninPetGenderInputComponent>
          </div>
          <div class="pet-input pet-birthday">
            <SigninPetBirthdayInputComponent @onPetbirthdayTyped="updateBirthdayTyped($event)"></SigninPetBirthdayInputComponent>
          </div>
          <div class="pet-input pet-breed">
            <SigninPetBreedInputComponent @onPetBreedTyped="updateBreedTyped($event)"></SigninPetBreedInputComponent>
          </div>
          <div class="pet-input pet-country">
            <SigninPetCountryInputComponent @onPetCountryTyped="updateCountryTyped($event)"></SigninPetCountryInputComponent>
          </div>

          <div class="login-button button" :class="getButtonStateClass()" @click="doContinue();">
            <h2 class="button-title">Continue</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SigninPetNameInputComponent from "../../components/SignUp/signup.pet.name.input.component";
import SigninPetGenderInputComponent from "../../components/SignUp/signup.pet.gender.input.component";
import SigninPetBirthdayInputComponent from "../../components/SignUp/signup.pet.birthday.input.component";
import SigninPetBreedInputComponent from "../../components/SignUp/signup.pet.breed.input.component";
import SigninPetCountryInputComponent from "../../components/SignUp/signup.pet.country.input.component";
import SigninPetCityInputComponent from "../../components/SignUp/signup.pet.city.input.component";

export default {
  name: "SignUpSectionPet",

  components: {
    SigninPetNameInputComponent,
    SigninPetGenderInputComponent,
    SigninPetBirthdayInputComponent,
    SigninPetBreedInputComponent,
    SigninPetCountryInputComponent,
    SigninPetCityInputComponent
  },
  computed: {},

  methods: {
    doContinue() {
      this.$emit("onNextButton");
    },
    getButtonStateClass() {
      const isPetName = this.DATA.PET.name.length > 1;
      const isPetGender = this.DATA.PET.gender.length > 1;
      const isPetBirthday = this.DATA.PET.birthday.length > 1;
      const isPetBreed = this.DATA.PET.breed.length > 1;
      const isPetCountry = this.DATA.PET.country.length > 1;
      const isContinue = isPetName;

      console.log({
        isContinue: isContinue
      });
      if (isContinue) {
        return "default";
      } else {
        return "disabled";
      }
    },

    setPetType(type) {
      this.DATA.PET.type = type;
      this.$store.dispatch("setPetType", this.DATA.PET.type);
    },
    updateNameTyped($event) {
      this.DATA.PET.name = $event;
      this.$store.dispatch("setPetName", this.DATA.PET.name);
    },
    updateGenderTyped($event) {
      this.DATA.PET.gender = $event;
      this.$store.dispatch("setPetGender", this.DATA.PET.gender);
    },
    updateBirthdayTyped($event) {
      this.DATA.PET.birthday = $event;
      this.$store.dispatch("setPetBirthday", this.DATA.PET.birthday);
    },
    updateBreedTyped($event) {
      this.DATA.PET.breed = $event;
      this.$store.dispatch("setPetBreed", this.DATA.PET.breed);
    },
    updateCountryTyped($event) {
      this.DATA.PET.country = $event;
    },
    updateCityTyped($event) {
      this.DATA.PET.city = $event;
    }
  },

  mounted() {
    this.DATA.TRACKER.CODE = this.$store.state.TRACKER.CODE;
  },

  data() {
    return {
      DATA: {
        TRACKER: {
          CODE: "xxxxxxxx"
        },
        PET: {
          type: "CAT",
          name: "",
          gender: "",
          birthday: "",
          breed: "",
          country: "",
          city: ""
        }
      }
    };
  }
};
</script>
<style lang="less"></style>