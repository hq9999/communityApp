import React, { Component } from 'react'
import './register.css'
import Back from '../../views/Back/Back'
import { List, InputItem, Toast } from 'antd-mobile';
export default class Parent extends Component {
    state = {
        user: {
            name: "",
            pass: "",
            tel: "",
        }
    }
    componentDidMount() {
        Toast.loading('Loading...', 30, () => {
          console.log('Load complete !!!');
        });
    
        setTimeout(() => {
          Toast.hide();
        }, 1000);
      }
    change(props, val) {
        // console.log(val);
        let { user } = this.state;
        user[props] = val;//e.target.value;
        this.setState({
            user
        })
    }
    reg(){
        console.log(111);
        this.$axios({
            url: "/addUser",
            method: "post",
            data: this.state.user
        }).then(res => {
            console.log(res);
            if (res.data.isok === true) {
                this.props.history.push("/login");
                Toast.success(res.data.info, 1);
                return;
            } else {
                Toast.fail(res.data.info, 1);
            }
        });
    }
    render() {
        return (
            <div className="register">
                <div className="head">
                    <div className="l_me"><Back></Back></div>
                    <div className="hw">注册</div>
                </div>
                <div className="int">
                    <List>
                        <InputItem
                            placeholder="账号" type="text" value={this.state.user.name} onChange={this.change.bind(this, 'name')}
                        >
                            <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '20px', width: '20px' }} />
                        </InputItem>
                    </List>
                    <List>
                        <InputItem
                            placeholder="邮箱/手机号" type="text" value={this.state.user.tel} onChange={this.change.bind(this, 'tel')}
                        >
                            <div style={{ backgroundImage: 'url(https://img.51miz.com/Element/00/37/75/61/a972e63c_E377561_113acb69.png)', backgroundSize: 'cover', height: '20px', width: '20px' }} />
                        </InputItem>
                    </List>
                    
                    <List>
                        <InputItem
                            placeholder="手机验证码" type="text"
                        >
                            <div style={{ backgroundImage: 'url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2627911893,2822744372&fm=15&gp=0.jpg)', backgroundSize: 'cover', height: '20px', width: '20px' }} />
                        </InputItem>
                    </List>
                    <List>
                        <InputItem
                            placeholder="6~32位密码" type="password"
                            value={this.state.user.pass}
                            onChange={this.change.bind(this, 'pass')}
                        >
                            <div style={{ backgroundImage: 'url(https://img.51miz.com/Element/00/37/81/41/40425fc6_E378141_6ff35f93.png)', backgroundSize: 'cover', height: '25px', width: '20px' }} />
                        </InputItem>
                    </List>
                    <div>
                        <button className="btn" onClick={this.reg.bind(this)}>注册</button>
                    </div>
                </div>

            </div>
        )
    }
}