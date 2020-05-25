import React from "react";
import "./App.css";
import "./App.css";
// import Editor from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import {Editor} from '@tinymce/tinymce-react';
import FroalaEditor from "react-froala-wysiwyg";
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min';

import Page from "./Page";
import PreviewBook from "./PreviewBook";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [""],
      pageIndex: 0,
      preview: false,
    };
  }

  previousHandle = (event) =>
    this.setState((prevState) => ({ pageIndex: prevState.pageIndex - 1 }));

  nextHandle = (event) =>
    this.setState((prevState) => {
      const newPages = [...prevState.pages];
      const newPageIndex = prevState.pageIndex + 1;
      newPages[newPageIndex] = newPages[newPageIndex] || "";
      return {
        pages: newPages,
        pageIndex: newPageIndex,
      };
    });

  previewHandle = (event) =>
    this.setState((prevState) => ({ preview: !prevState.preview }));

  render() {
    if (!this.state.preview) {
      return (
        <div className="flex-container">
          <div className="editor-view">
            <FroalaEditor
                base='https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.3.4'
                tag='textarea'
                config={{placeholderText: 'Edit your content here!', charCounterCount: true,
                    toolbarButtons: ['bold','italic','underline','strikeThrough','subscript','superscript','fontFamily','align'],
                    pluginsEnabled: ['fontFamily','align'],
                }}
                model={this.state.pages[this.state.pageIndex]}
                onModelChange={data=>this.setState(prevState => {
                    const pages = [...prevState.pages];
                    pages[prevState.pageIndex] = data;
                    return {...prevState,pages};
                })}
            />
          </div>
          <div className="center">
            <button className="center_button" onClick={this.previousHandle}>
              Previous
            </button>
            <button className="center_button" onClick={this.nextHandle}>
              Next
            </button>
            <button className="center_button" onClick={this.previewHandle}>
              Preview
            </button>
          </div>
          <div className="right">
            <Page data={this.state.pages[this.state.pageIndex]} />
          </div>
        </div>
      );
    }
    return (
      <>
        <button onClick={this.previewHandle}>Back</button>
        <PreviewBook data={this.state.pages} />
      </>
    );
  }
}

export default App;
