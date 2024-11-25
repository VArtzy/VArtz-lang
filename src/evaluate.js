import environment from './standart-library.js'
const last = collection => collection[collection.length - 1]

const apply = (node) => {
    const fn = environment[node.name]
    const args = node.arguments.map(evaluate)
    if (typeof fn !== 'function') throw new TypeError(`${node.name} is not a function`)
    return fn(...args)
}

const isIdentifier = (node) => {
    if (environment[node.name]) return environment[node.name]
    throw new ReferenceError(`${node.name} is not defined`)
}

const declare = (node) => {
    environment[node.identifier.name] = node.val.val
    return environment[node.identifier.name]
}

const evaluate = (node) => {
    if (node.type === 'VariableDeclaration') return declare(node)
    if (node.type === 'CallExpression') return apply(node)
    if (node.type === 'Identifier') return isIdentifier(node)
    if (node.val) return node.val
}

export default evaluate
