<template>
  <div class="brand">
    <div class="brand-image" id="brand-image">
      <img src="../../assets/2020logo.svg" alt="Logo" />
    </div>
    <div class="brand-text" id="brand-text">Healthy Content</div>
  </div>
</template>

<style lang="scss" scoped>
.brand {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 0.2em;
  font-size: 1.5rem;
}
.brand-text {
  color: $primary;
  font-weight: 700;
}
.brand-image {
  width: 1em;
}
.brand-image img {
  max-width: 100%;
  display: block;
}
@media (min-width: 1080px) {
}
</style>
