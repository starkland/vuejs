<template>
  <section class="hero is-small is-primary is-bold">
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