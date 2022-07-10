import * as lexer      from "./lexer.js";
import * as parser     from "./parser.js";
import * as emitter    from "./emitter.js";
import * as x64        from "./x64.js";
import * as javascript from "./javascript.js";

import * as output from "./output.js";

// Compile the input code.
export function start(source, target)
{
    // Lex the input code.
    const tokens = lexer.lex(source);
    // output.writeln("-- TOKENS --");
    // output.writeln(tokens);

    // Parse the tokens.
    const nodes = parser.parse(tokens);
    // output.writeln("\n-- NODES --");
    // output.writeln(nodes);

    // Emit IR from nodes.
    const ir = emitter.emit(nodes);
    // output.writeln("\n-- IR --");
    // output.writeln(ir);

    // Emit target code.
    if (target == "javascript")
    {
        const js = javascript.emit(ir);
        output.write(js);
        output.writeln("\nEvaluated code:");
        output.write(`\nReturn code: ${eval(js)}`);
    }
    else 
    {
        const x64_text = x64.emit(ir);
        output.write(x64_text);
    }

    return true;
}