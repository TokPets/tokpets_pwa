<template>
 <div class="pet-icons">
        <img
          src="@/assets/icons/dog_normal.png"
          alt="Dog Icon"
          class="pet-icon-dog"
          v-if="PET.type=='dog'"
          @click="doTypeSelect('dog')"
        >
        <img
          src="@/assets/icons/dog_inverted.png"
          alt="Dog Icon"
          class="pet-icon-dog"
          v-if="PET.type !='dog'"
          @click="doTypeSelect('dog')"
        >
        
        <img
          src="@/assets/icons/dog_normal.png"
          alt="Cat Icon"
          class="pet-icon-cat"
          v-if="PET.type=='cat'"
          @click="doTypeSelect('cat')"
        >
        <img
          src="@/assets/icons/dog_inverted.png"
          alt="Cat Icon"
          class="pet-icon-cat"
          v-if="PET.type !='cat'"
          @click="doTypeSelect('cat')"
        >
      </div>
</template>

<script>
/* eslint-disable */

/* ------------------------------------- */
/* -- Import Models -------------------- */
/* ------------------------------------- */
    import TokUser from "@/models/user.model.js";
    import TokPet from "@/models/pet.model.js";
/* ------------------------------------- */

    export default {
        name: "FormInputType",

        components: { 
        },

        methods: {
            doTypeSelect(typeString){
                this.PET.type = typeString;
                this.$emit('onTypeSelect',typeString);
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
.pet-icons{
    display: 100%;
    img{
        width: 50%;
        display: inline-block;
    }
}
</style>