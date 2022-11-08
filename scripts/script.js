for (let i = 1; i <= 10; i++){
    console.log(2**i)
}

i = 1
while (i <= 10){
 console.log(2**i)
 i = i+1
}

let input = ""
do{
    input = prompt("What is your name?");
    console.log(input);
}
while(!isNaN(Number(input)))

alert("Hello " + input);
alert(`Hello ${input}`)