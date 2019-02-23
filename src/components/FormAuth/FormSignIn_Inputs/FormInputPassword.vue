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
      PASSWORD: "",
      ERRORS: []
    };
  }
};
</script>

 <template>
  <div class="form-input-group">
    <div class="input-message" v-if="ERRORS.length > 0">
      <span class="error">ERROR</span>
    </div>
    <div class="input-content">
      <input
        type="password"
        placeholder="Password"
        @blur="doPasswordTyped()"
        v-model="PASSWORD"
        required
      >
      <div class="dots-inv"></div>
    </div>
  </div>
</template>
