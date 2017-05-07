<template>
  <div>
    <st-header></st-header>

    <st-sub-header
      :title="header.title"
      :subtitle="header.subtitle">
    </st-sub-header>

    <br>

    <st-form></st-form>
  </div>
</template>

<script>
import stHeader from './components/Header.vue';
import stSubHeader from './components/CallToAction.vue';
import stForm from './components/Form.vue';

export default {
  name: 'App',

  components: {
    stHeader,
    stSubHeader,
    stForm
  },

  data() {
    return {
      header: {
        title: 'Home',
        subtitle: `Search by <b>user</b> or <b>repository</b>.`
      }
    }
  },

  methods: {}
}
</script>

<style scoped>
</style>
