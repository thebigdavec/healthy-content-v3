<template>
  <footer>
    <div class="container flex">
      <div class="little">&copy; 2020 <strong>Healthy Content</strong></div>
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

<style lang="scss" scoped>
footer {
  width: 100%;
  padding: 1em 0;
  background-color: white;
  .little {
    font-size: 0.5rem;
    @media (min-width: 1080px) {
      font-size: 0.8125rem;
    }
  }
}
</style>
