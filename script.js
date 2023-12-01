function retournerMessageScore(score, nombreQuestions) {
    let message = 'Votre score est de ' + score + nombreQuestions
    return message
}

let nouveauMessage = retournerMessageScore(5,10)
console.log(nouveauMessage)