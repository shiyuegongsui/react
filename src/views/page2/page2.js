import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'

import asyncComponent from '@/utils/asyncComponent';
const child = asyncComponent(() => import("@/views/page2/child"))
const child2 = asyncComponent(() => import("@/views/page2/child2"))


class Page2 extends Component {
    constructor(props) {
        super(props);  //调用父类的构造函数，
        this.state = {}
    }
    render() {
        return (
            <div>
                我是页面2
                <ul>
                    <li> <Link to="/index">首页</Link> </li>
                    <li><Link to="/page2">子页面</Link> </li>
                    <li><Link to="/page3/123">传参的子页面</Link> </li>

                    <li><Link to="/page2/child2">子页面啦22</Link> </li>
                </ul>
                <BrowserRouter>
                    <Switch>
                        <Route path="/page2/child" component={child} />
                        <Route path="/page2/child2" component={child2} />
                        <Redirect exact from='/page2' to='/page2/child' />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Page2;