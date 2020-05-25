import React, { Component } from "react";
import $ from "jquery";
import "turn.js";
import { Parser } from "html-to-react";

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
      <div class="page">
        <div class="page-content" ref={(el) => (this.$el = $(el))}>
          <div class="page-content" dangerouslySetInnerHTML={{__html:this.props.data}}></div>
        </div>
      </div>
    );
  }
}

export default Page;
