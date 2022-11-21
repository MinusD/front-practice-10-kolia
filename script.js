let captchaText = document.getElementById("text");
let captchaInput = document.getElementById("input");
let captchaButton = document.getElementById("button");
let focusButton = document.getElementById("focusButton");

const isEmpty = (obj) => {
    return obj === "";
}

// Генерация случайной строки
let answer = "";
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < 10; i++) {
    answer += characters.charAt(Math.floor(Math.random() * characters.length));
}

// Вывод случайной строки
captchaText.innerHTML = answer;

// Проверка введенной строки
const checkCaptcha = () => {
    let input = captchaInput.value.toString().trim();
    if (isEmpty(input)) {
        return;
    } else if (input === answer) {
        focusButton.disabled = false;
    } else {
        generateCaptcha();
    }
}

const generateCaptcha = () => {
    let n1 = Math.ceil(Math.random() * 100);
    let n2 = Math.ceil(Math.random() * 100);
    answer = (n1 + n2).toString();
    captchaText.innerHTML = n1 + " + " + n2 + " = ?";
    captchaInput.value = "";
}

// Корзина

function Accumulator(startingValue) {
    this.value = parseInt(startingValue, 10);
    this.read = function () {
        this.value += parseInt(prompt('Введите число'), 10);
    };
}

const createAccumulator = () => {
    let accumulator = new Accumulator(prompt("Введите число"));
    accumulator.read();
    accumulator.read();
    alert(accumulator.value);
}

// Task 3

const truncate = (str, maxlength) => {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…';
    } else {
        return str;
    }
}

const truncateCreate = () => {
    let str = prompt("Введите строку");
    let num = parseInt(prompt("Количество символов"), 10);
    alert(truncate(str, num));
}
