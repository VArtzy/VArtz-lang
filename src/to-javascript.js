const generate = (ast) => {
    const nodeType = ast.type
    const nodeGenerator = generators[nodeType]
    return nodeGenerator(ast)
}

const generators = {
    Program: (node) => node.body.map(generate).join('\n'),
    NumericLiteral: (node) => node.val,
    StringLiteral: (node) => `"${node.val}"`,
    CallExpression: (node) => `${node.name}(${node.arguments.map(generate).join(', ')})`,
    VariableDeclaration: (node) => `let ${node.identifier.name} = ${generate(node.val)};`
}

export default (ast) => generate(ast)
