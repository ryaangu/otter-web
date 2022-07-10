// Emit JavaScript from IR.
export function emit(ir)
{
    let js = "function _start()\n{\n";

    for (let i = 0; i < ir.length; ++i)
    {
        const ins = ir[i];

        if (ins.kind == "ADD")
            js += `    let $${ins.register} = $${ins.right} + $${ins.left};\n`;
        else if (ins.kind == "STDOUT")
            js += `    output.writeln($${ins.register});\n`;
        else if (ins.kind == "ASS")
            js += `    let $${ins.register} = ${ins.value};\n`;
        else if (ins.kind == "RET")
            js += `    return $${ins.register};\n`;
    }

    js += "}\n\n_start();\n";
    return js;
}