// function double(n) {
//   return n * 2
// }

// const double = (n) => n * 2
function shout(word) {
  return word.toUpperCase() + '!'
}

const shout = (word) => word.toUpperCase() + '!'

// const recipe = {title: 'Pancakes', servings: 4}

// // the long way
// const title = recipe.title

// // destructuring
// const {title, servings} = recipe
// Try it: given const user = {name: 'Ada', role: 'admin'}, pull name and role out in one line.

const user = {name: 'Ada', role: 'admin'}

const {name, role} = user

// const name = 'Ada'
// const greeting = `Hello, ${name}! You have ${2 + 3} messages.`
const recipe = {title: 'panckes', servings:4 }
const literal = `${recipe.title} serves ${recipe.servings}. `

// const nums = [1, 2, 3]
// const doubled = nums.map((n) => n * 2) // [2, 4, 6]

// const ingredients = ['butter', 'milk', 'egg']
// // make: ['BUTTER', 'MILK', 'EGG']
const ingredients = ['butter', 'milk', 'egg']
const INGREDIENTS = ingredients.map(ingredients => {ingredients.toUpperCase})

// const a = [1, 2]
// const b = [...a, 3] // [1, 2, 3]

// const base = {color: 'red'}
// const shirt = {...base, size: 'M'} // {color: 'red', size: 'M'}
