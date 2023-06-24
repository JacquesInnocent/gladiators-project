function numCheck(num) {
    num = 41
    if (num < 10 || num > 99) {
        alert (num)
    }
    else {
        let first = parseInt(num / 10)

        let second = parseInt (num % 10)

        let sum = first + second

        let result = first * second

            if (sum + result === num) {
                document.write (num)  
            }
            else {
                return '';
            }
    }
    
}