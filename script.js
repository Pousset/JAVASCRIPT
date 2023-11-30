// // Test Mot

// let motAfficher = "salut"
// let motTaper = "salut"
// let score = 1
// console.log (motAfficher)

// if (motAfficher === motTaper ) { 
//     // On augmente le score 
//     score = score +1
// console.log (score)

// } else {
//     // Le score ne change pas 
//     score = score +0
//     console.log (score)
// }

// Test Mot

let motAfficher = "salut"
let motTaper = prompt("entrez le mot ici :" + motAfficher)
let score = 0

switch (motTaper) {
    case motAfficher: 
    console.log('Bravo !')
    break
    case "fdp":
    console.log("reste courtois !")
    break
    default: 
    console.log("vous avez fait une faute de frappe")
}
