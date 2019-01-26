<script>
/* eslint-disable */


export default {
  name: "FormInputName",

  components: {},

  methods: {
      doNameTyped(nameString){
          this.$emit('onNameTyped', nameString);
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
    <input type="text" placeholder="Name">
    <div class="dots"></div>
  </div>
</template>
