<script>
/* eslint-disable */

export default {
  name: "TokLoadingBar",

  methods: {},

  mounted() {
    this.INTERVAL = setInterval(() => {
      const dt = 5 * Math.random();
      this.LEVEL = this.LEVEL + dt;
      if (this.LEVEL > 99) {
        clearInterval(this.INTERVAL);
        this.$emit("onLoaded");
      }
    }, 50);
  },

  data() {
    return {
      LEVEL: 0,
      INTERVAL: {}
    };
  }
};
</script>

<template>
  <div class="progress-bar" v-if="LEVEL > -99">
    <div class="background">
      <div class="level" :style="{ width: LEVEL + '%' }"></div>
    </div>
  </div>
</template>

<style lang="less">
@import "./../../styles/main.less";

.progress-bar {
  display: block;
  width: 100%;
  position: relative;
  top: -1.5em;

  .background {
    display: block;
    margin: 0 auto;
    width: 50vw;
    height: 5px;
    background-color: gray;
    border-radius: 10px;
  }

  .level {
    display: block;
    width: 0%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
  }
}
</style>
