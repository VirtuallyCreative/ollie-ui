# .editorconfig

Here's the editor config that I typically use. Yes, I'm choosing tabs, but hey, if you prefer spaces, we can still be friends, I guess...

Unless you start preaching to me.

## Config Setup

```
root = true

[*]
indent_style = tab
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

Ollie enforces a four-space indentation (tab) style, the end-of-line should use a line feed, and we will be trimming white space and inserting a final newline automatically with the provided `.editorconfig`.
