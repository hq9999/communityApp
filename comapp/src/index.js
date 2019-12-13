import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/css/iconfont.css'
import * as serviceWorker from './serviceWorker';
import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom";
import './assets/css/reset.css'
import './assets/js/rem'
import 'antd-mobile/dist/antd-mobile.css';
import axios from 'axios'
Component.prototype.$axios = axios
//响应拦截
axios.interceptors.response.use(response => {
    console.log("-------start" + response.config.url + "-------------");
    console.log(response);
    console.log("-----------end-----------");
    if (response.data.code === -1) {
        window.open('http://localhost:3000/login',"_self")
        return {
            data:{
                data:{},
            }
        };
    }
    return response
})

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
