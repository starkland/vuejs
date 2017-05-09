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

      <st-table
        :searchType="searchType"
        :formData="githubData">
      </st-table>
    </div>

    <st-footer></st-footer>
  </div>
</template>

<script>
import stHeader from './components/Header.vue';
import stSubHeader from './components/CallToAction.vue';
import stForm from './components/Form.vue';
import stTable from './components/Table.vue';
import stFooter from './components/Footer.vue';

import Event from './assets/js/Event';

export default {
  name: 'App',

  components: {
    stHeader,
    stSubHeader,
    stForm,
    stTable,
    stFooter
  },

  data() {
    return {
      header: {
        title: 'Home',
        subtitle: `Search by <b>user</b> or <b>repository</b>.`
      },
      searchType: '',
      githubData: {}
    }
  },

  methods: {
    handleGithub(obj) {
      if (obj.items.length > 0) {
        this.githubData = obj;
      }
    },

    handleType(id) {
      this.searchType = id;
      this.githubData = {};
    },

    handleError(obj) {
      console.error('Tivemos um erro:', obj);
    }
  },

  created() {
    Event.$on('github_data', this.handleGithub);
    Event.$on('form_type', this.handleType);
    Event.$on('error', this.handleError);
  },

  beforeDestroy() {
    Event.$off('github_data');
    Event.$off('form_type');
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
