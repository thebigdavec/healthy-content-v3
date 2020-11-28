<template>
  <TheHeader />
  <div class="container flex">
    <router-view v-slot="slotProps">
      <transition name="router" mode="out-in">
        <component :is="slotProps.Component" />
      </transition>
    </router-view>
  </div>
  <TheFooter />
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
import TheFooter from "./components/layout/TheFooter";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
<style lang="scss">
*,
*::after,
*::before {
  box-sizing: border-box;
}
body {
  margin: 0;
  display: grid;
  min-height: 100vh;
  background-color: var(--main-bg, whitesmoke);
  color: $clr-primary-very-dark;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.125rem;
  line-height: 1.6;
}
#app {
  text-align: center;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
h1 {
  font-size: calc(
    clamp(calc(0.8125rem + 1vw), calc(0.8125rem + 1vw), 1rem) * 2
  );
  font-size: calc($fs-responsive * 2);
  line-height: 1.2;
}
h2 {
  font-size: calc(
    clamp(calc(0.8125rem + 1vw), calc(0.8125rem + 1vw), 1rem) * 1.4
  );
  font-size: calc($fs-responsive * 1.4);
}
p {
  max-width: 80ch;
}
p + p {
  margin-top: 1rem;
}
a {
  text-decoration: none;
}
.container {
  width: 85%;
  max-width: 1440px;
  margin: 0 auto;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.centered-x {
  margin-left: auto;
  margin-right: auto;
}
.centered-y {
  margin-top: auto;
  margin-bottom: auto;
}
.centered {
  margin: auto;
}
.highlight {
  background-color: #ffa;
}

.router-enter-from {
  opacity: 0;
}
.router-leave-to {
  opacity: 0;
}

.router-enter-active {
  transition: opacity 1s ease-out;
}

.router-leave-active {
  transition: opacity 150ms ease-out;
}

.router-enter-to {
  opacity: 1;
}
.router-leave-from {
  opacity: 1;
}
</style>
