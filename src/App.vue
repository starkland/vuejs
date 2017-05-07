<template>
  <div>
    <st-header></st-header>

    <st-sub-header
      :title="header.title"
      :subtitle="header.subtitle">
    </st-sub-header>

    <br>

    <st-form></st-form>

    <st-footer></st-footer>
  </div>
</template>

<script>
import stHeader from './components/Header.vue';
import stSubHeader from './components/CallToAction.vue';
import stForm from './components/Form.vue';
import stFooter from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    stHeader,
    stSubHeader,
    stForm,
    stFooter
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

<style scoped></style>
