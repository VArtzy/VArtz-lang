#!/usr/bin/env node

import { parseAndEvaluate } from '../src/parse-and-evaluate.js'
import repl from '../src/repl.js'

import fs from 'fs'

const [command, ...args] = process.argv.slice(2)

if (!command) {
    repl() 
} else if (command.toLowerCase() === 'exec') {
    fs.readFile(args[0], 'utf-8', (error, file) => {
        if (error) console.error(error)
        const result = parseAndEvaluate(file)
        console.log(result)
    })
}
