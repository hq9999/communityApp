import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Index from './pages/index/index'
// import Home from './pages/home/home'
// import Jiajiao from './pages/jiajiao/jiajiao'
// import Jiazheng from './pages/jiazheng/jiazheng'
// import Community from './pages/community/community'
// import Collect from './pages/collect/collect'
// import Messages from './pages/messages/messages'
// import Push from './pages/push/push'
// import User from './pages/user/user'
// import Water from './pages/water/water'
// import Weixiu from './pages/weixiu/weixiu'

export default class Parent extends Component {
  endY = 0;
  start(e) {
    this.endY = 0;
  }
  move(e) {
    this.endY = e.touches[0].clientY;
  }
  end(e) {
    if (this.endY !== 0) {
      // e.stopPropagation();
    }
  }
  end(e) {
    if (this.endX !== 0) {
      // e.stopPropagation();
    }
  }
  render() {
    return (
      <div onTouchStartCapture={(e) => this.start(e)}
        onTouchMoveCapture={(e) => this.move(e)}
        onTouchEndCapture={(e) => this.end(e)}
      >
        {/* <router-view></router-view> */}

        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/index" component={Index}></Route>
          <Route path="/register" component={Register}></Route>
          <Redirect to="/login"></Redirect>
        </Switch>
      </div>
    )
  }
}