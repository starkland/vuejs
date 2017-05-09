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

    <!-- <div class="container">
      <div class="columns is-multiline is-mobile">
        <div class="column is-one-third" *ngFor="#item of userRepo">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">{{item.name}}</p>
              <a class="card-header-icon">
                <span class="icon">
                  <i class="fa" [ngClass]="{
                    'fa-code-fork': item.fork
                    }"></i>
                </span>
              </a>
            </header>

            <div class="card-content">
              <div class="content">
                {{item.description}}
                <br>
                <small>{{item.updated_at}}</small>
              </div>
            </div>

            <footer class="card-footer">
              <a href="{{item.html_url}}"
                target="_blank"
                class="card-footer-item">

                Ver projeto
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div> -->

    <br>

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
      },
      user: {}
    }
  },

  methods: {
    handleUserData(obj) {
      console.warn(obj);

      this.header.title = `@${obj.login}`;
      this.header.subtitle = obj.name;

      this.user = obj;
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

<style scoped>
  .image img {
    width: 130px;
    height: 130px;
  }
</style>