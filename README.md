# :metal: XMetaL :metal:
## XML/HTML functional component library for Javascript

Designed to work with any XML-based markup and can run both in the browser and on Node.

XMetaL is heavily influenced by React and tries to remove a lot of the tooling overhead. 
It allows you to get up and running quickly with minimal changes on your end.

### Why another view library?
* Pure functional Javascript
* Scalable abstraction
* No tooling required
* No dependencies
* No JSX, while still keeping markup easy to write
* Can work with any XML markup, not just HTML
* Server-side rendering just works

### HTML helper
HTML is probably the most popular XML-based language. 
Therefore, baked into XMetaL is a helper with a list of primitive html components.
To use those primitives, simply run
```js
const {h1, h2, div} = require('./Html')
```
Behind the scenes, the HTML helpers creates components using the `createComponent` function.
You can create your own primitives based on the XML language in your domain.
```js
const { createComponent } = require('xmetal')
const div = createComponent('div')
```
### Writing a component

Let's create a component called MyComponent that is represented by a pure function that returns another component.
```js
// MyComponent.js
const {div} = require('./Html')
module.exports = () => div({class: 'saada'})
```


Components are composable and can be combined together to form larger components. 
Let's add more components to our previous example.
```js
// MyComponent.js
const {h1, h2, div} = require('./Html')

module.exports = () => 
  div({class: 'saada'}, [
    h1({}, 'Text1'),
    div({}, [
      h2({}, 'Text2')
    ])
  ])
```

You can render your component by calling
```js
const {render} = require('xmetal')
const MyComponent = require('./MyComponent')

const output = render(MyComponent())
console.log(output)
```

output
```html
<div class="saada">
  <h1>Text1</h1>
  <div>
    <h2>Text2</h2>
  </div>
</div>
```
## Props

Let's add some props to make the text customizable
```js
// MyComponent.js
const {h1, h2, div} = require('./Html')

module.exports = (props) => 
  div({class: props.class}, [
    h1({}, props.header),
    div({}, [
      h2({}, props.subHeader)
    ])
  ])
```
Let's call render
```js
const {render} = require('xmetal')
const MyComponent = require('./MyComponent')

const output = render(MyComponent({
  class: 'red', 
  header: 'Header', 
  subHeader: 'Subheader'
}))
console.log(output)
```

output
```html
<div class="red">
  <h1>Header</h1>
  <div>
    <h2>Subheader</h2>
  </div>
</div>
```

### Children

Along with props, components take a second parameter of children which can be an array or a string.
Strings are output directly inside the element by default and arrays are treated as child components.
Let's say we want to pass an array of users and display a list of users. 
```js
// User.js
module.exports = (props) => li({}, `${props.firstname} ${props.lastname}`)

// UserList.js
const {ul} = require('./Html')
module.exports = (props = {}, children = []) => ul(props, children)

// index.js
const users = [
  { firstname: 'Gandalf', lastname: 'The Grey' },
  { firstname: 'Michael', lastname: 'Jackson' }
]

const {render} = require('xmetal')
const UserList = require('./UserList')
const User = require('./User')

const output = render(UserList({}, users.map((user) => User)))
console.log(output)
```
output
```html
<ul>
  <li>Gandalf The Grey</li>
  <li>Michael Jackson</li>
</ul>
```

### Add Logic
Now let's say we wanted to add some logic to the previous example. We can do so by adding more functions in our component file.
Let's say we wanted to lowercase user first names and uppercase user last names.
```js
// User.js
const formatUserName = (user) => {
  user.firstname = user.firstname.toLowerCase()
  user.lastname = user.lastname.toUpperCase()
}

module.exports = (props) => {
  let user = formatUserName(props)
  return li({}, `${user.firstname} ${user.lastname}`)
}
```

TODO:
- [ ] Examples with CSS
- [ ] Examples with browser routing
- [ ] Examples with async calls
- [ ] DOM Examples
- [ ] DOM diffing
- [ ] Cross browser support
