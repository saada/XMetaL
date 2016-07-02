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
const NestedDivs = () => {
  div({name: 'saada'}, [
    h1({}, 'Text1'),
    div({}, [
      h2({}, 'Text2')
    ])
  ])
}
```

By convention, it's recommended to use CapitalizedCamelCasing when writing your own components.