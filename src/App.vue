<template>
  <div id="app">
    
    <div class="app-loading" v-if="LOADING">
      <img src="./assets/loading_spinner_gif.gif">
    </div>

    <div class="app-content">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
/* eslint-disable */
import firebase from "firebase";

export default {
  name: "App",
  
  methods:{
    
  },

  mounted(){
    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
          setTimeout( () => { this.LOADING = false; }, 100);
          this.$router.push('main');
      }else{
          setTimeout( () => { this.LOADING = false; }, 100);
      }
    });
  },


  data(){
    return{
      LOADING : true
    }
  }
};
</script>

<style lang="less">

@import './styles/main.less';

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


div.app-loading{

    width: 100vw;
    min-height: 100vh;

    z-index: 100;

    position: fixed;

    top: 0px;
    left: 0px;

    background-color: #DDCEC0;

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: wrap-reverse;
    -ms-flex-wrap: wrap-reverse;
    flex-wrap: wrap-reverse;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.v--modal {
    background-color: white;
    text-align: left;
    border-radius: 25px  !important;
}
</style>
