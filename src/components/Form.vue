<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="field">
        <label class="label">Search by:</label>
        <p class="control">
          <span class="select">
            <select v-model="form.selected" @change="changeOptions">
              <option :value="{ 'id': 'users' }">
                User
              </option>

              <option :value="{ 'id': 'repositories' }">
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
import Github from '../assets/js/GithubService';

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
      let valid = this.validateData(this.form);

      if (valid) {
        this._github.get(this.form);
      }
    },

    validateData(obj) {
      for (let key in obj) {
        if (obj[key] === '' || obj[key] === undefined) {
          Event.$emit('form_erorr', {
            message: `O campo ${key} deve ser preenchido.`
          });

          return false;
        } else {
          return true;
        }
      }
    },

    changeOptions() {
      Event.$emit('form_type', this.form.selected.id);
    }
  },

  created() {
    this._github = new Github();

    this.form.selected = { id: 'users' };

    this.changeOptions();
  }
}
</script>

<style scoped>
  form {
    margin-bottom: 20px;
  }
</style>