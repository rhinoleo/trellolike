<template>
	<div class="collection">
		<a href="#!" class="collection-item">
			<span class="title">{{tsk.intitule}}</span>
      <p>criticité : {{tsk.criticite}}<br>
         nombre d'heures : {{tsk.nbheures}}<br>
			<button class="btn" @click="removeTask(tsk)" type="button">Supprimer</button>
      </p>
		</a>
	</div>

</template>

<script>
import {Store} from '@/Store.js'
export default {
	name: "task",
	props: {
		tsk: {
			type: Object,
			default: function(){
				return {}
			}
		}
	},
	data(){
		return {

		}
	},
	computed: {
		filterTasks(){
			return Store.search();
		}

	},
	methods: {
		removeTask: function (dt) {
				let position = this.filterTasks.tasks.indexOf(datas);
				this.filterTasks.tasks.splice(position, 1);
		}
	}
}
	
</script>

<style>

</style>