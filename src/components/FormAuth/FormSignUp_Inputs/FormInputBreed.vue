<script>
/* eslint-disable */

import jsonBreeds from "./_breeds_cats.json";

export default {
  name: "FormInputBreed",

  components: {},

  methods: {
      setBreed(breed){
        this.BREED = breed;
        this.$emit('onBreedSelected', breed);
      }
  },

  created() {
    //https://dog.ceo/api/breeds/list/all
    this.BREEDS = jsonBreeds;
    
  },

  computed: {
    filteredItems() {
      return this.BREEDS.filter(item => {
         return item.includes(this.UX.search.toLowerCase())
      })
    }
  },

  data() {
    return {
      
      UX : {
        modal:{
          active: false
        },
        search: ''
      },

      BREEDS: [],

      BREED: '',

    };
  }
};
</script>

 <template>
 <div>

  <div class="form-input-group">
    <img class="input-icon" alt="" src="./../../../assets/icons/email.png">
    <input type="text" placeholder="Breed" @click="UX.modal.active = true" v-model="BREED">
    <div class="dots"></div>
  </div>

  <div class="form-input-modal" v-if="UX.modal.active">

    <div class="modal-header">
      <div class="button back"><img alt="Back Button" src="./../../../assets/icons/back.png" @click="UX.modal.active = false"></div>
      <div class="title circle"> <h1>BREED</h1> </div>
    </div>

    <img class="modal-icon" alt="Dog Logo" src="./../../../assets/icons/dog_simple.png">

    <div class="modal-search">
      <img class="search-icon" alt=" " src="../../../assets/icons/search.png">
      <input type="text" placeholder="Search" v-model="UX.search">
    </div>

    <ul  class="modal-list">
      <li class="item" v-for="(breed, index) in BREEDS" :key="index" >
          <div class="wrapper" v-if="breed.toLowerCase().includes(UX.search.toLowerCase())" >
            <h4 class="title"> {{ breed }} </h4>
            <input class="checkbox" type="checkbox" @click="setBreed(breed)">
           </div>
           <div class="dots" v-if="breed.toLowerCase().includes(UX.search.toLowerCase())"></div>
      </li>
    </ul>
    
  </div>

</div>
</template>
