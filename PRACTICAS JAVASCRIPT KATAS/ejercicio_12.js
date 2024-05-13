const duplicates = ['sushi','pizza','burger','potatoe','pasta','ice-cream','pizza','chicken','onion rings','pasta','soda'];

/*function removeDuplicates (duplicates) {
    const uniqueValues = duplicates.filter ((value, index, self) => {
        return self.indexOf (value) === index;
    });
    return uniqueValues;
}
console.log (removeDuplicates (duplicates));*/


function removeDuplicates (duplicates) {
    const uniqueValues = [];
  
    for (const element of duplicates) {
      if (!uniqueValues.includes(element)) {
        uniqueValues.push(element);
      }
    }
  
    return uniqueValues;
  }
  console.log (removeDuplicates (duplicates))