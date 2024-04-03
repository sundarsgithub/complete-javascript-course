/*'use strict'

let hasDriversLicense = false
const passTest = true

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('I can Drive')


//const interface = 'Audio'
//const private = 534
*/


/*
function logger() {
    console.log('My name is Sundar')
}

//calling or running or invoking
logger()
logger()
logger()
*/
/*
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples & ${oranges} oranges`
    return juice;
}


const juice = fruitProcessor(5, 0)
console.log(juice)
console.log(fruitProcessor(5, 0))

const appleOrangeJuice = fruitProcessor(2, 4)
console.log('Juice we get is ', appleOrangeJuice)
*/
/*
const currentYear = Number(prompt("Enter current year"))
console.log('Current year is', currentYear)
const birthYear = Number(prompt("Enter your birth year"))
console.log('Birth year is', birthYear)

const yourAge = calcAge1(currentYear, birthYear)
console.log('Your age is', yourAge)

function calcAge1(currentYear, birthYear) {
    const age = currentYear - birthYear
    return age
}

const calcAge2 = function (currentYear, birthYear) {
    return currentYear - birthYear
}

const yourAge2 = calcAge2(currentYear, birthYear)
console.log('Your age is', yourAge2)
*/


/*
// Function Expression
const calcAge2 = function (currentYear, birthYear) {
    return currentYear - birthYear
}

const yourAge2 = calcAge2(currentYear, birthYear)
console.log('Your age is', yourAge2)
*/

//Arrow function

/*
const currentYear = Number(prompt("Enter current year"))
console.log('Current year is', currentYear)
const birthYear = Number(prompt("Enter your birth year"))
console.log('Birth year is', birthYear)

const calcAge3 = (currentYear, birthYear) => currentYear - birthYear

const yourAge3 = calcAge3(currentYear, birthYear)
console.log('Your age is', yourAge3)

const yearsUntilRetirement = (currentYear, birthYear) => {
    const yourAge = currentYear - birthYear
    const retirement = 65 - yourAge
    return retirement
}

console.log('Years until retirement', yearsUntilRetirement(currentYear, birthYear))

*/
/*
function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)
    console.log(apples, oranges)
    const juice =
        `Juice with ${applePieces} applePieces of ${apples} apples
Juice with ${orangePieces} orangePieces of ${oranges} oranges`
    return juice;
}

console.log(fruitProcessor(2, 3))
*/
'use strict'
/*
const calcAge = function (birthYear) {
    return 2024 - birthYear
}
const yearsUntilRetirement = function (firstName, birthYear) {
    const age = calcAge(birthYear)
    const retirement = 65 - age
    if (retirement > 0) {
        console.log('check', retirement, 'string')
        return retirement
    } else {
        return -1
    }
    //    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement('Sundar', 1986))
console.log(yearsUntilRetirement('Swathi', 1950))

*/
/*
const calcAverage = function (score1, score2, score3) {
    return ((score1 + score2 + score3) / 3)
}

const scoreDolphins = calcAverage(11, 11, 11)
const scoreKoalas = calcAverage(11, 11, 11)

const checkWinner = function (avgDolphins, avgKoalas) {

    console.log(avgDolphins, avgKoalas)

    if (avgDolphins > avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas > avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log('No team wins...')
    }

}

checkWinner(scoreDolphins, scoreKoalas)

*/

const calcAverage = function (score1, score2, score3) {
    return ((score1 + score2 + score3) / 3)
}

const checkWinner = function () {
    const avgDolphins = calcAverage(50, 50, 50)
    const avgKoalas = calcAverage(11, 11, 11)

    if (avgDolphins > avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas > avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log('No team wins...')
    }

}

checkWinner()