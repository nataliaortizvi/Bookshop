<script>
import Modal from "../../components/Home/Modal.vue";
import LogIn from "../../components/Home/LogIn.vue";

export default {
  components: {
    Modal,
    LogIn,
  },

  data() {
    return {
      rateOne: "0",
      showModal: false,
    };
  },

  props: {
    rate: {},
    userIn: Boolean,
  },

  methods: {
    rating() {
      if (this.userIn == false) {
        this.showModal = true;
        this.rateOne = 0;
        console.log("noo hay alguiennnn");
      } else {
        this.$emit("rating", this.rateOne);
        console.log("si hay alguiennnn");
      }
    },
    
    closeModal() {
      this.showModal = false;
    },
  },

  computed: {
    rateHere() {
      return (this.rateOne = this.rate);
    },
  },

  watch: {
    rateHere(newChanges, oldChanges) {
      if (newChanges != 0) {
        console.log("si hay rating", newChanges);
      } else {
        console.log("no hay rating", newChanges);
      }
    },
  },
};
</script>


<template>
  <Modal :showButton="true" v-if="showModal" @close="closeModal" class="modal">
    <LogIn></LogIn>
  </Modal>

  <div class="rate" @change="() => rating()">
    <input
      type="radio"
      id="star5"
      name="rate"
      value="5"
      v-model="this.rateOne"
    />
    <label for="star5"></label>
    <input
      type="radio"
      id="star4"
      name="rate"
      value="4"
      v-model="this.rateOne"
    />
    <label for="star4"></label>
    <input
      type="radio"
      id="star3"
      name="rate"
      value="3"
      v-model="this.rateOne"
    />
    <label for="star3"></label>
    <input
      type="radio"
      id="star2"
      name="rate"
      value="2"
      v-model="this.rateOne"
    />
    <label for="star2"></label>
    <input
      type="radio"
      id="star1"
      name="rate"
      value="1"
      v-model="this.rateOne"
    />
    <label for="star1"></label>
  </div>
</template>


<style lang="scss" scoped>
@import "src/assets/main.scss";

.modal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}

.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}
.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  font-size: 20px;
  color: #ccc;
}
.rate:not(:checked) > label:before {
  content: "★";
}
.rate > input:checked ~ label {
  color: #eecc5c;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #eecc5c;
}
</style>