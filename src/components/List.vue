<template>
	<div>
		<div>
			<task :key="dt.id" :tsk="dt" v-if="dt.visibilite" v-for="dt in filterTasks"></task>
		</div>
	</div>

</template>

<script>
import {Store} from '@/Store.js'
import {Bus} from '@/Bus.js'
import Task from '@/components/Task'

export default {
	name: 'list',
	components: {task: Task},
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
		three: function(){
			Bus.$emit('three');
		},
		removeTask: function (dt) {
				let position = this.filterTasks.tasks.indexOf(datas);
				this.filterTasks.tasks.splice(position, 1);
		}

	}
}
	
</script>

<style>

</style>