import {
    isLetter,
    isWhitespace,
    isNumber,
    isParanthesis,
    isQuote
} from './identify.js'

export default (i) => {
    const tokens = []
    let cursor = 0

    while (cursor < i.length) {
        const c = i[cursor]

        if (isWhitespace(c)) {
            cursor++
            continue
        }

        if (isParanthesis(c)) {
            tokens.push({
                type: 'parenthesis',
                val: c
            })
            cursor++
            continue
        }

        if (isLetter(c)) {
            let s = c
            while (isLetter(i[++cursor])) s += i[cursor]
            tokens.push({
                type: 'name',
                val: s
            })
            continue
        }

        if (isNumber(c)) {
            let n = c
            while (isNumber(i[++cursor])) n += i[cursor]
            tokens.push({
                type: 'number',
                val: parseInt(n, 10)
            })
            continue
        }

        if (isQuote(c)) {
           let s = ''
           while (!isQuote(i[++cursor])) s += i[cursor]
            tokens.push({
                type: 'string',
                val: s
            })
            cursor++
            continue
        }

        throw new TypeError('Invalid character: ' + c)
    }

    return tokens
}
