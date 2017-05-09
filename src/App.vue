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
      },
      userObj: {}
    }
  },

  methods: {
    handleForm(obj) {
      if (obj.selected.id === 'user') {
        this.user.get(obj.search);
      } else {
        this.repo.get(obj.search);
      }
    },

    handleUser(obj) {
      this.userObj = obj;
    },

    handleError(obj) {
      console.error('Tivemos um erro:', obj);
    }
  },

  created() {
    this.user = new UserService();
    this.repo = new GithubService();

    Event.$on('form_submitted', this.handleForm);
    Event.$on('user_data', this.handleUser);
    Event.$on('error', this.handleError);
  },

  beforeDestroy() {
    Event.$off('form_submitted');
    Event.$off('user_data');
    Event.$off('error');
  }
}
</script>

<style scoped>
  .container {
    min-height: 350px;
    height: auto;
  }
</style>
