function firstPalindrome (words){
    words = ["car", "oda", "madam", "nun", "sir"]
    let len = words.length;
    let mid = Math.floor(len/2);
        for(var i = 0; i <mid; i++){
            if (words[i] !== words[len - 1 - i]) {
                return i;
            }

        }
        return "";
}