<template>
	<aside
		class="notification is-danger"v-if="message">
    <p>{{message}}</p>
  </aside>
</template>

<script>
export default {
	name: 'Notification',

	props: {
		message: {
			type: String
		}
	},

	data() {
		return {}
	}
}
</script>

<style scoped>
	.notification {
	  margin-bottom: 20px;
	}
</style>