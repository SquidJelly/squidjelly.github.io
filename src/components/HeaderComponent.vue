<script setup lang="ts">
import CompassIcon from "./icons/CompassIcon.vue";
import CodeIcon from "./icons/CodeIcon.vue";
import PaletteIcon from "./icons/PaletteIcon.vue";

async function toggleClass(el: HTMLElement, className: string) {
  if (el.classList.contains(className)) el.classList.remove(className);
  else el.classList.add(className);
}

async function toggle() {
  const bar: HTMLElement | null = document.querySelector("#mobileBar");
  const icon: HTMLElement | null = document.querySelector("#hamburger");
  if (bar != null && icon != null) {
    toggleClass(bar, "show");
    toggleClass(icon, "open");
  }
}
</script>
<template>
  <!-- Desktop Nav Header-->
  <header class="desktop-only">
    <img src="../assets/Squid_Logo.png" class="logo" alt="SquidJelly" />
    <nav aria-label="primary">
      <router-link class="nav-link" :to="{ name: 'portfolio' }"
        >Portfolio</router-link
      >
      <router-link class="nav-link" :to="{ name: 'tech' }">Tech</router-link>
      <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
      <router-link class="nav-link" :to="{ name: 'contact' }"
        >Contact</router-link
      >
    </nav>
    <ul>
      <li title="Design"><CompassIcon /></li>
      <li title="Programming"><CodeIcon /></li>
      <li title="Art and Animation"><PaletteIcon /></li>
    </ul>
  </header>
  <!-- Mobile Nav Header-->
  <header class="mobile-only">
    <div class="container-mobile">
      <img
        src="../assets/Squid_Logo.png"
        class="logo-mobile"
        alt="Squid Jelly"
      />
      <button @click="toggle">
        <div id="hamburger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div class="navbar-collapse" id="mobileBar">
        <nav aria-label="mobile">
          <router-link class="nav-link" :to="{ name: 'portfolio' }"
            >Portfolio</router-link
          >
          <router-link class="nav-link" :to="{ name: 'tech' }"
            >Tech</router-link
          >
          <router-link class="nav-link" :to="{ name: 'about' }"
            >About</router-link
          >
          <router-link class="nav-link" :to="{ name: 'contact' }"
            >Contact</router-link
          >
        </nav>
      </div>
    </div>
  </header>
</template>
