// Parse tokens.
export function parse(tokens)
{
    const nodes = [];

    for (let i = 0; i < tokens.length; ++i)
    {
        const token = tokens[i];

        if (token.kind == "PLUS")
            nodes.push({ kind: "ADD" });
        else if (token.kind == "DOT")
            nodes.push({ kind: "STDOUT" });
        else if (token.kind == "NUMBER")
            nodes.push({ kind: "NUMBER", value: token.value });
    }

    return nodes;
}