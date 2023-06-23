<script setup>
  import Header from "./components/Header.vue"
  import Footer from "./components/Footer.vue"
  import { RouterView } from "vue-router"
</script>

<template >
  <Header />

  <main>
    <RouterView />
  </main>

  <Footer />
</template>

<style lang="scss" scoped>
  main {
    margin-top: 100px;
    padding: 30px 100px;
  }
</style>