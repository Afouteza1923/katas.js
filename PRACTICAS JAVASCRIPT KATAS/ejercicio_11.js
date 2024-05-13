const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

function averageWord (mixedElements) {
    let totalSum = 0;
    let totalStrings = 0;
    for (const element of mixedElements) {
        if (typeof element === 'number') {
            totalSum += element;
        } else if (typeof element === 'string') {
            totalStrings += element.length;
        }
    }
    const average = (totalSum + totalStrings) / mixedElements.length
    return average
}
console.log (averageWord (mixedElements));