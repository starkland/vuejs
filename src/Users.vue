<template>
  <div>
    <st-header></st-header>

    <st-sub-header
      :title="username"
      :subtitle="username">
    </st-sub-header>

    <st-footer></st-footer>
  </div>
</template>

<script>
import stHeader from './components/Header.vue';
import stSubHeader from './components/CallToAction.vue';
import stFooter from './components/Footer.vue';

export default {
  name: 'Users',

  components: {
    stHeader,
    stSubHeader,
    stFooter
  },

  data() {
    return {
      username: ''
    }
  },

  methods: {},

  mounted() {
    this.username = `@${this.$route.params.username}`;
    console.warn(this.$route.params.username)
  }
}
</script>

<style scoped></style>