// Emit x64 from IR.
export function emit(ir)
{
    let x64 = "_start:\n";

    for (let i = 0; i < ir.length; ++i)
    {
        const ins = ir[i];

        if (ins.kind == "ADD")
        {
            x64 += `    mov v${ins.register}, v${ins.right}\n`;
            x64 += `    add v${ins.register}, v${ins.left}\n`;
        }
        else if (ins.kind == "STDOUT")
        {
            x64 += `    push v${ins.register}\n`;
            x64 += `    call println\n`;
        }
        else if (ins.kind == "ASS")
            x64 += `    mov v${ins.register}, ${ins.value}\n`;
        else if (ins.kind == "RET")
        {
            x64 += `    mov eax, v${ins.register}\n`;
            x64 += "    ret\n";
        }
    }

    return x64;
}