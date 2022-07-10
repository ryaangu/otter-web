// Emit IR from nodes.
export function emit(nodes)
{
    const ir        = [];
    const reg_stack = [];
    let   reg       = 0;

    for (let i = 0; i < nodes.length; ++i)
    {
        const node = nodes[i];

        if (node.kind == "ADD")
        {
            ir.push({ kind: "ADD", register: reg++, left: reg_stack.pop(), right: reg_stack.pop() });
            reg_stack.push(reg - 1);
        }
        else if (node.kind == "STDOUT")
            ir.push({ kind: "STDOUT", register: reg_stack.pop() });
        else if (node.kind == "NUMBER")
        {
            ir.push({ kind: "ASS", register: reg++, value: node.value });
            reg_stack.push(reg - 1);
        }
    }

    // implicit return
    if (reg_stack.length == 0)
    {
        ir.push({ kind: "ASS", register: reg++, value: 0 });
        reg_stack.push(reg - 1);
    }

    ir.push({ kind: "RET", register: reg_stack.pop() });

    return ir;
}