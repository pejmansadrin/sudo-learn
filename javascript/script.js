let name = prompt('soal','hoom?')

alert(name)
alert(name)
alert(name)

let isAdult = confirm('18 salet hast ya na?')
let salTavalod = prompt('sal tavalodet ro bego')

let ageNumber = 2025 - Number(salTavalod)
if( ageNumber >= 18 ){
    alert("khobe 18 salet shdeh");
} 
else 
    alert("hey kocholo")

const person = {
    name: 'pejman',
    age:ageNumber,
    hight: 175,
    weight: 80
}

for(const key in person){
    console.log(`${key} : ${person[key]}`)

}

alert(sum(2,2))

function sum(a,b){
    return a+b
}


const sum2 = function(a,b){
    alert(a+b)
}
sum2(2,3)

const sum3 = (a,b) => {
    return a+b
}

alert(sum3(3,3))


const sum4 = (a,b) => a+b

alert(sum4(3,4))

const func = a => a ** 2

const duble = (a=2) => `${a} and what?`

alert(duble(prompt('hum?')))

const hostel = ['pejman','ali','farzad']
hostel.forEach(shakhs => alert(shakhs) )

const sayHelloTo = hostel.map(shakhs => 'hello ' + shakhs)
sayHelloTo.forEach(shakhs => alert(shakhs) )

const esmKotah = hostel.filter(shakhs => shakhs.length > 3).map(shakhs => shakhs.length + " " + shakhs)
esmKotah.forEach(shakhs => alert(shakhs) )
