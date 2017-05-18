<template>
	<div>
		<div>
			<task :key="dt.id" :tsk="dt" v-if="!dt.visibilite" v-for="dt in datas.tasks"></task>
		</div>
	</div>

</template>

<script>
import {Store} from '@/Store.js'
import Task from '@/components/Task'

export default {
	name: 'list',
	components: {task: Task},
	data(){
		return {
			datas: Store.datas
		}
	}
}
	
</script>