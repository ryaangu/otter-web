// Get output textarea.
let output_area = document.getElementById("output");

// Clear the output textarea content.
export function clear()
{
    output_area.value = "";
}

// Write content to the output textarea.
export function write(content)
{
    // Object?
    if (typeof content == "object")
        output_area.value += JSON.stringify(content);
    else
        output_area.value += content;
}

// Write content with line at end to the output textarea.
export function writeln(content)
{
    write(content);
    write("\n");
}

// Get output textarea content.
export function read()
{
    return output_area.value;
}