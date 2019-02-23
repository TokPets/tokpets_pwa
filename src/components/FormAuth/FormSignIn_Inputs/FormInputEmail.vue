<script>
/* eslint-disable */

export default {
  name: "FormInputEmail",

  components: {},

  methods: {
    doNameTyped() {
      this.$emit("onEmailTyped", this.NAME);
    }
  },

  mounted() {},

  data() {
    return {
      NAME: ""
    };
  }
};
</script>

 <template>
  <div class="form-input-group">
    <input type="text" placeholder="Email" @blur="doNameTyped()" v-model="NAME">
    <div class="dots-inv"></div>
  </div>
</template>
