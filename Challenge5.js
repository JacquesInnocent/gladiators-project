function arrayOfAll(arr) {
    var characters = [];
    var evenNums = [];
    var oddNums = [];
    
    for (let i = 0; i < arr.length; i++) {
      let array_checked = arr[i];
  
      if (typeof array_checked === "number") {
        // Checking if the array_checked is an integer
        if (array_checked % 2 === 0) {
         
          evenNums.push(array_checked);
        } else {
          
          oddNums.push(array_checked);
        }
      } else if (typeof array_checked === "string" && array_checked.length === 1) {
        // Checking for a single character string in array_checked 
        characters.push(array_checked);
      }
    }
  
    // Sorting the arrays
    evenNums.sort(function (a, b) {
      return a - b;
    });
    oddNums.sort(function (a, b) {
      return a - b;
    });
    characters.sort();
  
    //  Returning the object
    let objectFinal = {
      evenNums: evenNums,
      oddNums: oddNums,
      characters: characters,
    };
    return objectFinal;
  }
  