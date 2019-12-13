import React, { Component } from 'react'
import './login.css'
import wb from '../../assets/images/wb.png'
import qq from '../../assets/images/QQ.png'
import vx from '../../assets/images/vx.png'
import { List, InputItem, Toast} from 'antd-mobile';
import {NavLink} from 'react-router-dom'
export default class Parent extends Component {
    componentDidMount() {
        Toast.loading('Loading...', 30, () => {
          console.log('Load complete !!!');
        });
    
        setTimeout(() => {
          Toast.hide();
        }, 1000);
      }
    state = {
        user: {
            name: "",
            pass: "",
            type: "2"
        }
    }
    change(props, val) {
        // console.log(val);

        let { user } = this.state;
        user[props] = val;//e.target.value;
        this.setState({
            user
        })
    }
    login() {
        // console.log(this.state.user);
        this.$axios({
            url: "/login",
            method: "post",
            data: this.state.user
        }).then(res => {
            console.log(res);
            if (res.data.isok === true) {
                localStorage.setItem("username",this.state.user.name)
                this.props.history.push("/index");
                Toast.success(res.data.info, 1);
                return;
            } else {
                Toast.fail(res.data.info, 1);
            }
        });
    }
    render() {
        return (
            <div className="login">
                <div className="head">
                    <div className="hw">登录</div>
                </div>
                <div className="int">
                    <List>
                        <InputItem
                            placeholder="请输入账号" type="text" value={this.state.user.name} onChange={this.change.bind(this, 'name')}
                        >
                            <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '20px', width: '20px' }} />
                        </InputItem>
                    </List>
                    <List>
                        <InputItem
                            placeholder="请输入密码" type="password"
                            value={this.state.user.pass}
                            onChange={this.change.bind(this, 'pass')}
                        >
                            <div style={{ backgroundImage: 'url(https://img.51miz.com/Element/00/37/81/41/40425fc6_E378141_6ff35f93.png)', backgroundSize: 'cover', height: '25px', width: '20px' }} />
                        </InputItem>
                    </List>
                    <div>
                        <button className="btn" onClick={this.login.bind(this)}>登录</button>
                        <div className="fp">忘记密码？</div>
                    </div>
                    <h3 className="reg"><NavLink activeClassName='select' to='/register'>注册</NavLink></h3>

                    <div className="if">
                        <div className="xian"></div>
                        <span>或者</span>
                    </div>
                    <div>
                        <p style={{ color: '#ccc', fontSize: '0.28rem', textAlign: 'center' }}>社交账号快速登录</p>
                    </div>
                    <div className="ico">
                        <div><img src={vx} alt="" /></div>
                        <div><img src={wb} alt="" /></div>
                        <div><img src={qq} alt="" /></div>
                    </div>
                </div>

            </div>
        )
    }
}