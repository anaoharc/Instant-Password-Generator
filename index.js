const passEl = document.getElementById("pass");
const copyEl = document.getElementById("copy");
const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");
const numberEl = document.getElementById("number");
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_+=|-";

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}
function generatePass() {
    const length = lengthEl.value;
    let password = "";
    for (let i = 0; i < length; i++) {
        if (length < 8) {
            alert("Error: your password must be a minimum of 8 characters!");
            return;
        }
        if (length > 40) {
            alert("Error: your password must be a maximum of 40 characters!");
            return;
        }
        else {
            const x = generateX();
            password += x;
        }
    }
    passEl.innerText = password;
}
function generateX() {
    const xs = [];
    if (upperEl.checked) {
        xs.push(getUppercase());
    }
    if (lowerEl.checked) {
        xs.push(getLowercase());
    }
    if (numberEl.checked) {
        xs.push(getNumber());
    }
    if (symbolEl.checked) {
        xs.push(getSymbol());
    }
    if (xs.length === 0) return "";
    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePass);
copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = passEl.innerText;
    if (!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Copied to clipboard!");
})