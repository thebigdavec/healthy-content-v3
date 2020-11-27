<template>
  <footer>
    <div class="container flex">
      <TheBrand />
      <TheNav />
    </div>
  </footer>
</template>

<script>
import TheNav from "./TheNav";
import TheBrand from "../branding/TheBrand";
export default {
  components: {
    TheNav,
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
