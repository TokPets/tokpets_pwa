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
    <div class="dots-inv"></div>
  </div>
</template>
