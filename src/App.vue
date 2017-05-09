<template>
  <div>
    <st-header></st-header>

    <st-sub-header
      :title="header.title"
      :subtitle="header.subtitle">
    </st-sub-header>

    <br>

    <div class="container">
      <st-form></st-form>
    </div>

    <st-footer></st-footer>
  </div>
</template>

<script>
import stHeader from './components/Header.vue';
import stSubHeader from './components/CallToAction.vue';
import stForm from './components/Form.vue';
import stFooter from './components/Footer.vue';

import Event from './assets/js/Event';
import UserService from './assets/js/UserService';
import GithubService from './assets/js/GithubService';

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

  methods: {
    handleForm(obj) {
      if (obj.selected.id === 'user') {
        this.user.get(obj.search);
      } else {
        this.repo.get(obj.search);
      }
    }
  },

  beforeDestroy() {
    Event.$off('form_submitted');
  },

  created() {
    Event.$on('form_submitted', this.handleForm);

    this.user = new UserService();
    this.repo = new GithubService();
  }
}
</script>

<style scoped>
  .container {
    min-height: 350px;
    height: auto;
  }
</style>
