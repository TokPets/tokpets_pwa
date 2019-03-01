<script>
/* eslint-disable */

export default {
  name: "FormInputPassword",

  components: {},

  methods: {
    doPasswordTyped() {
      this.$emit("onPasswordTyped", this.PASSWORD);
      this.removeClass("on-focus");
    },
    addClass(className) {
      this.CLASSES.push(className);
    },
    removeClass(className) {
      this.CLASSES = Object.assign(
        this.CLASSES.filter(kClass => kClass !== className)
      );
    }
  },

  mounted() {},

  data() {
    return {
      PASSWORD: "",
      CLASSES: [],
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
    <div class="input-content" :class="CLASSES" @click="addClass('on-focus')">
      CLASSES : {{ CLASSES }}
      <input
        type="password"
        placeholder="Password"
        @blur="doPasswordTyped()"
        v-model="PASSWORD"
        required
      >
      <img
        src="../../../assets/forms/error_rojo.png"
        style="display: inline; width:2em"
        v-if="ERRORS.length > 0"
      >
    </div>
  </div>
</template>
