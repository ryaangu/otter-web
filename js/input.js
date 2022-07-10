// Get input textarea.
let input_area = document.getElementById("code");

// Clear the input textarea content.
export function clear()
{
    input_area.value = "";
}

// Write content to the input textarea.
export function write(content)
{
    // Object?
    if (typeof content == "object")
        input_area.value += JSON.stringify(content);
    else
        input_area.value += content;
}

// Write content with line at end to the input textarea.
export function writeln(content)
{
    write(content);
    write("\n");
}

// Get input textarea content.
export function read()
{
    return input_area.value;
}