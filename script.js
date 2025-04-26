const numberInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

const numerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

const convertToRoman = (num) => {
    let result = '';
    console.log(num);
    for (const numeral in numerals) {
        while (num >= numerals[numeral]) {
            result += numeral;
            num -= numerals[numeral];
        }
    }
    return result;
};

convertButton.addEventListener('click', (e) => {
    e.preventDefault();
    output.classList.remove('hidden');
    const number = Number(numberInput.value);

    if (!number) {
        output.textContent = 'Por favor insira um número válido.';
        output.classList.add('error');
    } else if (number < 1) {
        output.textContent = 'Por favor insira um número maior ou igual a 1.';
        output.classList.add('error');
    } else if (number > 3999) {
        output.textContent =
            'Por favor insira um número menor ou igual a 3999.';
        output.classList.add('error');
    } else {
        output.classList.remove('error');
        output.textContent = convertToRoman(number);
    }
});
