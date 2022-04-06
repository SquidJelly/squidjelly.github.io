<script setup lang="ts">
import { ref } from "vue";
const year = ref(new Date().getFullYear().toString());
</script>

<template>
  <footer>
    <div>© {{ year }} SquidJelly</div>
  </footer>
</template>
