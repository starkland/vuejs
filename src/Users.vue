<template>
  <div>
    <st-header></st-header>

    <st-sub-header
      :title="header.title"
      :subtitle="header.subtitle">
    </st-sub-header>

    <st-footer></st-footer>
  </div>
</template>

<script>
import stHeader from './components/Header.vue';
import stSubHeader from './components/CallToAction.vue';
import stFooter from './components/Footer.vue';

import Event from './assets/js/Event';
import Github from './assets/js/GithubService';

export default {
  name: 'Users',

  components: {
    stHeader,
    stSubHeader,
    stFooter
  },

  data() {
    return {
      header: {
        title: '',
        subtitle: ''
      }
    }
  },

  methods: {
    handleUserData(obj) {
      this.header.title = `@${obj.login}`;
      this.header.subtitle = obj.name;

      console.warn(obj);
    }
  },

  mounted() {
    let username = `${this.$route.params.username}`;
    this._github.getByUser(username);
  },

  created() {
    this._github = new Github();

    Event.$on('github_userData', this.handleUserData);
  },

  beforeDestroy() {
    Event.$off('github_userData');
  }
}
</script>

<style scoped></style>