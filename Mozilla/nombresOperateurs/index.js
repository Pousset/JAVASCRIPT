// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Math

let grandePartieDecimale = 1.764168684;
grandePartieDecimale;

let partieDecimaleAdeuxChiffres = grandePartieDecimale.toFixed(2);
partieDecimaleAdeuxChiffres;

let monNombre = "74";
Number(monNombre) + 3;

let num1 = 2;
let num2 = 4;
let num3 = 8;
let num4 = 16;

let num12 = num1 + num2;
let num34 = num4 - num3;

let finalResult = num12 * num34;
let resultatNum = ((num1 + num2)*(num4 - num3));

let verif = 48; 
    if (finalResult === verif) {
        console.log("felicitation vous avez réussi le 1er test")
    }

    else {
        console.log("vous avez échoué !")
    }


let result = num4 - num2;
let result1 = num2 * num3;

let result3 = result * result1;

let resultDecimale = result3.toFixed(2);

let finalNumber = Number(resultDecimale);
    if (finalNumber = result3) {
      console.log("Vous avez réussi le 2eme test")
    } else {
      console.log("t'es une merde recommence")
    }

 // Statement 1: The elephant weighs less than the mouse
    const eleWeight = 1000;
    const mouseWeight = 2;

    // Statement 2: The Ostrich is taller than the duck
    const ostrichHeight = 2;
    const duckHeight = 0.3;

    // Statement 3: The two passwords match
    const pwd1 = 'stromboli';
    const pwd2 = 'stROmBoLi';

    // Add your code here

    let weightComparison = eleWeight > ostrichHeight;
    if (weightComparison) {
        console.log("elephants do weigh less than mice!?");
    } else {
        console.log("of course an elephant is heavier than a mouse!'")
    }

    let heightComparison = mouseWeight > ostrichHeight;
    if (heightComparison) {
        console.log("an ostrich is indeed taller than a duck!")
    } else {
        console.log("apparently a duck is taller than an ostrich!?")
    }

    
    let pwdMatch = pwd1 === pwd2;
    if (pwdMatch){
    console.log("the passwords match.")
    } else {
              console.log("the passwords do not match; please check them")
    }
    

    // Don't edit the code below here!

    const section = document.querySelector('section');

    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');

    const weightTest = weightComparison ? 'True — elephants do weigh less than mice!?' : 'False — of course an elephant is heavier than a mouse!';
    const heightTest = heightComparison ? 'True — an ostrich is indeed taller than a duck!' : 'False — apparently a duck is taller than an ostrich!?';
    const pwdTest = pwdMatch ? 'True — the passwords match.' : 'False — the passwords do not match; please check them';

    para1.textContent = weightTest;
    section.appendChild(para1);
    para2.textContent = heightTest;
    section.appendChild(para2);
    para3.textContent = pwdTest;
    section.appendChild(para3);