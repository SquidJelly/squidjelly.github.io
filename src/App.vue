<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <HeaderComponent />
  <div class="wrapper">
    <router-view />
  </div>
  <FooterComponent />
</template>

<style lang="scss">
@use "./assets/scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&display=swap");

#app {
  font-family: "Roboto Slab", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  position: relative;
  min-height: 100vh;
}

.wrapper {
  width: 100%;
  padding-bottom: calc(var(--footer-height) * 2);
}
</style>
