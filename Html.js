const {createComponent} = require('./xmetal')

const htmlTags = [
  'a',
  'b',
  'i',
  'p',
  'br',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hr',
  'li',
  'ol',
  'ul',
  'div',
  'html',
  'head',
  'body',
  'link',
  'script',
  'style',
  'footer',
  'form',
  'label',
  'span',
  'table',
  'header',
  'main',
  'section',
  'strong',
  'template',
  'aside',
  'details',
  'dialog',
  'summary',
  'meta',
  'base',
  'noscript',
  'embed',
  'object',
  'param',
]

// create methods for all html tags
let HTML = {}
htmlTags.forEach((tag) => {
  HTML[tag] = createComponent(tag)
})

module.exports = HTML