<template>
  <router-link :to="{ name: 'Home' }">
    <div class="brand">
      <div class="brand-image" id="brand-image">
        <img src="../../assets/logo.svg" alt="Logo" />
      </div>
      <div class="brand-text" id="brand-text">Healthy Content</div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
a {
  display: block;
}
.brand {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 0.2em;
  font-size: 1.5rem;
  .brand-image {
    width: 1em;
    img {
      max-width: 100%;
      display: block;
    }
  }
  .brand-text {
    color: $clr-primary-dark;
    font-weight: 700;
  }
}
</style>
