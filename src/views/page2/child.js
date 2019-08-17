import React, { Component } from 'react';

class ChildPage extends Component {
    constructor(props) {
        super(props);  //调用父类的构造函数，
        this.state = {}
    }
    render() {
        return (
            <div>
                我是子页面
            </div>
        )
    }
}

export default ChildPage;