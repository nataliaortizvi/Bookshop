<script>
import { mapStores } from "pinia";
import Modal from "../components/Home/Modal.vue";

import { useDatabaseStore } from "../stores/database";


export default {
  components: {
    Modal,
  },
  
  data() {
    return {
      title: "",
      author: "",
      about: "",
      price: "",
      year: "",
      place: "",
      category: [],

      showModal: false,
    };
  },

  computed: {
    ...mapStores(useDatabaseStore),
  },

  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;

      const reader = new FileReader();

      reader.addEventListener("load", () => {
        this.image = reader.result;
      });

      reader.readAsDataURL(files[0]);
    },

    openModal() {
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
    },

    addProduct() {
      const newProduct = {
        title: this.title,
        author: this.author,
        about: this.about,
        category: this.category,
        price: this.price,
        year: this.year,
        place: this.place,
        notLike: true,
        stars: 0,
        votes: [],
      };
      this.databaseStore.addData(newProduct);
    },
  },
};
</script>

    
<template>
  <section class="formContainer">
    <h1 class="titleText --pink">Add a new product</h1>
    <form>
      <label class="normalText --small --darkBlack">
        Title:
        <input
          class="normalText --small --lightBlack"
          placeholder="Write the book´s title..."
          v-model="title"
          type="text"
          required
        />
      </label>

      <label class="normalText --small --darkBlack">
        Author:
        <input
          class="normalText --small --lightBlack"
          placeholder="Write the author´s name..."
          v-model="author"
          type="text"
          required
        />
      </label>

      <label class="normalText --small --darkBlack">
        About:
        <input
          class="normalText --small --lightBlack"
          placeholder="Write about the book..."
          v-model="about"
          type="text"
          required
        />
      </label>

      <label class="normalText --small --darkBlack">Category:</label>

      <div class="checkContainer">
        <input
          class="checkbox"
          type="checkbox"
          value="romance"
          v-model="category"
          id="Romance"
        />
        <label class="normalText --small --lightBlack" for="Romance"
          >Romance</label
        >

        <input
          class="checkbox"
          type="checkbox"
          value="kids"
          v-model="category"
          id="Kids"
        />
        <label class="normalText --small --lightBlack" for="Kids">Kids</label>

        <input
          class="checkbox"
          type="checkbox"
          value="fiction"
          v-model="category"
          id="Fiction"
        />
        <label class="normalText --small --lightBlack" for="Fiction"
          >Fiction</label
        >

        <input
          class="checkbox"
          type="checkbox"
          value="biographies"
          v-model="category"
          id="Biographies"
        />
        <label class="normalText --small --lightBlack" for="Biographies"
          >Biographies</label
        >

        <input
          class="checkbox"
          type="checkbox"
          value="horror"
          v-model="category"
          id="Horror"
        />
        <label class="normalText --small --lightBlack" for="Horror"
          >Horror</label
        >

        <input
          class="checkbox"
          type="checkbox"
          value="history"
          v-model="category"
          id="History"
        />
        <label class="normalText --small --lightBlack" for="History"
          >History</label
        >

        <input
          class="checkbox"
          type="checkbox"
          value="mystery"
          v-model="category"
          id="Mystery"
        />
        <label class="normalText --small --lightBlack" for="Mystery"
          >Mystery</label
        >

        <input
          class="checkbox"
          type="checkbox"
          value="food"
          v-model="category"
          id="Food"
        />
        <label class="normalText --small --lightBlack" for="Food">Food</label>

        <input
          class="checkbox"
          type="checkbox"
          value="educational"
          v-model="category"
          id="Educational"
        />
        <label class="normalText --small --lightBlack" for="Educational"
          >Educational</label
        >
      </div>

      <label class="normalText --small --darkBlack">
        Price:
        <input
          class="normalText --small --lightBlack"
          placeholder="Book price..."
          v-model="price"
          type="number"
          required
        />
      </label>

      <label class="normalText --small --darkBlack">
        Year:
        <input
          class="normalText --small --lightBlack"
          placeholder="Book release year..."
          v-model="year"
          type="number"
          min="1800"
          max="2023"
          required
        />
      </label>

      <label class="normalText --small --darkBlack">
        Place:
        <input
          class="normalText --small --lightBlack"
          placeholder="The continent the book comes from..."
          v-model="place"
          type="text"
          required
        />
      </label>

      <label class="normalText --small --darkBlack">
        Image:
        <input
          class="normalText --small --lightBlack inputImage"
          placeholder="Upload the book image"
          id="myFile"
          type="file"
          accept=".jpg, .jpeg, .png"
          @change="onFileChange"
          required
        />
      </label>
    </form>

    <button
      class="button --pink"
      @click="
        () => {
          openModal();
        }
      "
    >
      Add book!
    </button>
    <Modal :showButton="false" v-if="showModal">

      <section class="modalSection">
        <h1 class="subtitleText">Are you sure you want to add this book to Bookie?</h1>
        <RouterLink to="/books">
          <button
            class="button --white"
            @click="
              () => {
                closeModal();
                addProduct();
                //createNewProduct();
              }
            "
          >
            Yes
          </button>
        </RouterLink>
        <button class="button --white" @click="closeModal">No</button>
      </section>

    </Modal>
  </section>
</template>



<style lang="scss" scoped>
@import "src/assets/main.scss";

.modalSection {
  background: linear-gradient($gradientPink);
  box-shadow: 2px 2px 5px $blackLight;
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .subtitleText {
    display: block;
    width: 300px;
    line-height: 40px;
    margin-bottom: 20px;
  }
  .button {
    margin-top: 15px;
  }
}

.formContainer {
  width: 100%;
  height: 100vh;
  padding: 100px 50px 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  gap: 30px;
  position: relative;
  background: linear-gradient($gradientBlue);

  form {
    width: 500px;
    box-shadow: 0px 0px 15px 2px rgba($blackDark, 0.3);
    background-color: $background;
    border-radius: 20px;
    padding: 20px;
    text-align: left;
  }

  .checkContainer {
    width: 450px;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    column-gap: 40px;

    .checkbox {
      opacity: 0; // hide it
      display: none;

      & + label {
        position: relative;
        cursor: pointer;
        padding: 0;
      }

      // Box.
      & + label:before {
        content: "";
        margin-top: 0px;
        margin-right: 10px;
        width: 15px;
        height: 15px;
        border-radius: 5px;
        border: 2px solid $pink;
      }

      // Box checked
      &:checked + label:before {
        background: $pink;
        border-radius: 5px;
      }

      // Checkmark. Could be replaced with an image
      &:checked + label:after {
        content: "X";
        top: 0;
        position: absolute;
        left: 4.5px;
        color: $background;
      }
    }
  }
}

label {
  display: inline-block;
  margin: 10px 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

input {
  display: block;
  padding: 0px 10px;
  background-color: $background;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 20px;
  margin-left: 20px;
  height: 30px;
  width: 100%;

  &::placeholder {
    color: rgb(211, 211, 211);
  }
}

.inputImage {
  position: relative;
  border-style: none;
  cursor: pointer;
  text-align: left;
}

.inputImage:before {
  content: "Upload a File...";
  background: $background;
  border-radius: 20px;
  border: 1px solid $pink;
  color: rgb(231, 125, 123);
  padding: 0px 0px 0px 10px;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.inputImage:invalid:before {
  content: "Please Upload a File...";
}
.inputImage:valid:before {
  content: "File Uploaded";
  background: $pink;
  color: $background;
}

@media screen and (max-width: 600px) {
  .formContainer {
    padding: 30px 20px;
    text-align: center;

    form {
      width: 320px;
    }

    .checkContainer {
      display: flex;
      width: 280px;
      flex-wrap: wrap;
      column-gap: 10px;
      row-gap: 5px;
      justify-content: flex-start;
      margin-left: 15px;

      .checkbox {
        & + label {
          width: 120px;
          margin: 0px;
        }
      }
    }
  }
}
</style>