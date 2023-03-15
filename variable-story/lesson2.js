console.log(25-3.91)
let num1 = prompt('choose a number')
let num2 = prompt('choose a number')
let num3 = prompt('choose a number')
let num4 = prompt('choose a number')
let num5 = prompt('choose a number')

num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)
num4 = parseInt(num4)
num5 = parseInt(num5)

console.log(`answer: ${num1} + ${num2} + ${num3} + ${num4} + ${num5} = ${num1 + num2 + num3 + num4 + num5}`)

const number = prompt('name a number')

if (3 <= 4) {
    console.log('you are smart !')
}

if ( number <= 5) {
    console.log('Your number is small bruh')
}
if (number >= 10) {
    console.log('your number is big bruh')
}
if (number >= 5 && number <= 10) {
    console.log('your number is medium bruh')
}

const height = prompt('how tall are you?')
if (height === '170') {
    console.log('you are not a short king')
} else if (height === 'over 180') {
    console.log("you are a lucky bastard")
} else {
    console.log('you are a short king!')
}