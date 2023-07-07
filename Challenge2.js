const birthYear = prompt("What's your year of birth?")
if (birthYear => 2006){
    alert('You are a minor. No alcohol for you')
}
    if (birthYear <= 2006 && birthYear >= 1988){
        alert('You are a youth. Welcome to the bar')
    }
    else if(birthYear <= 1987){
        alert('You are an elder mate. Enjoy')
    }
