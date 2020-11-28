<template>
  <footer>
    <div class="container flex">
      <small>&copy; 2020 <strong>Healthy Content</strong></small>
      <TheBrand />
    </div>
  </footer>
</template>

<script>
import TheBrand from "../branding/TheBrand";
export default {
  components: {
    TheBrand,
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  padding: 1em 0;
  background-color: white;
}
</style>
