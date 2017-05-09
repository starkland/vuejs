<template>
	<div
		class="columns is-multiline is-mobile">
    <div class="column is-one-third" v-for="item of repo">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{{item.name}}</p>
          <a class="card-header-icon">
            <span class="icon">
              <i class="fa" :class="{ 'fa-code-fork': item.fork }"></i>
            </span>
          </a>
        </header>

        <div class="card-content">
          <div class="content">
            {{item.description}}
            <br>
            <small>{{item.updated_at}}</small>
          </div>
        </div>

        <footer class="card-footer">
          <a :href="item.html_url" target="_blank" class="card-footer-item">
            Ver projeto
          </a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'RepoCard',

	props: {
		repo: {
			type: Array
		}
	},

	data() {
		return {}
	},

	methods: {}
}
</script>

<style scoped></style>