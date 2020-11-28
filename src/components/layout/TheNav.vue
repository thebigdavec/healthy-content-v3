<template>
  <div class="navbar">
    <transition-group name="nav" mode="out-in">
      <div class="burger" v-if="menuClosed" @click="openMenu">
        <i class="fas fa-bars"></i>
      </div>
      <nav class="overlay" v-else @click="closeMenu">
        <div class="burger" @click="closeMenu">
          <i class="fas fa-times"></i>
        </div>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
        <router-link :to="{ name: 'Service' }">Services</router-link>
        <router-link :to="{ name: 'Portfolio' }">Portfolio</router-link>
        <router-link :to="{ name: 'Testimonials' }">Testimonials</router-link>
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
        <small>&copy; 2020 <strong>Healthy Content</strong></small>
      </nav>
    </transition-group>
    <nav class="wide">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Service' }">Services</router-link>
      <router-link :to="{ name: 'Portfolio' }">Portfolio</router-link>
      <router-link :to="{ name: 'Testimonials' }">Testimonials</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuClosed: true,
    };
  },
  methods: {
    openMenu() {
      this.menuClosed = false;
    },
    closeMenu() {
      this.menuClosed = true;
    },
  },
};
</script>

<style lang="scss" scoped>
nav.wide {
  display: none;
}
nav.overlay {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fffb;
  z-index: 9999;
  backdrop-filter: blur(10px);
  a {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: $lts-small;
    font-weight: 700;
    font-size: calc(0.8rem + 3vw);
    color: $clr-primary-dark;
    transition: color 250ms ease;
    &.router-link-exact-active {
      color: $clr-primary;
    }
    &:hover {
      color: $clr-primary;
    }
  }
}
.burger {
  display: block;
  color: $clr-primary-dark;
  &:active {
    color: $clr-accent;
  }
}
@media (min-width: 1080px) {
  nav.wide {
    display: block;
  }
  .burger {
    display: none;
  }
  nav.wide > * + * {
    margin-left: 1ch;
  }
  nav.wide a {
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: $lts-small;
    font-weight: bold;
    color: $clr-primary-very-dark;
    background-color: transparent;
    transition: color 250ms ease;
    padding: 0.1em 0.25em;
    border-radius: 0.25em;
    &.router-link-exact-active {
      color: $clr-primary;
      pointer-events: none;
    }
    &:hover {
      color: $clr-primary;
    }
  }
}
.nav-enter-from,
.nav-leave-to {
  opacity: 0;
}
.nav-enter-to,
.nav-leave-from {
  opacity: 1;
}
.nav-enter-active {
  transition: opacity 250ms ease-out;
}
.nav-leave-active {
  transition: opacity 100ms ease-in;
}
</style>
