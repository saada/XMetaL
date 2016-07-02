const renderProps = (props) => {
  if (props && typeof props === 'object' && Object.keys(props).length) {
    return ' ' + Object.keys(props)
      .filter((key) => props[key])    // filter out undefined values
      .map((key) => `${key}="${props[key]}"`).join(' ')
  }
  return ''
}

const recursiveRender = ({tag, props, children}, depth = 0) => {
  let spacing = '';
  for (let i = 0; i < depth; i++) {
    spacing += '  ';
  }

  // every tag except the first one should have an endline in front of it
  let firstEndline = depth > 0 ? '\n' : ''
  
  depth++
  
  let renderedChildren = ''
  let lastEndline = ''
  switch(typeof children) {
    case 'undefined':
      break
    case 'string':
      renderedChildren = children
      break
    default:  //object
      if (!Array.isArray(children)) {
        var err = new Error();
        throw `Non-array passed to ${tag} element`
      }
      renderedChildren = children.map((child) => {
        return recursiveRender(child, depth)
      }).join('')
    
      // add extra endline if element has children
      lastEndline = renderedChildren ? ('\n' + spacing) : ''
      break
  }



  return `${firstEndline}${spacing}<${tag}${renderProps(props)}>${renderedChildren}${lastEndline}</${tag}>`
}

module.exports = {
  createComponent: (tag) => (props = {}, children = []) => {
    return {
      tag: tag,
      props: props,
      children: children
    }
  },
  render: recursiveRender
}