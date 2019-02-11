<script>
/* eslint-disable */
export default {
  name: "TokCoverImage",

  methods: {},

  mounted() {

    // Delay for Background **Only for Dev Purposes
    setTimeout( () => {
      this.isBgActive = false
    }, 2000);

  },

  data() {
    return {
      isBgActive : true
    };
  }
};
</script>

<template>
  <div class="cover-login"> 

    <div class="cover content" :class="{ off: !isBgActive }">
             
      <img class="logo" 
             alt="TokPets Logo" 
             src="@/assets/login/tok_negro.png" :class="{ off: isBgActive }"> 
          
    </div>

     <div class="cover background-top" :class="{ off: !isBgActive }">
             
      <img class="logo" 
             alt="TokPets Logo" 
             src="@/assets/login/tok_blanco.png" :class="{ off: !isBgActive }"> 
          
    </div>

    <div class="cover background-bottom" :class="{ off: !isBgActive }">

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
      
      &.background-top{
        z-index: 10;
        background-color: rgba(0,0,0,0); 

        mix-blend-mode: exclusion;
        -webkit-mix-blend-mode: exclusion;

        transition: all 1s linear;

        &.off{
      
        }

      }

      &.background-bottom{
        
        z-index: 0;

        background-color: rgba(0,0,0,0);
        background-image: url('../../assets/login/intro-bottom-bg.png');
        background-size: cover;
        background-position-y: top;
        background-position-x: center;
        background-repeat: no-repeat;
        height: 120vh;

        top: 0vh;

        -webkit-transition: all 1000ms ease-in;
        -moz-transition: all 1000ms ease-in;
        -ms-transition: all 1000ms ease-in;
        -o-transition: all 1000ms ease-in;
        transition: all 1000ms ease-in;

        &.off{
          top: -150vh;
        }
      }

      &.content{
        z-index: 100;
        background-color: rgba(0,0,0,0);
        opacity: 0;

        transition:  all 500ms linear;
        transition-delay: 500ms;

        &.off{
          opacity: 1;
        }
      }


  }





  .logo{
      width: 80vw;
      height: 80vh;
      object-fit: contain;
      object-position: center;
      display: block;
      margin: 0 auto;
      opacity: 100%;
        z-index: 100;
      position: absolute;
      top: 10vh;
      left: 10vw;
      &.off{
     
      }

  }

</style>
