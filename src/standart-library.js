const all = fn => (...list) => list.reduce(fn)

const add = all((a, b) => a + b)
const subtract = all((a, b) => a - b)
const multiply = all((a, b) => a * b)
const divide = all((a, b) => a / b)
const modulo = all((a, b) => a % b)
const max = (...args) => {
    if (args.length === 0) throw new Error('max requires at least one argument')
    if (args.length === 1) return args[0]
    let prev = args[0]
    for (let i = 1; i < args.length; i++) {
        if (args[i] > prev) prev = args[i]
    }
    return prev
}
const log = console.log

export default {
    add,
    subtract,
    multiply,
    divide,
    modulo,
    log,
    max,
    pi: Math.PI,
}
