<script>
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products";
import Modal from "../components/Home/Modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      title: "",
      author: "",
      about: "",
      category: [],
      price: "",
      year: "",
      place: "",
      image: "",
      notLike: true,
      stars: "⭐️⭐️⭐️",

      showModal: false,
    };
  },

  computed: {
    ...mapStores(useProductsStore),
    allProducts() {
      return this.productsStore.getProducts;
    },
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

    createNewProduct() {
      const newProduct = {
        title: this.title,
        author: this.author,
        about: this.about,
        category: this.category,
        price: this.price,
        year: this.year,
        place: this.place,
        image: this.image,
        notLike: true,
        stars: "⭐️⭐️⭐️",
      };

      console.log(newProduct);
      this.productsStore.newProduct(newProduct);
      this.title = "";
      this.author = "";
      this.about = "";
      this.category = [];
      this.price = "";
      this.year = "";
      this.place = "";
      this.image = "";
    },

    openModal() {
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
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
    <Modal :showButton="true" title="Are you sure you want to add this book to Bookie?" v-if="showModal" class="modal">
      <RouterLink to="/books">
        <button class="button --white" @click="()=> {
          closeModal();
          createNewProduct();
        }">Yes</button>
      </RouterLink>
      <button class="button --white" @click="closeModal">No</button>
    </Modal>
  </section>


</template>



<style lang="scss" scoped>
@import "src/assets/main.scss";


.modal {
  .button {
    margin: 5px;
  }
}

.formContainer {
  width: 100%;
  height: 100%;
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
    width: 400px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

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
        width: 5px;
        height: 10px;
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
  justify-content: space-between;
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
</style>