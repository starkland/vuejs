<template>
  <div>
    <st-header></st-header>

    <st-sub-header
      :title="header.title"
      :subtitle="header.subtitle"
      :userInfo="user">
    </st-sub-header>

    <div class="container">
      <st-repo-card :repo="userRepo"></st-repo-card>
    </div>

    <st-footer></st-footer>
  </div>
</template>

<script>
import stHeader from './components/Header.vue';
import stSubHeader from './components/CallToAction.vue';
import stFooter from './components/Footer.vue';
import stRepoCard from './components/RepoCard.vue';

import Event from './assets/js/Event';
import Github from './assets/js/GithubService';

export default {
  name: 'Users',

  components: {
    stHeader,
    stSubHeader,
    stFooter,
    stRepoCard
  },

  data() {
    return {
      header: {
        title: '',
        subtitle: ''
      },
      user: {},
      userRepo: []
    }
  },

  methods: {
    handleUserData(obj) {
      this.header.title = `@${obj.login}`;
      this.header.subtitle = obj.name;

      this.user = obj;
    },

    handleRepoData(array) {
      this.userRepo = array;
    }
  },

  mounted() {
    let username = `${this.$route.params.username}`;

    this._github.getByUser(username);
    this._github.getRepoByUser(username);
  },

  created() {
    this._github = new Github();

    Event.$on('github_userData', this.handleUserData);
    Event.$on('github_repoData', this.handleRepoData);
  },

  beforeDestroy() {
    Event.$off('github_userData');
    Event.$off('github_repoData');
  }
}
</script>

<style scoped>
  .container {
    margin: 20px auto;
  }
</style>