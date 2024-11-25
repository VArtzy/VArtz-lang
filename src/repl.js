import { parseAndEvaluate } from './parse-and-evaluate.js'
import repl from 'node:repl'

function myEval(cmd, context, filename, callback) {
  callback(null, parseAndEvaluate(cmd))
}

export default () => repl.start({ prompt: '$ ', input: process.stdin, output: process.stdout, eval: myEval })
