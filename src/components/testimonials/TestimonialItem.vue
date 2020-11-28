<template>
  <li>
    <div class="quotes fas fa-comment"></div>
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
  padding: 2rem 3rem 2rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px 2px #0001;
  @media (min-width: 1080px) {
    flex-basis: 48%;
  }
  .name {
    font-weight: 700;
    font-size: $fs-responsive;
    line-height: 1;
  }
  .detail {
    font-size: $fs-responsive-sm;
    opacity: 0.55;
  }
  .message {
    font-size: $fs-responsive-sm;
    margin-top: 1rem;
  }
  .quotes {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 4rem;
    color: #0002;
  }
}
</style>