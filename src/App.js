import React from 'react';
import './App.css';
import "./App.css"
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Page from "./Page";
import PreviewBook from "./PreviewBook";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [""],
            pageIndex: 0,
            preview: false
        }
    }

    previousHandle = event => this.setState(prevState => ({pageIndex: prevState.pageIndex - 1}));

    nextHandle = event => this.setState(prevState => {
        const newPages = [...prevState.pages];
        const newPageIndex = prevState.pageIndex + 1;
        newPages[newPageIndex] = newPages[newPageIndex] || '';
        return {
            pages: newPages,
            pageIndex: newPageIndex
        };
    });

    previewHandle = event => this.setState(prevState => ({preview: !prevState.preview}));

    render() {
        console.log(this.state.preview);
        if (!this.state.preview) {
            return (
                <>
                    <CKEditor
                        editor={ClassicEditor}
                        data={this.state.pages[this.state.pageIndex]}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            this.setState(prevState => {
                                const pages = [...prevState.pages];
                                pages[prevState.pageIndex] = data;
                                this.setState({pages});
                            });
                        }}/>

                    <button onClick={this.previousHandle}>Previous</button>
                    <button onClick={this.nextHandle}>Next</button>
                    <button onClick={this.previewHandle}>Preview</button>
                    <Page data={this.state.pages[this.state.pageIndex]}/>
                </>
            );
        }
        return (
            <>
                <button onClick={this.previewHandle}>Back</button>
                <PreviewBook data={this.state.pages}/>
            </>
        );
    }
}

export default App;
