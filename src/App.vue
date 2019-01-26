<script>
/* eslint-disable */

import TokAuthHelper from "./scripts/auth/auth.helper.js";

export default {
  name: "App",

  methods: {},

  mounted() {

    const authHelper = new TokAuthHelper();
    authHelper.doCheckIsUserIsLogged().then( isLogged => {
      if(isLogged){
        this.$router.push("main");
      } else  {
        setTimeout(() => {
          this.LOADING = false;
        }, 500);
      }
    });

  },

  data() {
    return {
      LOADING: true
    };
  }
};
</script>






<template>
  <div id="app">


    <div class="app-loading" v-if="LOADING">
      <img src="./assets/loading_spinner_gif.gif">
    </div>

    <div class="app-content" v-if="!LOADING">
      <router-view/>
    </div>


  </div>
</template>








<style lang="less">

  @import './styles/main.less';

#app,.app-loading,.app-content{
  
  display:block;
  position: absolute;

  top: 0px;
  left: 0px;

  width: 100vw;
  height: 100vh;

}

.app-loading{

  .flex-display(flex);
  .flex-direction(column);
  .align-items(center);
  .flex-wrap(wrap);
  .justify-content(center);
  .align-content(center);
  .align-items(center);

  img{
    display: block;
  }
}

</style>
