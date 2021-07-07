<script>
export default {
  name: "SigninPetNameInputComponent",

  methods: {},

  props: [],

  watch: {},

  mounted() {},

  methods: {
    updatePetName() {
      if (this.petName.length > 0) {
        this.$emit("onPetNameTyped", this.petName);
        this.UI.isError = false;
      } else {
        this.clearFocus();
        this.UI.isError = true;
      }
    },
    setFocus() {
      this.UI.isFocus = true;
    },
    clearFocus() {
      this.UI.isFocus = false;

      console.error(this.UI.isFocus);
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
      petName: ""
    };
  }
};
</script>

<template>
  <div>
    <span class="error-span" v-if="UI.isError">ERROR</span>
    <div class="form-input pet-name" :class="getInputClass()">
      <input
        type="text"
        placeholder="PET NAME"
        v-model="petName"
        @click="setFocus()"
        @blur="updatePetName()"
      >
      <img class src="../../assets/forms/error_rojo.png" v-if="UI.isError">
    </div>
  </div>
</template>

<style lang="less">
@import "./../../styles/main.less";
</style>
