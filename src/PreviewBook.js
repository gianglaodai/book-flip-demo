import React, { Component } from "react";
import $ from "jquery";
import "turn.js";
import pageFlip from "./page-flip-01a.wav";
import { Parser } from "html-to-react";

class PreviewBook extends Component {
  componentDidMount() {
    this.$el.turn({
      width: 800,
      height: 600,
      autoCenter: true,
      display: "double",
      acceleration: true,
      elevation: 200,
      duration: 2000,
      gradients: true,
      turnCorners: "tl,tr",
    });

    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    // this.$el
    //     .turn("destroy")
    //     .remove();
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 37) {
      this.$el.turn("previous");
    }
    if (event.keyCode === 39) {
      this.$el.turn("next");
    }
  };

  render() {
    const parser = new Parser();
    const pages = this.props.data
      .map((page, index) => (
        <div style={{ backgroundColor: "white" }} key={index} dangerouslySetInnerHTML={{__html:page}}>
        </div>
      ));
    console.log(pages);
    return (
      <div class="book">
        <div ref={(el) => (this.$el = $(el))}>
          <div style={{ backgroundColor: "white" }}>Start</div>
          {pages}
          <div style={{ backgroundColor: "white" }}>End</div>
        </div>
      </div>
    );
  }
}

export default PreviewBook;
