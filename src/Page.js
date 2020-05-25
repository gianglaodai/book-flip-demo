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
    const parser = new Parser();
    const reactElement = parser.parse(this.props.data);
    return (
      <div class="page">
        <div class="page-content" ref={(el) => (this.$el = $(el))}>
          <div class="page-content" >{reactElement}</div>
        </div>
      </div>
    );
  }
}

export default Page;
