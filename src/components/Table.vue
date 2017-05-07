<template>
  <div>
    <table class="table">
      <thead>
        <tr v-if="searchType == 'repo'">
          <th>Title</th>
          <th>URL</th>
          <th>User</th>
          <th>Language</th>
        </tr>

        <tr v-if="searchType == 'user'">
          <th>Image</th>
          <th>Username</th>
          <th>Score</th>
        </tr>
      </thead>

      <tbody>
        <tr></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',

  props: {
    searchType: {
      type: String,
      required: true
    },

    formData: {
      type: Array
    }
  },

  components: {},

  data() {
    return {}
  },

  methods: {},

  mounted() {

  }
}
</script>

<style scoped></style>