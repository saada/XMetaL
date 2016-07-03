const {div, h1, h2} = require('../Html')
const {render} = require('../xmetal')

const App = (props, children = []) => {
  return div({ 
    style: {
      margin: '0'
    }
  }, [
    h1({}, props.header),
    h2({}, props.subheader),
  ])
}

document.getElementById('app').innerHTML = render(App({
  header: 'App Title',
  subheader: 'Subheader'
}))