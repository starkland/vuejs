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
  </div>
</template>

<script>
import Event from '../assets/js/Event';

export default {
  name: 'Form',

  components: {},

  data() {
    return {
      form: {
        search: '',
        selected: ''
      }
    }
  },

  methods: {
    submitForm() {
      this.validateData(this.form)
    },

    validateData(obj) {
      for (let key in obj) {
        if (obj[key] === '' || obj[key] === undefined) {
          console.warn('Tá vazio', key);
          return false;
        } else {
          Event.$emit('form_submitted', this.form);
        }
      }

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