import * as input    from "./input.js";
import * as output   from "./output.js";
import * as compiler from "./compiler.js";

// The amount of tabs to use.
var g_tabs = 4;

// The target to compile to.
var g_target = "javascript";

// A simple event handler to handle when the button "run"
// is clicked.
document.getElementById("run").addEventListener("click", () =>
{
    // Clear output.
    output.clear();

    // Start compilation.
    if (!compiler.start(input.read(), g_target))
        alert("\nFailed to compile input.");
});

// A simple event handler to handle when the button "clear"
// is clicked.
document.getElementById("clear").addEventListener("click", () =>
{
    // Clear input and output textareas.
    input.clear();
    output.clear();
});

// A simple event handler to handle when the selection "target"
// is changed.
document.getElementById("target").addEventListener("change", (e) =>
{
    g_target = e.target.value;
});

// Handle tabbing inside input.
document.getElementById("code").addEventListener("keydown", function(e)
{
    // Make sure it's a tab.
    if (e.key != "Tab")
        return;

    // I have no idea what this does lol.
    e.preventDefault();

    // Get text position
    let start = this.selectionStart,
        end   = this.selectionEnd;

    // Get correct tab amount.
    let tabs = "";

    for (let i = 0; i < g_tabs; ++i)
        tabs += " ";

    // Add tab to textarea content.
    this.value = this.value.substring(0, start) +
                 tabs + this.value.substring(end);

    // Set text position to be correct.
    this.selectionStart = (this.selectionEnd = (start + g_tabs));
});

// Clear the output textarea.
output.clear();