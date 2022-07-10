// Lex source code.
export function lex(source)
{
    const tokens = [];

    let start    = 0;
    let current  = 0;
    let line     = 1;
    let column   = 1;
    let skip     = true;

    while (current < source.length)
    {
        while (skip)
        {
            switch (source.charAt(current))
            {
                case '\r':
                case '\t':
                case ' ' :
                {
                    ++current;
                    ++column;
                    break;
                }

                case '\n':
                {
                    current += 1;
                    line    += 1;
                    column   = 1;
                    break;
                }

                default:
                {
                    skip = false;
                    break;
                }
            }
        }

        start = current;
        ++current;

        let character = source.charAt(current - 1);

        if (character >= '0' && character <= '9')
        {
            character = source.charAt(current);

            while (character >= '0' && character <= '9')
                character = source.charAt(++current);

            if (character == ".")
            {
                character = source.charAt(++current);

                while (character >= '0' && character <= '9')
                    character = source.charAt(++current);
            }

            tokens.push({ kind: "NUMBER", value: parseFloat(source.substring(start, current)) });
        }
        else if (character == "+")
            tokens.push({ kind: "PLUS" });
        else if (character == ".")
            tokens.push({ kind: "DOT" });

        skip = true;
    }

    tokens.push({ kind: "EOF" });
    return tokens;
}