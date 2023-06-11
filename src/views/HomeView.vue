<template>
  <section class="images-container">
    <img :src="image.links.file" :alt="image.description" v-for="image in images" :key="image._id">
  </section>
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
  .images-container {
    column-count: 4;
    column-gap: 10px;
  }

  .images-container img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
    margin-bottom: 10px;
  }
</style>