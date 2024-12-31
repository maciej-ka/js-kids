### Js for kids
Read, write and say a string as simple as possible.  
Made for teaching kids programming.  
- no long method invocations
- no async/await

#### Example
```javascript
import { read, print, println, say } from "./lib.js"

println('What's your name?')
const name = read()
print('Hi, ')
println(name)
```
