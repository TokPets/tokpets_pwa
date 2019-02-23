<script>
/* eslint-disable */
import TokAuthHelper from "./../../../scripts/auth/auth.helper.js";
export default {
  name: "FormInputEmail",

  components: {},

  methods: {
    checkEmailHasAtSymbol(email) {
      return new Promise( async (resolve) => {
        resolve(email.includes("@"))
      });
    },
    checkEmailHasDotSymbol(email) {
       return new Promise( async (resolve) => {
        resolve(email.includes(".") );
      });
      
    },
    checkEmailIsRegistered(email) {
      return new Promise( async (resolve) => {
        const isEmailRegistered = await this.AUTH.doCheckIsEmailIsRegistered(email);
        resolve(isEmailRegistered.isRegistered);
      });
    },

    async doNameTyped() {
      const inEmail = this.EMAIL;
      const isCheckEmailHasAtSymbol = await this.checkEmailHasAtSymbol(inEmail);
      const isCheckEmailHasDotSymbol = await this.checkEmailHasDotSymbol(inEmail);
      const isCheckEmailIsRegistered = await this.checkEmailIsRegistered(inEmail);
      this.ERRORS = [];
      this.CLASSES = [];

      if (!isCheckEmailHasAtSymbol) {
        this.ERRORS.push({
          id: 0,
          description: "No @ Symbol in Email",
          message: "Plase type a valid email within a @ symbol"
        });
      }
      if (!isCheckEmailHasDotSymbol) {
        this.ERRORS.push({
          id: 1,
          description: "No . Symbol in Email",
          message:
            "Plase type a valid email within a valid domain i.e) .com, .co, .es"
        });
      }
      if (!isCheckEmailIsRegistered) {
        this.ERRORS.push({
          id: 2,
          description: `The email  ${this.EMAIL} isn't registered yet`,
          message: `The email is not registered`
        });
      }

      if (this.ERRORS.length == 0) {
        this.$emit("onEmailTyped", this.NAME);
      }else{
        this.CLASSES.push('error');
      }
    }
  },

  created() {},

  data() {
    return {
      AUTH: new TokAuthHelper(),
      EMAIL: "",
      CLASSES: [],
      ERRORS: []
    };
  }
};
</script>

 <template>
  <div class="form-input-group">
    <div v-if="ERRORS.length > 0">
      <div class="input-message" v-for="error in ERRORS" v-bind:key="error.id">
        <span class="error">{{error.message}}</span><br>
      </div>
    </div>

    <div class="input-content" :class="CLASSES" @focus="addClass('on-focus')" @blur="removeClasS('on-focus')">
      <input type="text" placeholder="Email" @blur="doNameTyped()" v-model="EMAIL">
      <div class="dots-inv"></div>
    </div>
  </div>
</template>
