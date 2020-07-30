//initially ripping this off straight from the SlateJs website

import React, { useCallback, useMemo, useState } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import { Editor, Transforms, createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { Button, Icon, Toolbar } from './slateComponents'
import { db } from '../firestore'

import { FormatBold, FormatItalic, FormatUnderlined, Code, FormatListNumbered, FormatQuote, FormatListBulleted, Title }  from '@material-ui/icons'
import 'bulma/css/bulma.css'
import './sass/mystyles.scss'
import * as firebase from 'firebase'



const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']

const ContentEditor = () => {

  const [value, setValue] = useState(JSON.parse(localStorage.getItem('content')) || initialValue)
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])


  /*
  //trying to save to DB


   */

  // want to figure out how to outline the textarea
  return (
    <div className="section is-outlined">
    <Slate
      editor={editor}
      value={value}
      onChange={value => {
        setValue(value)
        const content=JSON.stringify(value)
        localStorage.setItem('content', content)
      }}
    >

      <Toolbar>
        <MarkButton format="bold" icon=<FormatBold/> />
        <MarkButton format="italic" icon=<FormatItalic/> />
        <MarkButton format="underline" icon=<FormatUnderlined/> />
        <MarkButton format="code" icon=<Code/> />
        <BlockButton format="heading-one" icon=<Title fontSize="large"/> />
        <BlockButton format="heading-two" icon=<Title fontSize="default"/> />
        <BlockButton format="block-quote" icon=<FormatQuote/> />
        <BlockButton format="numbered-list" icon=<FormatListNumbered/> />
        <BlockButton format="bulleted-list" icon=<FormatListBulleted/> />
      </Toolbar>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        //update hotkey stuff
        onKeyDown={event => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event)) {
              event.preventDefault()
              const mark = HOTKEYS[hotkey]
              toggleMark(editor, mark)
            }
          }
        }}
      />
      <br/>
      <button className="button is-primary" type="submit"
              onClick={value=>{
                const upload=JSON.stringify(value)
                dbSave(upload)
                setValue(initialValue)
                }}>
        Save
      </button>
    </Slate>
    </div>
  )
}

const dbSave = (value) => {

  let org=db.collection("organizations").doc("CityMission")
  const arrayU= firebase.firestore.FieldValue.arrayUnion

  org.update({
    content: arrayU(value)
  }).then(function(){
    console.log("successfully uploaded")
  })
    .catch(function(error){
      console.error('Error writing doc', error)
    })

}

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type),
    split: true,
  })

  Transforms.setNodes(editor, {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  })

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === format,
  })

  return !!match
}

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>
    default:
      return <p {...attributes}>{children}</p>
  }
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

const initialValue = [

  {
    type: 'paragraph',
    children: [{ text: 'Add your own content here...', italic:true }],
  },
]

export default ContentEditor