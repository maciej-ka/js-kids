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
