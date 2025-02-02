import { print, println, say, read, readnum, rand } from "./lib.js"

// Hello world
println("What's your name?")
let name
name = read()
say("Hello, ")
say(name)



// Guess a number
println("How many stars I have?")

let stars
stars = rand(5)
let guess
guess = readnum()

if (guess === stars) {
  println("You're right!")
}

if (guess !== stars) {
  print("No, I have ")
  print(stars)
  println(" stars")
}


// Guess a number
println("Write 6, 7 or 8")
let numer
numer = readnum()
if (numer === 6) {
  say("six")
}
if (numer === 7) {
  say("seven")
}
if (numer === 8) {
  say("eight")
}

println("How many stars would you rate me")
numer = readnum()
if (numer < 5) {
  say("no way")
}
if (numer === 5) {
  say("yesss")
}

