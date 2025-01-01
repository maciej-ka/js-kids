### Javascript (Node) for kids
Read, write and say a string as simple as possible.  
Made for teaching young kids programming.  
- minimal method calls
- only synchronous

#### Example
```javascript
import { print, println, say, read } from "./lib.js"

print("Hi! ")
println("What's your name?")
let name
name = read()
say("Hello, ")
say(name)
```

### Running
```bash
git clone https://github.com/maciej-ka/js-kids.git
cd js-kids
npm i
node ./program.js
```

#### Requirements
Node 12 or higher  
OSX to run `say`

### API
```javascript
print("hello")
println("hello")       // print and add new line
say("hello")           // use OSX voice synthesizer
let stars = rand(5)    // random integer from 0 to 5
let name = read()      // read as string
let number = readnum() // read as number
```

### Examples
#### Guess a number
```javascript
import { print, println, rand, readnum } from "./lib.js"

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
```

