!{"template": "example", "title": "ProseMirror Copy Paste Issues in Title"}

# Copy Paste Issues

Minimal schema with a **title node** on top of the basic schema to reproduce copy paste issues listed in the editor below. In short: _certain doc slices cannot be pasted into the title node_.

We assume it's an issue related to [fitting the copied slice into the target selection](https://github.com/ProseMirror/prosemirror-transform/blob/1.2.2/src/replace.js#L18-L21). This is the relevant schema with a title node:

PART(code)

The Title node will be _underlined in dashed magenta_:

@HTML
