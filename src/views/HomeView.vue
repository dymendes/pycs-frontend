<template>
  <main class="home">
    <section v-for="image in images" :key="image._id">
      <h1>{{ image.title }}</h1>
      <p>{{ image.description }}</p>
      <img :src="image.links.file" :alt="image.description">
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
          images.value = response.data.images
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