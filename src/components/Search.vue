<template>
	<div>
		<p>Rechercher</p>
		<input type="search" v-model="datas.word" @keyup="recherche">
	</div>

</template>

<script>
import {Store} from '@/Store.js'

export default {
	name: 'search',
	data() {
		return {
			datas: Store.datas
		}
	},
	methods: {
		recherche() {
			
			Store.datas.word = this.datas.word;
			Store.search()


		}
	}
}
	
</script>

<style scoped>
p{
	float:left;
}

</style>