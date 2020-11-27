<template>
  <div class="navbar">
    <div class="burger"><i class="fas fa-bars"></i></div>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Home' }">Services</router-link>
      <router-link :to="{ name: 'Home' }">Portfolio</router-link>
      <router-link :to="{ name: 'Home' }">Testimonials</router-link>
      <router-link :to="{ name: 'Home' }">Contact</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  display: none;
}
.burger {
  display: block;
}
@media (min-width: 1080px) {
  nav {
    display: block;
  }
  .burger {
    display: none;
  }
  nav > * + * {
    margin-left: 2ch;
  }
  nav a {
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: var(--lts-small);
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #5396e7;
  }
}
</style>
