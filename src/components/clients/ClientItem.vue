<template>
  <li>
    <img :src="client.logoPath" :alt="client.name" />
  </li>
</template>

<script>
export default {
  props: ["client"],
};
</script>

<style lang="scss" scoped>
img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
}
</style>