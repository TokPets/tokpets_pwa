<script>
export default {
  name: "SigninPetGenderInputComponent",

  methods: {},

  props: [],

  watch: {},

  mounted() {},

  methods: {
    updatePetGender() {
      if (this.petGender.length > 0) {
        this.$emit("onPetGenderTyped", this.petGender);
      } else {
        this.clearFocus();
      }
    },
    setFocus() {
      this.UI.isFocus = true;
    },
    clearFocus() {
      this.UI.isFocus = false;
    },
    getInputClass() {
      if (this.UI.isError) {
        return "error";
      } else if (this.UI.isFocus) {
        return "onFocus";
      } else {
        return "default";
      }
    }
  },

  data() {
    return {
      UI: {
        isError: false,
        isFocus: false
      },
      petGender: "male"
    };
  }
};
</script>

<template>
  <div>
    <span class="error-span" v-if="UI.isError">ERROR</span>
    <div class="form-input pet-gender" :class="getInputClass()">
      <select v-model="petGender" @click="setFocus()" @blur="updatePetGender()">
        <option value="male">MALE</option>
        <option value="female">FEMALE</option>
      </select>
      <img class src="../../assets/forms/error_rojo.png" v-if="UI.isError">
    </div>
  </div>
</template>

<style lang="less">
@import "./../../styles/main.less";
.pet-gender {
  img {
    display: block;
    width: 2.5em;
  }

  select {
    border: none;
    width: 100%;
    padding: 0px;
    border: none;
  }
}

span.error-span {
  color: red;
  padding: 0.25em;
}
</style>
