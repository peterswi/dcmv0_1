
import React, {Component} from 'react';
import { Editor } from '@tinymce/tinymce-react';

class TextEditor extends Component {

  handleEditorChange = (e) => {
    console.log(
      'Content was updated:',
      e.target.getContent()
    );
  }

  render() {
    // const apikey = process.env.REACT_APP_apiKey
    return (

      <Editor
        apiKey='lmt33nrn4brxj7jf3rvnrd5gs24qwm9243oi78c7pjxd9vcq'
        initialValue="<p>Initial content</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default TextEditor;