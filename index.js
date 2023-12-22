function findDuplicates(arr) {
    const elementCounts = {};
    const duplicates = [];
  
    arr.forEach((element) => {
      if (elementCounts[element]) {
        elementCounts[element]++;
      } else {
        elementCounts[element] = 1;
      }
    });
  
    for (const key in elementCounts) {
      if (elementCounts[key] > 1) {
        duplicates.push(parseInt(key, 10)); 
      }
    }
  
    return duplicates;
  }
  
  // Example usage:
  const inputArray = [2, 3, 1, 2, 3];
  const result = findDuplicates(inputArray);
  console.log(result); 