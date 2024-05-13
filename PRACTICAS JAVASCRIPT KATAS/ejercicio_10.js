const numbers = [12, 21, 38, 5, 45, 37, 6];

function averAge (numbers) {
    const sum = numbers.reduce ((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / numbers.length;
}
const average = averAge (numbers);
console.log ("La media aritmética es:", average);