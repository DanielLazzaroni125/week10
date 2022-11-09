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

// alert("Hello " + input);
alert(`Hello ${input}`);



let fruits = ["apple", "banana"];

fruits.push('orange')
fruits.pop()
fruits.unshift('mango')
fruits.shift()

console.log(fruits)

for (let item of fruits){
    console.log(item)
}

const person = {
    name:['Bob', 'Smith'],
    age:32,
    gender:'male',
    hobbies :['music', 'skiing']
}

console.log(`my name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.hobbies[0]} and ${person.hobbies[1]}`)

for (let key in person){
    console.log(key); //prints each key
    console.log(person[key]) //prints each key and value
}