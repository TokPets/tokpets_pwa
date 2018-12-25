<template>
  <div class="main">
    <h1>This is an main page</h1>
    <button @click="doLogout">LOG OUT</button>
  </div>
</template>


<script>
/* eslint-disable */

/* ------------------------------------- */
/* -- Import Vendors & Libs ------------ */
/* ------------------------------------- */
import firebase from "firebase";
/* ------------------------------------- */
export default {
  name: "Main",
  
  components: {},
  
  methods: {
    doLogout(){
      firebase.auth()
      .signOut()
      .then( response => {
        this.$router.push('/')
      })
      .catch( error => {
        console.error(error)
      });
    }
  }
}
</script>

<style lang="less" scoped>
