let listeMots = ['Cachalot', 'Petunia', 'Serviette'];
console.log(listeMots);
score = 0;
console.log(score);
motTaper = prompt(listeMots);

if (motTaper === listeMots[0]) {
	score++;
}
console.log(score);

let message = prompt('Maintenant le prochain mot ' + listeMots[1]);
if (message === listeMots[1]) {
	score++;
}

console.log(score);

let message1 = prompt('Next Mot ' + listeMots[2]);
if (message1 === listeMots[2]) {
	score++;
}

console.log(score);
