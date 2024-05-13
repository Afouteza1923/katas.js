const nameFinder = ['Peter','Steve','Tony','Natasha','Clint','Logan','Xabier','Bruce','Peggy','Jessica','Marc'];

function finderName(nameFinder, element) {
    const itemFound = nameFinder.find (nameL => nameL.toLowerCase() === element.toLowerCase());
    if (itemFound) {
        const position = nameFinder.indexOf (itemFound)
        return {Existe: true, posición: position};
    } else {
        return {Existe: false, posición: null};
    }
}
const searchedItem = 'Steve';
const result = finderName (nameFinder, searchedItem);

console.log (result);