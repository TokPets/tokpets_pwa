<script>
/* eslint-disable */

import jsonCountries from "../../models/countries.json";

export default {
  name: "SigninPetCountryInputComponent",

  components: {},

  methods: {
    setcountry(country) {
      this.country = country;
      this.$emit("onCountrySelected", country);
      //this.closeModal();
    },
    goToHome() {
      this.$router.push("/");
    },
    closeModal() {
      this.UX.modal.active = false;
    }
  },

  created() {
    this.PET = this.$store.state.PET;
    this.countries = jsonCountries.map(jsonCountry => jsonCountry.country);
    console.warn(this.countries);
  },

  computed: {
    filteredItems() {
      return this.countries.filter(item => {
        return item.includes(this.UX.search.toLowerCase());
      });
    }
  },

  data() {
    return {
      UX: {
        modal: {
          active: false
        },
        search: ""
      },

      PET: {},

      countryS: [],

      country: ""
    };
  }
};
</script>





 <template>
  <div>
    <div class="form-input pet-country">
      <input type="text" placeholder="Country" @click="UX.modal.active = true" v-model="country">
      <img src="../../assets/login/Registroflecha1.png">
    </div>

    <div class="form-input-modal" v-if="UX.modal.active">
      <div class="form-input-modal-header">
        <img
          class="back-btn"
          alt="back Button"
          src="./../../assets/login/Registroflecha2.png"
          @click="closeModal()"
        >
        <img
          class="home-btn"
          alt="home Button"
          src="./../../assets/login/Registrotok.png"
          @click="goToHome()"
        >
      </div>

      <div class="form-input-modal-title">
        <h1 v-if="PET.type === 'DOG'">
          <strong>Dog</strong> Country
        </h1>
        <h1 v-if="PET.type === 'CAT'">
          <strong>Cat</strong> Country
        </h1>

        <img
          v-if="PET.type === 'CAT'"
          class="btn"
          alt="home Button"
          src="./../../assets/login/Registrogato2.png"
        >
        <img
          v-if="PET.type === 'DOG'"
          class="btn"
          alt="home Button"
          src="./../../assets/login/Registroperro1.png"
        >
      </div>

      <div class="form-input-modal-search">
        <input type="text" placeholder="Search ..." v-model="UX.search">
      </div>

      <ul class="form-input-modal-list">
        <li class="item" v-for="(country, index) in countries" :key="index">
          <div
            class="wrapper"
            v-if="country && country.toLowerCase().includes(UX.search.toLowerCase())"
          >
            <h4 class="title">{{ country }}</h4>
            <div class="round">
              <input
                :id="`country-Input-Item-${index}`"
                type="checkbox"
                @click="setcountry(country)"
              >
              <label :for="`country-Input-Item-${index}`"></label>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>








<style lang="less">
@import (reference) "./../../styles/main.less";
.form-input-modal {
  display: block;

  width: 100vw;
  height: 100vh;

  overflow-y: scroll;
  overflow-x: hidden;

  background-color: @color-cream;

  position: fixed;
  top: 0px;
  left: 0px;

  z-index: 100;
}

.form-input-modal-header {
  display: block;
  width: 100vw;
  height: 12vh;
  background-color: rgba(0, 0, 0, 0);

  padding: 0em 1.5em;
  box-sizing: border-box;

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  img {
    width: 3em;
    padding: 0.5em;
    &.back-btn {
      padding-left: 0.5em;
    }
    &.home-btn {
      padding-right: 0.5em;
    }
  }
}

.form-input-modal-title {
  .btn {
    display: block;
    width: 30vw;
    margin: 0 auto;
  }
}

.form-input-modal-search {
  display: block;
  background-color: white;
  width: ~"calc( 100% - 3em)";
  margin: 0 auto;
  border: 1px solid white;
  border-radius: 0.5em;
  padding: 1em;
  margin-bottom: 2em;
  box-sizing: border-box;
  input {
    width: 100%;
    padding: 1em;
    font-size: 13px;
    color: @color-black;
    box-sizing: border-box;
  }
}

.form-input-modal-list {
  display: block;
  width: 100vw;
  height: auto;

  padding: 0.5em 1.5em;
  box-sizing: border-box;

  background-color: white;

  .item {
    width: 100%;
    padding-bottom: 0em;
    .wrapper {
      display: block;
      width: 100%;
      height: auto;

      padding: 0em;
      padding-bottom: 1em;
      box-sizing: border-box;

      border-bottom: 1px solid @color-black;

      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-align-content: stretch;
      -ms-flex-line-pack: stretch;
      align-content: stretch;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      h4.title {
        display: inline-block;
        padding-top: 1em;
        padding-bottom: 1em;
      }
    }
  }
}
</style>





