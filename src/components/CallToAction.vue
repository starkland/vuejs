<template>
  <section class="hero is-bold"
    :class="{
        'is-large': type == 'error',
        'is-dark': type == 'error',
        'is-small': !type,
        'is-primary': !type
      }">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title">{{title}}</h1>
            <h2 class="subtitle" v-html="subtitle"></h2>
          </div>

          <div class="column" v-if="userInfo">
            {{userInfo.company}} <br>
            {{userInfo.location}} <br>
            {{userInfo.bio}}<br>
          </div>

          <div class="column" v-if="userInfo">
            <figure class="image">
              <img :src="userInfo.avatar_url" alt="Image">
            </figure>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CallToAction',

  props: {
    title: {
      type: String,
      required: true
    },

    type: {
      type: String,
    },

    subtitle: {
      type: String,
      required: true
    },

    userInfo: {
      type: Object
    }
  },

  components: {},

  data() {
    return {}
  },

  methods: {}
}
</script>

<style scoped>
  .image img {
    width: 130px;
    height: 130px;
  }
</style>