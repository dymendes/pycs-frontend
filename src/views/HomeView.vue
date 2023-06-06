<template>
  <main class="home">
    <h1>Home</h1>

    <section v-for="image in images" :key="image._id">
      <h1>{{ image.title }}</h1>
    </section>
  </main>
</template>

<script>
  import { ref, onMounted } from "vue"

  import api from "../config/axios.js"

  export default {
    setup() {
      const images = ref([])

      const fetch = () => {
        api.get("/image").then(response => {
          console.log(response.data.images); images.value = response.data.images
        })
      }

      onMounted(fetch)

      return { images }
    }
  }
</script>

<style scoped>
  .home {
    padding: 30px;
  }
</style>