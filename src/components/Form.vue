<template>
  <div class="container">
    <div class="field">
      <label class="label">Search by:</label>
      <p class="control">
        <span class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </span>
      </p>
    </div>

    <div class="field">
      <label class="label"></label>
      <p class="control">
        <input
          class="input"
          type="text"
          placeholder="Search here">
      </p>
    </div>

    <div class="field">
      <label class="label"></label>
      <button class="button is-primary">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',

  components: {},

  data() {
    return {}
  },

  methods: {}
}
</script>

<style scoped>
  .container {
    min-height: 330px;
    height: auto;
  }
</style>