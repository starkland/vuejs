<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="field">
        <label class="label">Search by:</label>
        <p class="control">
          <span class="select">
            <select v-model="form.selected">
              <option :value="{ 'id': 'user' }">
                User
              </option>

              <option :value="{ 'id': 'repo' }">
                Repository
              </option>
            </select>
          </span>
        </p>
      </div>

      <div class="field">
        <label class="label"></label>
        <p class="control">
          <input
            class="input"
            v-model="form.search"
            type="text"
            placeholder="Search here">
        </p>
      </div>

      <div class="field">
        <label class="label"></label>
        <button class="button is-primary" type="submit">
          Search
        </button>
      </div>
    </form>

    <aside class="notification is-danger" v-if="form.error">
      <button class="delete" @click="hideError"></button>
      <p>{{form.error.message}}</p>
    </aside>

    <st-table
      :searchType="form.selected.id">
    </st-table>
  </div>
</template>

<script>
import stTable from './Table.vue';

import Event from '../assets/js/Event';

export default {
  name: 'Form',

  components: {
    stTable
  },

  data() {
    return {
      form: {
        search: '',
        selected: '',
        error: false
      }
    }
  },

  methods: {
    submitForm() {
      let valid = this.validateData(this.form);

      if (valid) {
        Event.$emit('form_submitted', this.form);
      }
    },

    validateData(obj) {
      for (let key in obj) {
        if (obj[key] === '' || obj[key] === undefined) {
          this.form.error = {
            message: `O campo ${key} deve ser preenchido.`
          };

          return false;
        } else {
          this.form.error = false;
          return true;
        }
      }
    },

    hideError() {
      this.form.error = false;
    }
  },

  created() {
    this.form.selected = { id: 'user' }
  }
}
</script>

<style scoped>
  form {
    margin-bottom: 20px;
  }
</style>