import React, { Component } from "react";
import $ from "jquery";
import "turn.js";
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';

class Page extends Component {
  componentDidMount() {
    this.$el.turn({
      width: 600,
      height: 800,
      autoCenter: true,
      display: "single",
      acceleration: true,
    });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content" ref={(el) => (this.$el = $(el))}>
          <div className="page-content">
            <FroalaEditorView model={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
