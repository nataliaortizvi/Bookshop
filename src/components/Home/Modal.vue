<script>
//js

export default {
  props: {
    title: String,
    showButton: Boolean,
  },

};
</script>
    
    
    
<template>
  <div class="backdrop" @click.self="cerrarModal">

    <aside class="modal-container">
      <h1 class="subtitleText">{{ title }}</h1>
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
  backdrop-filter: blur(2px);
}

.modal-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
  border-radius: 20px;
  background: linear-gradient($gradientPink);
  box-shadow: 2px 2px 5px $blackLight;

  .subtitleText {
    display: block;
    width: 300px;
    line-height: 40px;
    margin-bottom: 30px;
  }
}
</style>