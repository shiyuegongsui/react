import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from '@/utils/asyncComponent'

const index = asyncComponent(() => import("@/views/index/index"))
const page2 = asyncComponent(() => import("@/views/page2/page2"))
const page3 = asyncComponent(() => import("@/views/page2/page3"))



export default class RouteConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/index" exact component={index} />
                    <Route path="/page2" component={page2} />
                    <Route path="/page3/:id" component={page3} />

                    <Redirect exact from='/' to='/index' />
                </Switch>
            </HashRouter>
        )
    }
}