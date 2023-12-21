let motAfficher = 'salut';
let motTaper = prompt('entrez le mot ici :' + motAfficher);
let score = 0;

switch (motTaper) {
	case motAfficher:
		console.log('Bravo !');
		break;
	case 'fdp':
		console.log('reste courtois !');
		break;
	default:
		console.log('vous avez fait une faute de frappe');
}
