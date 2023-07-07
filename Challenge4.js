function firstPalindrome (words){
    wordsArray = ["car", "oda", "madam", "nun", "sir"]
    let len = wordsArray.length;
    let mid = Math.floor(len/2);
        for(var i = 0; i <mid; i++){
            if (wordsArray[i] !== wordsArray[len - 1 - i]) {
                return i;
            }

        }
        return "";
}
words();
