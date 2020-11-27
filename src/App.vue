<template>
  <TheHeader />
  <div class="container flex">
    <router-view />
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
<style>
:root {
  --lts-small: 1px;
  --lts-large: 1.2px;
}
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
  color: rgb(19, 19, 34);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  line-height: 1.6;
}
#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
h1 {
  font-size: 2rem;
  line-height: 1.2;
}
p + p {
  margin-top: 1rem;
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
p {
  max-width: 80ch;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
