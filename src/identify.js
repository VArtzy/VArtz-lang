const LETTER = /[a-zA-Z]/
const WHITESPACE = /\s+/
const NUMBER = /^[0-9]+$/
const OPERATOR = /[\+\-\*\/]/

export const isLetter = c => LETTER.test(c)
export const isWhitespace = c => WHITESPACE.test(c)
export const isNumber = c => NUMBER.test(c)
export const isOpeningParenthesis = c => c === '('
export const isClosingParenthesis = c => c === ')'
export const isParanthesis = c => isOpeningParenthesis(c) || isClosingParenthesis(c)
export const isQuote = c => c === '"'
export const isOperator = c => OPERATOR.test(c)
