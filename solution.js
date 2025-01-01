import { read, print, println, say } from "./lib.js"

println("What's your name?")
const name = read()
print("Hello, ")
println(name)

say("Hello, ")
say(name)
