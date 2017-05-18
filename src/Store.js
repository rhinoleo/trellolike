export const Store = {

	datas: {
		tasks: [
				{
					"intitule": "gizgvfgkezve tâche #203",
					"criticite": 0,
					"nbheures": 2,
					"visibilite": true
				},
				{
					"intitule": "iuzhifezivu tâche #65",
					"criticite": 4,
					"nbheures": 3,
					"visibilite": false
				},
				{
					"intitule": "irhrorjofr tâche #404",
					"criticite": 1,
					"nbheures": 1,
					"visibilite": true
				},
				{
					"intitule": "uchzocjz tâche #32",
					"criticite": 3,
					"nbheures": 1,
					"visibilite": false
				},
				{
					"intitule": "lidojzfjz tâche #128",
					"criticite": 5,
					"nbheures": 2,
					"visibilite": true
				},
				{
					"intitule": "zoflzojcz tâche #99",
					"criticite": 10,
					"nbheures": 4,
					"visibilite": false
				},
				{
					"intitule": "aouydahzidhkz tâche #555",
					"criticite": 7,
					"nbheures": 2,
					"visibilite": true
				},
				{
					"intitule": "lojhrtrjlgj tâche #12",
					"criticite": 5,
					"nbheures": 5,
					"visibilite": false
				},
				{
					"intitule": "zadzoifheioh tâche #500",
					"criticite": 4,
					"nbheures": 1,
					"visibilite": true
				},
				{
					"intitule": "lzijfozihf tâche #365",
					"criticite": 9,
					"nbheures": 1,
					"visibilite": false
				},
			],
			word:''
	},
	search() {
		let tab = [];
		let reg = new RegExp(this.datas.word, "i");
		
		if (this.datas.word.length >= 3) {
			console.log('hey');
			tab = this.datas.tasks.filter((elt) => reg.test(elt.intitule));
			console.log(this.elt.intitule);
		} else {
			tab = this.datas.tasks;
		}

		console.log('ho')

		return tab;
	}
};