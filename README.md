# Component.js
## XML/HTML component library for Javascript

The library introduces a single class

Components are composable
```js
// MyComponent.js
const {h1, h2, div} = require('./Html')
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
module.exports = (props) => {
  div({class: props.class}, [
    h1({}, props.header),
    div({}, [
      h2({}, props.subHeader)
    ])
  ])
}
```
You can render your component by calling
```js
const {render} = require('Component')
const MyComponent = require('./MyComponent')

render(MyComponent({
  class: 'red', 
  text1: 'Header', 
  text2: 'Subheader'
}))
```