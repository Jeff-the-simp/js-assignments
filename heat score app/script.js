const gender = prompt(" Are you a boy or a girl?")

if (gender === "boy") {
    let b1 = prompt("Rate from 1 to 10, how long is your dream girl's hair?")
    let b2 = prompt("Rate from 1 to 10, how beautiful is your dream girl?")
    let b3 = prompt("Rate from 1 to 10, how rich is your dream girl?")

    b1 = parseInt(b1)
    b2 = parseInt(b2) 
    b3 = parseInt(b3)

    console.log(`answer: ${b1} + ${b2} + ${b3}=${b1 + b2 + b3}`)

    const totalScore = b1+b2+b3 
    console.log('total score', totalScore)
    

    if(totalScore <= 10) {
        document.write("<img class='girl-bottom' src='girl-bottom.jpeg'>")
        document.write("She is your queen!")
        }


    if(totalScore > 10 && totalScore <= 20) {
        document.write("<img src='girl-middle.png'>")
        }
     

    if(totalScore > 20 && totalScore <= 30) {
        document.write("<img src='girl-top.jpeg'>")
        }
}

if (gender === "girl") {
    let g1 = prompt("Rate from 1 to 10, how hairy is your dream boy?")
    let g2 = prompt("Rate from 1 to 10, how polite is your dream boy?")
    let g3 = prompt("Rate from 1 to 10, how deep is your dream boy's pocket?")

    g1 = parseInt(g1)
    g2 = parseInt(g2)
    g3 = parseInt(g3)
    
    console.log(`answer: ${g1} + ${g2} + ${g3}=${g1 + g2 + g3}`)

    const totalScore = g1+g2+g3 

    if( totalScore <= 10) {
        document.write("<img src='man-bottom.jpeg'>")
    }
    

    if( totalScore > 10 && totalScore <= 20) {
        document.write("<img src='boy-middle.jpg'>")
    }
    

    if( totalScore > 20 && totalScore <= 30) {
        document.write("<img src='man-top.jpeg'>")
        document.write("He is your ideal man!")
    }
    
}