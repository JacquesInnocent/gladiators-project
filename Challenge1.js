function fizzbuzz(a,b){
    if (typeof a==='string'&& typeof b==='string'){
        let length_of_a = a.length
        let length_of_b = b.length
        let sum_of_a_and_b = sum(length_of_a + length_of_b)
        if (sum_of_a_and_b%3===0){
            return 'Fizz'
        }

        else if (sum_of_a_and_b%5===0) {
            return 'Buzz'
        }

        else if (sum_of_a_and_b%5===0 && sum_of_a_and_b%3===0) {
            return 'FizzBuzz'
        }
    }
}