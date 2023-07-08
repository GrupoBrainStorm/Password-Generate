let textPw = document.querySelector("#pw-text");
let displaySize = document.querySelector(".display-pw-size span");
let btnGenerate = document.querySelector(".generate");
let clipboard = document.querySelector("password a");

let upper = document.querySelector("#upper");
let lower = document.querySelector("#lower");
let number = document.querySelector("#number");
let symbol = document.querySelector("#symbol");

let passwordAll = '';

const upperLetters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const lowerLetters = "abcdfghijklmnñopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "$%&/()=?¡¿!+-_";

addEventListener();
function addEventListener(){
    btnGenerate.addEventListener('click', generatePw);
}

function generatePw(e){
    passwordAll = '';
    if (upper.checked) {
        passwordAll += getUpperCase();
    }
    if (lower.checked) {
        passwordAll += getLowerCase();
    }
    if (number.checked) {
        passwordAll += getNumberCase();
    }
    if (symbol.checked) {
        passwordAll += getSymbolCase();
    }
    if (upper.checked || lower.checked || number.checked || symbol.checked){
        completePw();
    }
}

function completePw(){
    while(passwordAll.length < parseInt(displaySize.textContent)){
        const numberR =getRandom();
        if (upper.checked && numberR === 0) {
        passwordAll += getUpperCase();
        }
        if (lower.checked && numberR === 1) {
            passwordAll += getLowerCase();
        }
        if (number.checked && numberR === 2) {
            passwordAll += getNumberCase();
        }
        if (symbol.checked && numberR === 3) {
            passwordAll += getSymbolCase();
        }
    }
    textPw.innerHTML = passwordAll;
}

function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}

function getRandom(){
    return Math.floor(Math.random() * 4);
}

function getUpperCase(){
    return upperLetters[getRandomNumber(upperLetters.length)];
}

function getLowerCase(){
    return lowerLetters[getRandomNumber(lowerLetters.length)];
}

function getNumberCase(){
    return numbers[getRandomNumber(numbers.length)];
}

function getSymbolCase(){
    return symbols[getRandomNumber(symbols.length)];
}

function showVal(value){
    displaySize.textContent = value;
}