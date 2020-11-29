<template>
  <li>
    <div class="bubble fas fa-comment"></div>
    <div class="name">{{ testimonial.name }}</div>
    <div class="detail">
      {{ testimonial.position }}, {{ testimonial.client }}
    </div>
    <div class="message">
      {{ testimonial.message }}
    </div>
  </li>
</template>

<script>
export default {
  props: ["testimonial"],
};
</script>

<style lang="scss" scoped>
li {
  position: relative;
  margin: 1ch;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem 1rem;
  box-shadow: 0 10px 30px -20px #0002;
  z-index: -1;
  @media (min-width: 1080px) {
    padding: 2rem 2rem 2rem;
    flex-basis: 48%;
  }
  .name {
    font-weight: 700;
    font-size: $fs-responsive;
    line-height: 1.2;
  }
  .detail {
    font-size: $fs-responsive-sm;
    opacity: 0.4;
    line-height: 1.2;
    margin-bottom: 1rem;
    max-width: 80%;
  }
  .message {
    font-size: $fs-responsive-sm;
    margin-top: 1rem;
  }
  .bubble {
    position: absolute;
    top: 0.8rem;
    right: 1rem;
    font-size: 4rem;
    color: #0002;
    @media (min-width: 1080px) {
      top: 1.5rem;
      right: 1.8rem;
    }
  }
}
</style>