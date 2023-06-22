<template>
  <section class="images-container">
    <picture v-for="image in images" :key="image._id">
      <RouterLink :to="{
        name: 'picture',
        params: {
          id: image._id
        }
      }">
        <img :src="image.links.file" :alt="image.description">
      </RouterLink>
    </picture>
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
    display: grid;
    grid-template-columns: 1fr 1.2fr 0.85fr 1.35fr 1fr;
    gap: 15px;
  }

  .images-container picture {
    display: grid;
    align-content: center;
  }

  .images-container picture img {
    width: 100%;
    max-height: 450px;
    border-radius: 15px;
    object-fit: cover;
    transition: all 0.3s;
  }

  .images-container picture img:hover {
    filter: grayscale(0.8);
    cursor: pointer;
  }
</style>