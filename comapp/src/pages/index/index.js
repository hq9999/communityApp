import React, { Component } from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import Home from '../home/home'
import Jiajiao from '../jiajiao/jiajiao'
import Jiazheng from '../jiazheng/jiazheng'
import Community from '../community/community'
import Collect from '../collect/collect'
import Messages from '../messages/messages'
import Push from '../push/push'
import User from '../user/user'
import Water from '../water/water'
import Weixiu from '../weixiu/weixiu'
export default class Parent extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/jiajiao" component={Jiajiao}></Route>
                    <Route path="/index/jiazheng" component={Jiazheng}></Route>
                    <Route path="/index/community" component={Community}></Route>
                    <Route path="/index/collect" component={Collect}></Route>
                    <Route path="/index/messages" component={Messages}></Route>
                    <Route path="/index/push" component={Push}></Route>
                    <Route path="/index/user" component={User}></Route>
                    <Route path="/index/water" component={Water}></Route>
                    <Route path="/index/weixiu" component={Weixiu}></Route>
                    <Redirect to="/index/home"></Redirect>
                </Switch>
            </div>
        )
    }
}