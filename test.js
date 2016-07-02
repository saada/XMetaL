// alternative more verbose approach
//
// const Html = require('./Html')
// console.log(Html.h1({}. 'Text'))

const {h1, div} = require('./Html')
// console.log(h1({}, 'Text'))
// ES7 would allow us to do {...all} which would declare all html methods globally

const nestedDivs = require('./components/nestedDivs')

const {render} = require('./Component')
let l = console.log
l(render(nestedDivs({name: 'Hooda'}, [nestedDivs({name: 'okay'})])))
// l(render(h1({}, 'awesome')))