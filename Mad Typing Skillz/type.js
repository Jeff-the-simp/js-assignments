const twoDArray = [
    [77, 93, 81, 59, 75, 84, 73, 78, 86, 83, 83],
    [18, 33, 26, 9, 19, 24, 21, 20, 37, 32, 30]
]

console.log(twoDArray[1][8])

console.log(twoDArray[0][1])

let sum = 0

const nums = [77, 93, 81, 59, 75, 84, 73, 78, 86, 83, 83]

nums.forEach(function(element) {
    sum = sum + element
    console.log(sum)
    console.log(sum/nums.length)

})

let wsum = 0 

const wnums = [18, 33, 26, 9, 19, 24, 21, 20, 37, 32, 30]

wnums.forEach(function(element) {
    wsum = wsum + element
    console.log(wsum)
    console.log(wsum/wnums.length)
})




