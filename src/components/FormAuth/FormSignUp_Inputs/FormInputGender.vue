<script>
/* eslint-disable */
import dogsBreeds from "./_breeds_dogs.json";
import catsBreeds from "./_breeds_cats.json";

export default {
  name: "FormInputGender",

  components: {},

  props: ['petType'],

  watch: { 
      petType: function (newPetType, oldVal) {

        // Set UX.modal PetType
        this.UX.modal.petType = newPetType;

        // Load Breed's List
        const BreedsSelectors = {
          'dog' : dogsBreeds,
          'cat' : catsBreeds
        }
        const _BREEDS = BreedsSelectors[newPetType];
        _BREEDS.map( breed => {
          return {
              selected : false,
              name : breed
          }   
        });

       
      }
  },

  methods: {

      setBreed(breed){
        this.BREED = breed;
        this.BREEDS.forEach( breed => breed.selected = false);
        this.BREEDS.map( breed => {
          if(breed.name == this.BREED){
            breed.selected = true;
          }else{
            breed.selected = false;
          }
        })
        this.$emit('onBreedSelected', breed);
      }
  },

  created() {

  },


  computed: {
    filteredItems() {
      return this.BREEDS.filter(item => item.includes(this.UX.search.toLowerCase()))
    }
  },

  data() {
    return {
      
      UX : {
        modal:{
          active: false,
          petType : 'dog'
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

    <h1>{{ UX.modal.petType }}</h1>
    <img class="modal-icon" alt="Dog Logo" src="./../../../assets/icons/dog_simple.png">

    <div class="modal-search">
      <img class="search-icon" alt=" " src="../../../assets/icons/search.png">
      <input type="text" placeholder="Search" v-model="UX.search">
    </div>

    <ul  class="modal-list">
      <li class="item" v-for="(breed, index) in BREEDS" :key="index" >


          <div class="wrapper" v-if="breed.name.toLowerCase().includes(UX.search.toLowerCase())" @click="setBreed(breed.name)">
            
            <h4 class="title" v-bind:class="{ active: breed.selected }"> {{ breed.name }} </h4>

            <div class="round">
              <input type="checkbox" :id="breed.name" v-model="breed.selected"/>
              <label :for="breed.name"></label>
            </div>
         
          </div>

          <div class="dots" v-if="breed.name.toLowerCase().includes(UX.search.toLowerCase())"></div>
      
      </li>
    </ul>
    
  </div>

</div>
</template>
