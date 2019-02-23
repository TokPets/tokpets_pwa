<script>
/* eslint-disable */

export default {
  name: "FormInputPassword",

  components: {},

  methods: {
    doPasswordTyped() {
      this.$emit("onPasswordTyped", this.PASSWORD);
    }
  },

  mounted() {},

  data() {
    return {
      PASSWORD: ""
    };
  }
};
</script>

 <template>
  <div class="form-input-group">
    <input type="password" placeholder="Password" @blur="doPasswordTyped()" v-model="PASSWORD">
    <div class="dots-inv"></div>
  </div>
</template>
