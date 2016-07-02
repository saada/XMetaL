const {createComponent} = require('./Component')

const htmlTags = [
  'a',
  'i',
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'li',
  'div',
]

// create methods for all html tags
let HTML = {}
htmlTags.forEach((tag) => {
  HTML[tag] = createComponent(tag)
})

module.exports = HTML