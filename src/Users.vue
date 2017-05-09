<template>
  <div>
    <st-header></st-header>

    <st-sub-header
      :title="header.title"
      :subtitle="header.subtitle">
    </st-sub-header>

    <div class="columns">
      <div class="column">
        <h1 class="title">{{header.title}}</h1>
        <h2 class="subtitle">{{header.subtitle}}</h2>
      </div>

      <div class="column">
        {{user.company}} <br>
        {{user.location}} <br>
        {{user.bio}}<br>
      </div>

      <div class="column">
        <figure class="image">
          <img :src="user.avatar_url" alt="Image">
        </figure>
      </div>
    </div>

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
    margin-bottom: 20px;
  }

  .image img {
    width: 130px;
    height: 130px;
  }
</style>