import { isOpeningParenthesis, isClosingParenthesis } from "./identify.js";

const parenthesize = (tokens) => {
    const token = tokens.shift()

    if (isOpeningParenthesis(token.val)) {
        const expression = []
        while(!isClosingParenthesis(tokens[0].val)) {
            expression.push(parenthesize(tokens))
        }

        tokens.shift()
        return expression
    }

    return token
}

const parse = (tokens) => {
    if (Array.isArray(tokens)) {
        const [first, ...rest] = tokens
        return {
            type: 'CallExpression',
            name: first.val,
            arguments: rest.map(parse)
        }
    }
    const token = tokens
    if (token.type === 'number') return { type: 'NumberLiteral', val: token.val }
    if (token.type === 'string') return { type: 'StringLiteral', val: token.val }
    if (token.type === 'name') return { type: 'Identifier', name: token.val }
}

export default (tokens) => parse(parenthesize(tokens))
