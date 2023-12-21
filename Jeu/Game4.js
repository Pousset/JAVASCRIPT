// Jusqu’à maintenant, nous avons répété trois fois les mêmes instructions dans notre projet :

// 3 “prompts”, qui nous ont permis de demander des mots à l’utilisateur ;

// 3 fois le test pour vérifier que le mot tapé par l’utilisateur est correct.

// Je vous propose de factoriser ce code, c'est-à-dire de mettre en commun les parties répétées à l’aide d'une boucle.

let tableau = ['serge', 'stephanie', 'elisa', 'mathis'];
let question = 'La famille rifle, nauche, piette, est composé de';
let score = 0;

for (let i = 0; i < tableau.length; i++) {
	let taperMot = prompt('entrez un prenom au hasard ! ');
	if (tableau[i] === taperMot) {
		score++;
		console.log(
			'Bravo vous avez trouvé cette belle famille composées de' +
				tableau.length +
				'Personnes'
		);
	}
}
