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
        <h1 class="title">{{title}}</h1>
        <h2 class="subtitle" v-html="subtitle"></h2>
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
    }
  },

  components: {},

  data() {
    return {}
  },

  methods: {}
}
</script>

<style scoped></style>