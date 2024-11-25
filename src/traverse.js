const traverseNode = ({ node, parent, visitor }) => {
    const methods = visitor[node.type]
    if (methods && methods.enter) methods.enter({ node, parent })
    if (node.arguments) traverseArray({ array: node.arguments, parent: node, visitor })
    if (methods && methods.exit) methods.exit({ node, parent })
}

const traverseArray = ({ array, parent, visitor }) => {
    for (let i = 0; i < array.length; i++) {
        traverseNode({ node: array[i], parent, visitor })
    }
}

export default (node, visitor) => traverseNode({ node, visitor })
