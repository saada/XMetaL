let Component = require('./Component')

class Component1 extends Component {
    render() {
        return [
            'a', 
            {
                href: 'http://google.com',
                name: this.props.name
            },
            this.children
        ]
    }
}

class Component2 extends Component {
    render() {
        return [
            'div',
            null,
            [
                ['h3', null, null],
                [new Component1, {name: 'parent'}, [
                    [new Component1, {name: 'child'}],
                    [new Component1],
                    [new Component3],
                    [new Component3, {whatever: 'value'}],
                    [new Component3, {}, [
                        [new Component1]
                    ]],
                ]],
                ['a', {
                    href: 'http://google.com'
                }],
                [new Component1],
            ]
        ]
    }
}

class Component3 extends Component {
    render() {
        return [
            'div',
            this.props,
            this.children
        ]
    }
}

class MyComponent extends Component {
  render() {
    return [
      'h1',
      { class: 'red' },
      'text'
    ]
  }
}

Component.recursiveRender(new MyComponent)

const l = console.log
l(Component.recursiveRender(new MyComponent))
// l(Component.recursiveRender(new Component2))