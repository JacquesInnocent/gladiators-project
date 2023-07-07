function longestCommonsWords(words) {

    //checking if the variable words has no common prefixes,
    if (!words.length) {
      return ''; 
    }
  
    const begining = words[0];
    const ending = words[words.length - 1];
    let stringsofWords = ['players', 'plays', 'fields', 'please'];
  
    for (let i = 0; i < begining.length; i++) {
      if (begining[i] === ending[i]) {
        stringsofWords += begining[i];
      } 
      else {
        break;
      }
    }
  
    return stringsofWords;
  }