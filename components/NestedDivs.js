const {div, h1} = require('../Html')

module.exports = (props = {}, children = []) => {
  return div({name: 'Mahmoud'}, [
    div({}, 'Text1'),
    div({}, [
      h1({}, [
        h1({name: props.name}),
        h1(),
        h1({}, children),
      ]),
    ]),
    h1({}, 'Text3')
  ])
}