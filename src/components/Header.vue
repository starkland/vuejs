<template>
  <nav class="nav">
    <div class="nav-left">
      <a
        class="nav-item"
        target="_blank"
        title="Go to Vuejs site"
        href="http://vuejs.org/">
        <img
          src="http://vuejs.org/images/logo.png"
          alt="Vuejs logo">
      </a>
    </div>

    <div class="nav-center">
      <a
        class="nav-item"
        href="https://github.com/starkland/vuejs"
        target="_blank">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </a>
      <a
        class="nav-item"
        href="https://twitter.com/thulioph_"
        target="_blank">
        <span class="icon">
          <i class="fa fa-twitter"></i>
        </span>
      </a>
    </div>

    <span
      class="nav-toggle"
      :class="{ 'is-active': isOpen }"
      @click="toggleNavbar">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <div
      class="nav-right nav-menu"
      :class="{ 'is-active': isOpen }">

      <router-link
        class="nav-item is-tab"
        to="/"
        exact>
        Home
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      isOpen: false }
  },

  methods: {
    toggleNavbar() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scoped>
  .nav {
    background-color: #363636;
  }


  .nav a:hover {
    color: #FFFFFF;
  }

  .nav-toggle.is-active {
    background-color: #FFF;
  }

  .nav-right a:hover {
    background-color: #FFFFFF;
    color: #363636 !important;
  }
</style>