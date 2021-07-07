<script>
export default {
  name: "SigninPetbirthdayInputComponent",

  methods: {},

  props: [],

  watch: {},

  mounted() {},

  methods: {
    updatePetbirthday() {
      if (this.petbirthday) {
        this.$emit("onPetbirthdayTyped", this.petbirthday);
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
      petbirthday: ""
    };
  }
};
</script>

<template>
  <div>
    <span class="error-span" v-if="UI.isError">ERROR</span>
    <div class="form-input pet-birthday" :class="getInputClass()">
      <input type="date" v-model="petbirthday" @click="setFocus()" @change="updatePetbirthday()">

      <img class src="../../assets/forms/error_rojo.png" v-if="UI.isError">
    </div>
  </div>
</template>

<style lang="less">
@import "./../../styles/main.less";
.pet-birthday {
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
