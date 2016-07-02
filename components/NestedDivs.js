const {div, h1} = require('../Html')

module.exports = (props = {}, children = []) => {
  return div({name: 'Mahmoud'}, [
    div({}, 'Text1'),
    div({}, [
      h1({}, 'Text2'),
    ]),
    h1({}, 'Text3')
  ])
}