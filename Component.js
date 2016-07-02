module.exports = {
  createComponent: (tag) => (props = {}, children = []) => {
    return {
      tag: tag,
      props: props,
      children: children
    }
  },
  render: (rootNode) => {
    // switch(typeof rootNode) {
    //   case 'undefined':
    //     console.log('undefined')
    //     break;
    // }
    

    return rootNode
  }
}