<template>
  <div class="container">
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
      console.warn('Submetendo..', this.form);
    }
  },

  created() {
    this.form.selected = { id: 'user' }
  }
}
</script>

<style scoped>
  .container {
    min-height: 350px;
    height: auto;
  }
</style>