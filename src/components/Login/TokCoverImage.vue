<script>
/* eslint-disable */

export default {
  name: "TokCoverImage",

  methods: {},

  mounted() {

  },

  data() {
    return {
    };
  }
};
</script>

<template>
  <div class="cover-login"> 

    <div class="cover content">
        <img class="logo" 
             alt="TokPets Logo" 
             src="@/assets/login/tok_blanco.png">
    </div>

    <div class="cover background">

    </div>

  </div>
</template>

<style lang="less">

  @import './../../styles/main.less';

  .cover{
      display: block;
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0px;
      left: 0px;
      
      &.content{
        z-index: 10;
        background-color: rgba(0,0,0,0); 
        mix-blend-mode: exclusion;
      }

      &.background{
        z-index: 0;
        top: 50vh;
        background-color: @color-black;
      }
  }

  .logo{
      width: 80vw;
      height: 80vh;
      object-fit: contain;
      object-position: center;
      display: block;
      margin: 0 auto;
      
    //-webkit-filter: brightness(200%) hue-rotate(90deg);; /* Safari */
  }

</style>
