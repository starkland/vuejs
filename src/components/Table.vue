<template>
  <div>
    <table class="table" v-if="searchType == 'users'">
      <thead>
        <tr>
          <th>Image</th>
          <th>Username</th>
          <th>Score</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in formData.items">
          <td>
            <figure>
              <img
                :src="item.avatar_url"
                alt="item.login"
                width="40">
            </figure>
          </td>

          <td>
            <a :href="item.html_url" target="_blank">
              {{item.login}}
            </a>
          </td>

          <td>{{item.score}}</td>

          <td>
            <button
              class="button is-info"
              @click="viewMore(item, searchType)">

              info
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="table" v-if="searchType == 'repositories'">
      <thead>
        <tr>
          <th>Title</th>
          <th>URL</th>
          <th>User</th>
          <th>Language</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in formData.items">
          <td>{{item.name}}</td>

          <td>
            <a :href="item.html_url" target="_blank">
              {{item.html_url}}
            </a>
          </td>

          <td>
            <a :href="item.owner.html_url" target="_blank">
              {{item.owner.login}}
            </a>
          </td>

          <td>{{item.language}}</td>

          <td>
            <button class="button is-info"
              @click="viewMore(item, searchType)">
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
      type: Object
    }
  },

  components: {},

  data() {
    return {}
  },

  methods: {
    viewMore(obj, type) {
      switch(type) {
        case 'users':
          this.openUsers(obj);
        break;

        case 'repositories':
          this.openRepos(obj);
        break;
      }
    },

    openUsers(obj) {
      this.$router.push(`/users/${obj.login}`);
    },

    openRepos(obj) {}
  }
}
</script>

<style scoped></style>