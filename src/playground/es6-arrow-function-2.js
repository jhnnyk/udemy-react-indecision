// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments)
  return a + b
}

console.log(add(55, 1))

// this keyword - no longer bound

const user = {
  name: 'John',
  cities: ['Moon Twp', 'Bend', 'Evergreen'],
  printPlacesLived () {
    return this.cities.map((city) => this.name + ' has lived in ' + city)
  }
}

console.log(user.printPlacesLived())

const multiplier = {
  numbers: [10, 200, 342],
  multiplyBy: 3,
  multiply () {
    return this.numbers.map((num) => num * this.multiplyBy)
  }
}

console.log(multiplier.multiply())
