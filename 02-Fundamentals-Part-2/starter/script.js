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
/*
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
*/

/*
const friends = ['Michael', 'Steven', 'Peter']
console.log(friends)

const years = new Array(1991, 1992, 1993, 1994)
console.log(years)

console.log(friends[3])
console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = 'Jay'
console.log(friends)

const firstName = 'jonas'
const jonas = [firstName, 'Sched', 2024 - 1986, 'teacher', friends]
console.log(jonas)
console.log(jonas[4])

*/

/*
const calcAge = function (birthYear) {
    return 2024 - birthYear
}

const years = [1990, 1967, 2010, 2018]

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])
console.log(age1)
console.log(age2)
console.log(age3)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages)

*/
/*
const friends = ['Michael', 'Steven', 'Peter']
const newLength = friends.push('Jay')
console.log(friends)
console.log(newLength)

friends.unshift('John')
console.log(friends)

const popped = friends.pop()
console.log(popped)
console.log(friends)

friends.shift()
console.log(friends)

console.log(friends.indexOf('Steven'))

console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))

friends.push(23)
console.log(friends)
console.log(friends.includes('23'))

if (friends.includes(23)) {
    console.log('Array has Steven')
}

*/

