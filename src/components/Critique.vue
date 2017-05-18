<template>
	<div>
		<div>
			<task :key="dt.id" :tsk="dt" v-if="dt.criticite >= 7" v-for="dt in dts.tasks"></task>
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
			dts: Store.datas
		}
	}
}
	
</script>