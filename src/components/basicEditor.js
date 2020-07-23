// Import React dependencies.
import React, { useEffect, useMemo, useState } from "react";
// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

import 'bulma/css/bulma.css'
import './sass/mystyles.scss'

const BasicEditor=()=>{
  const editor = useMemo(() => withReact(createEditor()), [])

  // Keep track of state for the value of the editor.
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'Welcome to the text editor...'}],
    }
  ])

  return (

    <Slate editor={editor} value={value} onChange={newValue=>setValue(newValue)}>
      <Editable/>
      <br/>
      <button className="button is-primary"> Save </button>
    </Slate>

  )

}
export default BasicEditor
