// code{
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser} from "prosemirror-model"
// https://github.com/ProseMirror/prosemirror-schema-basic/blob/master/src/schema-basic.js
import {schema} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"
import {exampleSetup} from "prosemirror-example-setup"

// Mix the nodes from prosemirror-schema-list into the basic schema to
// create a schema with list support.
const mySchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block")
         .addToStart("title", {attrs: {placeholder: {default: true}},
                               content: "inline*",
                               parseDOM: [{tag: "h1"}],
                               toDOM: function(node){
                                        return ["h1", {class: "nextjournal-title"},
                                                ["span", {style: "border-bottom: 1px dashed magenta;"}, 0]];
                                      }})
         .update("doc", {content: "title{1} block*"}),
  marks: schema.spec.marks
})

window.view = new EditorView(document.querySelector("#editor"), {
  state: EditorState.create({
    doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),
    plugins: exampleSetup({schema: mySchema})
  })
})
// }
