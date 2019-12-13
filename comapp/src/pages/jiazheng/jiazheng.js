import React, { Component } from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import JiazhengList from '../jiazhengList/jiazhengList'
import JiazhengDetail from '../jiazhengDetail/jiazhengDetail'
import JiazhengHome from '../jaizhengH/jiazhengHome'
export default class Parent extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/index/jiazheng/jiazhengHome" component={JiazhengHome}></Route>
                    <Route path="/index/jiazheng/jiazhengList/:type" component={JiazhengList}></Route>
                    <Route path="/index/jiazheng/jiazhengDetail/:id" component={JiazhengDetail}></Route>
                    <Redirect to="/index/jiazheng/jiazhengHome"></Redirect>
                </Switch>
            </div>
        )
    }
}