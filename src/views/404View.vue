<script setup lang="ts">
import router from "@/router";
import { onMounted, onUnmounted, ref } from "vue";

const maxCountdown = 5;
let countdown = ref(maxCountdown);

let intervalHandle: number;
onMounted(() => {
  intervalHandle = setInterval(redirectCountdown, 1000);
});
onUnmounted(() => {
  clearInterval(intervalHandle);
});

function redirectCountdown(): void {
  countdown.value--;
  if (countdown.value <= 0) router.replace({ name: "portfolio" });
}
</script>

<template>
  <div class="container max800">
    <h1><strong>404</strong></h1>
    <p>Sorry, you've reached a page that's moved or no longer exists.</p>
    <p>Returning home in {{ countdown }} seconds..</p>
  </div>
</template>
