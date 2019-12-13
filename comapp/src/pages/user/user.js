import React, { Component } from 'react'
import Back from '../../views/Back/Back'
import us from '../../assets/images/user.png'
import './user.css'
import { List, InputItem, Toast, Modal, Button } from 'antd-mobile';
const prompt = Modal.prompt;
export default class Parent extends Component {
    state = {
        user: {
            name: localStorage.getItem("username"),
            oldpass: "",
            newpass: "",
            isPass: ""
        }
    }
    change(props, val) {
        let { user } = this.state;
        user[props] = val;//e.target.value;
        this.setState({
            user
        })
    }
    reset() {
        if (!(this.state.user.newpass && this.state.user.oldpass && this.state.user.isPass)) {
            Toast.fail("内容不能为空", 1);
            return;
        }
        if (this.state.user.newpass === this.state.user.oldpass) {
            Toast.fail("新密码和旧密码不能一样", 1);
            return;
        }
        if (this.state.user.newpass != this.state.user.isPass) {
            Toast.fail('请确认密码一致', 1);
            return;
        }
        this.$axios({
            url: '/changePassUser',
            method: 'post',
            data: {
                name: this.state.user.name,
                oldpass: this.state.user.oldpass,
                newpass: this.state.user.newpass,
            }
        }).then(res => {
            if (res.data.isok === true) {
                this.props.history.push("/login");
                Toast.success(res.data.info + '请重新登陆', 3);
            } else {
                Toast.fail(res.data.info, 1);
            }
        })
    }
    findUser() {
        this.$axios({
            url: '/findUser',
            method: 'post',
            data: {
                name: this.state.user.name
            }
        }).then(res => {
            this.setState({
                user: res.data.data[0]
            });
        })
    }
    componentDidMount() {
        Toast.loading('Loading...', 30, () => {
            console.log('Load complete !!!');
        });
        setTimeout(() => {
            Toast.hide();
        }, 1000);
        this.findUser();
    }
    render() {
        return (
            <div className="login">
                <div className="head">
                    <div className="l_me"><Back></Back></div>
                    <div className="hw">账号设置</div>
                    <div className="r_me">
                        <img src={us} alt="" />
                    </div>
                </div>
                <div className="user_img">
                    <div className="tou user_ty">
                        <img className="user_tou home_tou" src={this.state.user.img ? this.state.user.img : 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1407234108,864811063&fm=26&gp=0.jpg'} alt="" />
                        <p>tel:{this.state.user.tel}</p>
                    </div>
                    <Button inline type="primary" className="re_btn" onClick={() => prompt(
                        '修改头像',
                        '请输入图片地址',
                        img => {
                            this.state.user.img = img
                            this.$axios({
                                url: '/updateUser',
                                method: 'post',
                                data: {
                                    name: this.state.user.name,
                                    img: this.state.user.img
                                }
                            }).then(res => {
                                if (res.data.isok === true) {
                                    Toast.success(res.data.info, 3);
                                    this.findUser();
                                } else {
                                    Toast.fail(res.data.info, 1);
                                }
                            })
                        },
                        'text',
                    )} >修改头像</Button>
                    <Button inline type="primary" className="re_btn" onClick={() => prompt(
                        '修改电话',
                        '请输入电话',
                        tel => {
                            this.state.user.tel = tel
                            this.$axios({
                                url: '/updateUser',
                                method: 'post',
                                data: {
                                    name: this.state.user.name,
                                    tel: this.state.user.tel
                                }
                            }).then(res => {
                                if (res.data.isok === true) {
                                    Toast.success(res.data.info, 3);
                                    this.findUser();
                                } else {
                                    Toast.fail(res.data.info, 1);
                                }
                            })
                        },
                        'text',
                    )} >修改电话</Button>
                </div>
                <List>
                    <InputItem type="text" value={this.state.user.name} onChange={this.change.bind(this, 'name')}
                        disabled>
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '20px', width: '20px' }} />
                    </InputItem>
                </List>
                <List>
                    <InputItem placeholder="请输入原密码" type="password"
                        value={this.state.user.oldpass}
                        onChange={this.change.bind(this, 'oldpass')}>
                        <div style={{ backgroundImage: 'url(https://img.51miz.com/Element/00/37/81/41/40425fc6_E378141_6ff35f93.png)', backgroundSize: 'cover', height: '25px', width: '20px' }} />
                    </InputItem>
                </List>
                <List>
                    <InputItem
                        placeholder="请输入新密码" type="password"
                        value={this.state.user.newpass}
                        onChange={this.change.bind(this, 'newpass')}
                    >
                        <div style={{ backgroundImage: 'url(https://img.51miz.com/Element/00/37/81/41/40425fc6_E378141_6ff35f93.png)', backgroundSize: 'cover', height: '25px', width: '20px' }} />
                    </InputItem>
                </List>
                <List>
                    <InputItem
                        placeholder="请确认新密码" type="password"
                        value={this.state.user.isPass}
                        onChange={this.change.bind(this, 'isPass')}
                    >
                        <div style={{ backgroundImage: 'url(https://img.51miz.com/Element/00/37/81/41/40425fc6_E378141_6ff35f93.png)', backgroundSize: 'cover', height: '25px', width: '20px' }} />
                    </InputItem>
                </List>
                <div>
                    <Button type="primary" className="btn" onClick={this.reset.bind(this)}>修改密码</Button>
                </div>
            </div>
        )
    }
}