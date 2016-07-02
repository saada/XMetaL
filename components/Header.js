const {h1} = require('../Html')

module.exports = (props = {}, children = []) => {
  return h1({name: props.name})
}