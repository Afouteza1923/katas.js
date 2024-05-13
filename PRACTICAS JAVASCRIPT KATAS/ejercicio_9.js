const numbers = [1, 2, 3, 5, 45, 34, 58];

function sumAll (numbers) {
    return numbers.reduce ((accumulator, curentValue) => accumulator + curentValue, 0);
}
const totalSum = sumAll (numbers);
console.log ('La suma total es:', totalSum);