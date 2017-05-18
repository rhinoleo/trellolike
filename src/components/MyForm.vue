<template>
	<form>
		<label for="nouvelletache">Nouvelle tâche</label>
		<input id="nouvelletache" v-model="newTask.intitule" type="text" placeholder="Entrez l'intitulé'" class="validate">
		<label for="criticite">Criticité</label>
		<input id="criticite" v-model="newTask.criticite" type="text" placeholder="Donnez une note" class="validate">
		<label for="heures">Nombre d'heures</label>
		<input id="heures" v-model="newTask.nbHeures" type="text" placeholder="Combien de temps dure cette tâche ?" class="validate">
		<input id="visibilitetrue" v-model="newTask.visibilite" :value="true" type="radio" class="validate">
		<label for="visibilitetrue">Tâche visible</label>
		<input id="visibilitefalse" v-model="newTask.visibilite" :value="false" type="radio" class="validate">
		<label for="visibilitefalse">Tâche invisible</label>
		</br>

		<button type="button" class="btn" @click="addTask">Envoyer</button>
	</form>

</template>

<script>
	import {Store} from '@/Store.js'

	export default{
		name: 'myForm',
		data () {
			return {
				datas: Store.datas,
				newTask: {
					intitule: '',
					criticite: 0,
					nbheures: 0,
					visibilite: true
				}
			}
		},
		methods: {
			addTask(){
				this.datas.tasks.push(this.newTask);
				this.newTask = {};
			}
		}

	}

</script>