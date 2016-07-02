// Component Lib
class Component {
    constructor(props, children) {
        this.props = props;
        this.children = children;
    }
    static recursiveRender(tag, attrs, children, depth = 0) {
        if (typeof tag == 'undefined' || tag.length == 0)
            throw 'missing html tag'

        // if attrs are passed, format string for current tag
        let renderedAttrs = this.renderAttrs(attrs)

        // if children are passed, recursively render them and concatenate them under current tag
        let renderedChildren = this.renderChildren(children, depth)

        // every tag except the first one should have an endline in front of it
        let firstEndline = depth > 0 ? '\n' : ''

        // output spacing per nesting level
        let spacing = ''
        for (let i = 0; i < depth; i++) {
            spacing += '  '
        }

        // add extra endline if element has children
        let lastEndline = renderedChildren == '' ? '' : ('\n' + spacing)

        // if element is a component, we call its render() method and go deeper
        if (tag instanceof Component) {
            let componentName = tag.constructor.name
            tag.props = attrs || {}
            tag.children = children || []
            let elements = tag.render()
            elements[3] = depth //pass depth into component render call
            
            return `${spacing}${this.recursiveRender(...elements)}`
        }

        return `${firstEndline}${spacing}<${tag}${renderedAttrs}>${renderedChildren}${lastEndline}</${tag}>`
    }

    static renderAttrs(attrs) {
        if (attrs && typeof attrs == 'object' && Object.keys(attrs).length) {
            return ' ' + Object.keys(attrs)
                .filter((key) => attrs[key])    // filter out undefined values
                .map((key) => `${key}="${attrs[key]}"`).join(' ')
        }
        return ''
    }

    static renderChildren(children, depth) {
        if (children && typeof children == 'object' && children.length) {
            return children
                // .filter((child) => child) 
                .map((child) => {
                    child[3] = depth + 1
                    return this.recursiveRender(...child)
                }).join('')
        }

        return ''
    }
}

module.exports = Component