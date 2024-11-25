import toJavascript from "./to-javascript.js";

const ast = {
    type: 'VariableDeclaration',
    identifier: { type: 'Identifier', name: 'x' },
    val: { type: 'NumericLiteral', val: 5 }
}

console.log(toJavascript(ast));
