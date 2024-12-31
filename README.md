### Js for kids
Tiny lib to read, write and say as simple as possible.
Meant to introduce kids to programming without a need of:
- long method invocations
- async/await

#### Example
```javascript
import { read, print, println, say } from "./lib.js"

println('What's your name?')
const name = read()
print('Hi, ')
println(name)
```
