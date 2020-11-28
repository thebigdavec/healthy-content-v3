<template>
  <li @click="openDetails">
    <img :src="portfolio.logoPath" :alt="portfolio.name" />
  </li>
  <div class="details" v-if="isDetailsOpen" @click="closeDetails">
    <div class="details__image">
      <img :src="portfolio.imagePath" :alt="detailsImageAlt" />
    </div>
    <div class="details__text">
      <h3>{{ portfolio.name }}</h3>
      <p>{{ portfolio.description }}</p>
    </div>
    <div class="close" @click="closeDetails"><i class="fas fa-times"></i></div>
  </div>
</template>

<script>
export default {
  props: ["portfolio"],
  data() {
    return {
      isDetailsOpen: false,
    };
  },
  computed: {
    detailsImageAlt() {
      return "Example of work for " + this.portfolio.name;
    },
  },
  methods: {
    openDetails() {
      this.isDetailsOpen = true;
    },
    closeDetails() {
      this.isDetailsOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
  margin: 1ch;
  flex-basis: 75%;
  align-self: stretch;
  width: 100%;
  max-height: 100%;
  padding: 1rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px 2px #0001;
  cursor: pointer;
  background-color: white;
  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }
  @media (min-width: 1080px) {
    flex-basis: 31%;
  }
}
.details {
  position: fixed;
  display: grid;
  gap: 1ch;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #fffb;
  z-index: 9998;
  backdrop-filter: blur(10px);
  @media (min-width: 1080px) {
    grid-template-columns: 35% 50%;
  }
  .details__text {
    padding: 1rem;
    text-align: left;
    justify-self: right;
  }
  .details__image {
    padding: 1rem;
    img {
      display: block;
      max-width: 100%;
      max-height: 85vh;
      margin: 0 auto;
    }
  }
  .close {
    position: absolute;
    cursor: pointer;
    top: 3rem;
    right: 5rem;
    font-size: 3rem;
    &:hover {
      color: $clr-accent;
    }
  }
}
</style>
