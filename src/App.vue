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

      <st-notification
        :message="errorMsg">
      </st-notification>

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
import stNotification from './components/Notification.vue';

import Event from './assets/js/Event';

export default {
  name: 'App',

  components: {
    stHeader,
    stSubHeader,
    stForm,
    stTable,
    stFooter,
    stNotification
  },

  data() {
    return {
      header: {
        title: 'Home',
        subtitle: `Search by <b>user</b> or <b>repository</b>.`
      },
      searchType: '',
      githubData: {},
      errorMsg: ''
    }
  },

  methods: {
    handleGithub(obj) {
      if (obj.items.length > 0) {
        this.githubData = obj;
        this.errorMsg = '';
      } else {
        this.errorMsg = 'Nenhum registro foi encontrado com o termo pesquisado.'
      }
    },

    handleType(id) {
      this.searchType = id;
      this.githubData = {};
    },

    handleError(obj) {
      this.errorMsg = obj;
    },

    handleFormError(obj) {
      this.errorMsg = obj.message;
    }
  },

  created() {
    Event.$on('github_data', this.handleGithub);
    Event.$on('form_erorr', this.handleFormError);
    Event.$on('form_type', this.handleType);
    Event.$on('error', this.handleError);
  },

  beforeDestroy() {
    Event.$off('github_data');
    Event.$off('form_erorr');
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
