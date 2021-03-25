<template>
  <li>
    <div class="photo">
      <img :src="member.photoPath" alt="" />
    </div>
    <div class="details">
      <div class="name">{{ member.name }}</div>
      <div class="position">{{ member.position }}</div>
      <p class="biog" v-for="(para, index) in member.biog" :key="index">
        {{ para }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["member"]
}
</script>

<style lang="scss" scoped>
li {
  display: flex;
  flex-direction: column;
  background: white;
  padding: 1.5em 1em;
  margin-bottom: 1em;
  border-radius: 1em;
  box-shadow: 0 10px 30px -20px #0002;
  text-align: left;
  max-width: 630px;
  @media (min-width: 1080px) {
    flex-direction: row;
    padding: 1.5em 2em;
    margin: 1em;
  }
  p:last-child {
    margin-bottom: 0;
  }
}
.photo {
  flex-basis: 40%;
  margin-bottom: $gap;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1080px) {
    margin-left: 0;
    margin-right: $gap;
    margin-bottom: 0;
  }
}
img {
  display: block;
  max-width: 100%;
  box-shadow: 0 0 10px 2px #0001;
  border-radius: 1em;
}
.details {
  flex-basis: 60%;
}
.name {
  font-size: $fs-responsive;
  font-weight: 700;
  line-height: 1.2;
}
.position {
  font-size: $fs-responsive-sm;
  opacity: 0.4;
  line-height: 1.2;
  margin-bottom: 1rem;
}
.biog {
  font-size: smaller;
}
</style>
