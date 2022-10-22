<script>
//js

export default {
  props: {
    showButton: Boolean,
  },

  methods: {
    closeModal() {
      this.$emit("close");
    },
  },

};
</script>
    
    
    
<template>
  <div class="backdrop" @click.self="cerrarModal">

    <aside class="modal-container">
      <button class="button --white closebtn" @click="closeModal" v-if="showButton">✕</button>
      <slot></slot>
    </aside>

  </div>
</template>
    
    
    
<style lang="scss" scoped>
@import "src/assets/main.scss";

.backdrop {
  display: flex;
  align-items: center;
  align-content: center;
  position: fixed;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: white;
  background-color: rgba(245, 243, 237, 0.6);
  backdrop-filter: blur(4px);
  z-index: 99;
}

.modal-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  position: relative;

  .closebtn {
    width: 50px;
    height: 50px;
    right: -15px;
    top: -10px;
    border-radius: 50px;
    position: absolute;
  }
}
</style>