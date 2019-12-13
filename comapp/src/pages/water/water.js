import React, { Component } from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import WaterList from '../waterList/waterList'
import WaterDetail from '../waterDetail/waterDetail'
export default class Parent extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/index/water/waterList" component={WaterList}></Route>
                    <Route path="/index/water/waterDetail/:id" component={WaterDetail}></Route>
                    <Redirect to="/index/water/waterList"></Redirect>
                </Switch>
            </div>
        )
    }
}