const fetch = require("node-fetch");

const getRepos = (url) => {
	return fetch(url)
		.then(response => response.json())
		.then((data) => {
			return data.map((repo) => {
				return repo.name
			});
		});
};



const Animals = [
	{ name: 'Dorminhoco', age: 1, type: 'Dog' },
	{ name: 'Soneca', age: 2, type: 'Dog' },
	{ name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
	new Promise((resolve, reject) => {
		setTimeout(() => {
			const arrayAnimals = Animals.filter((animal) => animal.type === type);
			if (arrayAnimals.length !== 0) {
				return resolve(arrayAnimals);
			};

			return reject({ error: 'Não possui esse tipo de animal.' });
		}, 100);
	})
);

const getListAnimals = (type) => (
	findAnimalsByType(type).then(list => list)
);


async function getAnimal(name) {
	return new Promise((resolve, reject) => {
		for (let i = 0; i < Animals.length; i += 1) {
			if (Animals[i].name === name) {
				resolve(Animals[i]);
			} else {
				reject('Nenhum animal com esse nome!')
			}
		}
	})
}



module.exports = {
	getRepos,
	getListAnimals,
	findAnimalsByType,
	getAnimal,
}