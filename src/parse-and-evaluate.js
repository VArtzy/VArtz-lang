import evaluate from "./evaluate.js";
import transform from "./transform.js";
import parse from "./parse.js";
import tokenize from "./tokenize.js";

const parseAndEvaluate = (cmd) => evaluate(transform(parse(tokenize(cmd))))

export { parseAndEvaluate }
