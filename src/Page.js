import React, {Component} from 'react';
import $ from "jquery";
import 'turn.js';
import {Parser} from 'html-to-react';

class Page extends Component {
    componentDidMount() {
        this.$el.turn({
            width: 400,
            height: 600,
            autoCenter: true,
            display: "single" ,
            acceleration: true,
        });
    }

    render() {
        const parser = new Parser();
        const reactElement = parser.parse(this.props.data);
        return (
            <div ref={el => this.$el = $(el)}>
                <div style={{backgroundColor: 'white'}}>
                    {reactElement}
                </div>
            </div>
        );
    }
}

export default Page;