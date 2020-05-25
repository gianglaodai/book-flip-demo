import React from "react";
import "./App.css";
import "./App.css";
// import Editor from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import {Editor} from '@tinymce/tinymce-react';
import FroalaEditor from "react-froala-wysiwyg";

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
    console.log(this.state.preview);
    if (!this.state.preview) {
      return (
        <div class="flex-container">
          <div class="editor-view">
            <FroalaEditor
                tag='textarea'
                config={{placeholderText: 'Edit your content here!', charCounterCount: true }}
                model={this.state.pages[this.state.pageIndex]}
                onModelChange={data=>this.setState(prevState => {
                    const pages = [...prevState.pages];
                    pages[prevState.pageIndex] = data;
                    return {...prevState,pages};
                })}
            />
          </div>
          <div class="center">
            <button class="center_button" onClick={this.previousHandle}>
              Previous
            </button>
            <button class="center_button" onClick={this.nextHandle}>
              Next
            </button>
            <button class="center_button" onClick={this.previewHandle}>
              Preview
            </button>
          </div>
          <div class="right">
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
