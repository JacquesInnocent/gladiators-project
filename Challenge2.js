const birthYear = prompt("What's your year of birth?")
if (birthYear <= 17){
    alert('You are a minor. No alcohol for you')
}
    if (birthYear > 17 && birthYear == 35 ){
        alert('You are a youth. Welcome to the bar')
    }
    else if(birthYear => 36){
        alert('You are an elder mate. Enjoy')
    }
