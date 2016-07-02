# Component.js
## XML/HTML component library for Javascript

The library introduces a single class


### Syntax 1
```
class MyComponent extends Component {
  render() {
    return [
      'a',
      { href: 'http://google.com' },
      'text'
    ]
  }
}

let output = Component.recursiveRender(new MyComponent)
console.log(output)
// outputs: <h1 class="red">text</h1>
```

### Syntax 2
```js
const MyComponent = () => [
  'a', {href: 'http://google.com'}, () => [
  ]
]
```

### Syntax 3
```js
const div = (props, children) => {
  tag: 'div', 
  attrs: props,
  children: children
}

// now we can create "div" elements using: div(<{}:props>, <[]:children>)
```

Components are composable
```js
// MyComponent.js
module.exports = () => {
  div({class: 'saada'}, [
    h1({}, 'Text1'),
    div({}, [
      h2({}, 'Text2')
    ])
  ])
}
```

You can render your component by calling
```js
const {render} = require('Component')
const MyComponent = require('./MyComponent')

render(MyComponent())
```
Output
```html
<div class="saada">
  <h1>Text1</h1>
  <div>
    <h2>Text2</h2>
  </div>
</div>
```

Let's add some props to make the text customizable
```js
// MyComponent.js
module.exports = (props = {}) => {
  div({class: 'saada'}, [
    h1({}, 'Text1'),
    div({}, [
      h2({}, 'Text2')
    ])
  ])
}
```
