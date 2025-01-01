### Javascript (Node) for kids
Read, write and say a string as simple as possible.  
Made for teaching young kids programming.  
- minimal method calls
- only synchronous

#### Example
```javascript
import { read, print, println, say } from "./lib.js"

println("What's your name?")
const name = read()
print("Hello, ")
println(name)

say("Hello, ")
say(name)
```

#### Run
```bash
git clone https://github.com/maciej-ka/js-kids.git
cd js-kids
npm i
node ./program.js
```

#### Requirements
Node 12 or higher  
OSX to run `say`

