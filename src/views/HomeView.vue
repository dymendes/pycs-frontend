<template>
  <section class="images-container">
    <div class="column">
      <picture v-for="image in images.slice( 0,  (((images.length / columns) * 1)) )" :key="image._id">
        <RouterLink :to="{ name: 'picture', params: { id: image._id } }">
          <img :src="image.links.file" :alt="image.description">
        </RouterLink>
      </picture>
    </div>

    <div class="column">
      <picture v-for="image in images.slice( (images.length / columns) * 1,  (((images.length / columns) * 2)) )" :key="image._id">
        <RouterLink :to="{ name: 'picture', params: { id: image._id } }">
          <img :src="image.links.file" :alt="image.description">
        </RouterLink>
      </picture>
    </div>

    <div class="column">
      <picture v-for="image in images.slice( (images.length / columns) * 2,  (((images.length / columns) * 3)) )" :key="image._id">
        <RouterLink :to="{ name: 'picture', params: { id: image._id } }">
          <img :src="image.links.file" :alt="image.description">
        </RouterLink>
      </picture>
    </div>

    <div class="column">
      <picture v-for="image in images.slice( (images.length / columns) * 3,  (((images.length / columns) * 4)) )" :key="image._id">
        <RouterLink :to="{ name: 'picture', params: { id: image._id } }">
          <img :src="image.links.file" :alt="image.description">
        </RouterLink>
      </picture>
    </div>

    <div class="column">
      <picture v-for="image in images.slice( (images.length / columns) * 4,  (((images.length / columns) * 5)) )" :key="image._id">
        <RouterLink :to="{ name: 'picture', params: { id: image._id } }">
          <img :src="image.links.file" :alt="image.description">
        </RouterLink>
      </picture>
    </div>
  </section>
</template>

<script>
  import { ref, onMounted } from "vue"

  import api from "../config/axios.js"
 
  export default {
    setup() {
      const columns = 5
      const images = ref([])

      const fetch = () => {
        api.get("/image").then(response => {
          images.value = response.data.images
        })
      }

      onMounted(fetch)

      return { images, columns }
    }
  }
</script>

<style lang="scss" scoped>
  .images-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;

    .column {
      display: flex;
      flex-direction: column;
      gap: 15px;

      picture img {
        width: 100%;
        max-height: 450px;
        border-radius: 15px;
        object-fit: cover;
        transition: all 0.3s;

        &:hover {
          filter: grayscale(0.8);
          cursor: pointer;
        }
      }
    }
  }
</style>