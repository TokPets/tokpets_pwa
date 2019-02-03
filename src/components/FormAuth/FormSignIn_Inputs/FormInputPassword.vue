<script>
/* eslint-disable */


export default {
  name: "FormInputPassword",

  components: {},

  methods: {
      doPasswordTyped(){
          this.$emit('onPasswordTyped', this.PASSWORD);
      }
  },

  mounted() {
  },

  data() {
    return {
      PASSWORD : ""
    };
  }
};
</script>

 <template>
  <div class="form-input-group">
    <img class="input-icon" alt="" src="./../../../assets/icons/email.png">
    <input type="password" placeholder="Password" @blur="doPasswordTyped()" v-model="PASSWORD">
    <input type="text" placeholder="Password" @blur="doPasswordTyped()" v-model="PASSWORD">
    <input type="password" placeholder="Mi Password">
    <div class="dots-inv"></div>

    <form action="myforms.cgi"> 
      <input type="password" name="password" id="password" maxlength="6">
       <label for="password"> Type a fake password here</label> 
       <br>
       <input type="submit" value="Submit"> </form>
  </div>
</template>
