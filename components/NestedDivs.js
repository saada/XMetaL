const {div, h1} = require('../Html')
const Header = require('./Header')

module.exports = (props = {}, children = []) => {
  return div({name: 'Mahmoud'}, [
    div({}, 'Text1'),
    div({}, [
      h1({}, [
        h1({name: props.name}),
        h1({}, [
          Header({name: props.name})
        ]),
        h1({}, children),
      ]),
    ]),
    h1({}, 'Text3')
  ])
}