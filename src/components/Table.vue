<template>
  <div>
    <table class="table" v-if="searchType == 'user'">
      <thead>
        <tr>
          <th>Image</th>
          <th>Username</th>
          <th>Score</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <figure>
              <img src="http://dummyimage.com/40x40/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image">
            </figure>
          </td>

          <td><a href="" target="_blank">link</a></td>
          <td>score</td>

          <td>
            <button
              class="button is-info"
              @click="viewMore">

              info
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="table" v-if="searchType == 'repo'">
      <thead>
        <tr>
          <th>Title</th>
          <th>URL</th>
          <th>User</th>
          <th>Language</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Nome</td>

          <td><a href="" target="_blank">link</a></td>

          <td><a href="" target="_blank">link 2</a></td>

          <td>Linguagem</td>

          <td>
            <button class="button is-info"
              @click="viewMore">
              Info
            </button>
          </td>
        </tr>
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

  methods: {
    viewMore() {
      console.warn('Clicked.')
    }
  },

  mounted() {}
}
</script>

<style scoped></style>