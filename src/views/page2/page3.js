import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Page3 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h2>List Page</h2>
                <ul>
                    <li> <Link to="/index">首页</Link> </li>
                    <li><Link to="/page2">子页面</Link> </li>
                    <li><Link to="/page3/123">传参的子页面</Link> </li>
                </ul>
            </div>
        );
    }
    componentDidMount() {
        console.log(this.props.match)
    }
}

export default Page3;