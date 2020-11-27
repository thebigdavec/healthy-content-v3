<template>
  <header>
    <div class="container flex">
      <TheBrand />
      <TheNav />
    </div>
  </header>
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
header {
  position: sticky;
  width: 100%;
  padding: 1em 0;
  background-color: white;
}
</style>
