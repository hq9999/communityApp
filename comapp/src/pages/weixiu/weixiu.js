import React, { Component } from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import WeixiuList from '../weixiuList/weixiuList'
import WeixiuDetail from '../weixiuDetail/weixiuDetail'
export default class Parent extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/index/weixiu/weixiuList" component={WeixiuList}></Route>
                    <Route path="/index/weixiu/weixiuDetail/:id" component={WeixiuDetail}></Route>
                    <Redirect to="/index/weixiu/weixiuList"></Redirect>
                </Switch>
            </div>
        )
    }
}