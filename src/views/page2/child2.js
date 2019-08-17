import React, { Component } from 'react';

class ChildPage2 extends Component {
    constructor(props) {
        super(props);  //调用父类的构造函数，
        this.state = {}
    }
    render() {
        return (
            <div>
                我是子页面2
            </div>
        )
    }
}

export default ChildPage2;