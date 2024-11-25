import traverse from "./traverse.js"

export default (node) => {
    traverse(node, {
        CallExpression: {
            enter({ node }) { if (syntax[node.name]) syntax[node.name](node) }
    }})
    return node
}

const syntax = {
    dec(node) {
        const [identifier, val] = node.arguments 
        if (identifier.type !== 'Identifier') throw new TypeError('Left side of declaration must be an identifier')
        if (val === undefined) throw new TypeError('Right side of declaration must be an expression')
        node.type = 'VariableDeclaration'
        node.identifier = identifier
        node.val = val
        delete node.name
        delete node.arguments
    } 
}
