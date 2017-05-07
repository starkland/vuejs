<template>
  <div>
    <st-header></st-header>

    <st-sub-header
      :type="header.type"
      :title="header.title"
      :subtitle="header.subtitle">
    </st-sub-header>
  </div>
</template>

<script>
import stHeader from './components/Header.vue';
import stSubHeader from './components/CallToAction.vue';

export default {
  name: 'NotFound',

  components: {
    stHeader,
    stSubHeader
  },

  data() {
    return {
      header: {
        type: 'error',
        title: '404 - Not found',
        subtitle: `You tried to access one page that not exists.`
      }
    }
  },

  methods: {}
}
</script>

<style scoped></style>