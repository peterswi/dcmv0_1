
import React, {Component} from 'react';
import { Editor } from '@tinymce/tinymce-react';

import 'bulma/css/bulma.css'
import './sass/mystyles.scss'
import { db } from '../firestore'
import * as firebase from 'firebase'

class TextEditor extends Component {

  constructor (props) {
    super(props);
    this.state = {
      editorContent:''
    };
  }
  /*
   handleEditorInit = () => {
    this.setState({
      editorContent:someinitialcontent
    })
  }

   */

  handleEditorChange = (e) => {
    const content=e.target.getContent()
    console.log(
      'Content was updated:',
      content
    );
    this.setState({
      content: content
    })
    // localStorage.setItem('content',content)
  }
// NEXT STEP WOULD BE TO INCLUDE LOCAL STORAGE IN THE PROCESS

  dbSave = () => {
// now need to figure out how to get data
    // localStorage.getItem('content')
    console.log('save init', this.state.content)
    let org=db.collection("organizations").doc("CityMission")
    const arrayU= firebase.firestore.FieldValue.arrayUnion

    org.update({
      content: arrayU(this.state.content)
    }).then(function(){
      console.log("successfully uploaded")
    })
      .catch(function(error){
        console.error('Error writing doc', error)
      })

  }

  render() {
    // const apikey = process.env.REACT_APP_apiKey
    const init="<p>Write something here....</p>"
    return (

      <Editor
        apiKey='lmt33nrn4brxj7jf3rvnrd5gs24qwm9243oi78c7pjxd9vcq'
        initialValue={init}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount',
            'save'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help\
            save',
          save_onsavecallback: this.dbSave
        }}
        onChange={this.handleEditorChange}
        onSubmit={this.dbSave}


      />



    )
  }
}

export default TextEditor;