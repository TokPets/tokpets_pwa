<script>
/* eslint-disable */


export default {
  name: "FormInputEmail",

  components: {},

  methods: {
      doNameTyped(emailString){
          this.$emit('onEmailTyped', emailString);
      }
  },

  mounted() {
  },

  data() {
    return {
    };
  }
};
</script>

 <template>
  <div class="form-input-group">
    <img class="input-icon" alt="" src="./../../../assets/icons/email.png">
    <input type="text" placeholder="Email">
    <div class="dots-inv"></div>
  </div>
</template>

<style lang="less" scoped>
.form-input-group{
  width: 100%;
  margin: 0em auto;
}
</style>
