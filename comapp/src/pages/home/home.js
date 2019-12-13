import React, { Component } from 'react'
import './home.css'
import menu from '../../assets/images/menu.png'
import us from '../../assets/images/user.png'
import jiao from '../../assets/images/cts-191210205338576.jpg'
import water from '../../assets/images/cts-191210205338572.jpg'
import wei from '../../assets/images/cts-191210205338554.jpg'
import zheng from '../../assets/images/cts-191210205338680.jpg'
import com from '../../assets/images/cts-191210205338677.jpg'
import more from '../../assets/images/cts-191210205338437.jpg'
import Banner from '../../views/Banner/Banner'
import { NavLink } from 'react-router-dom'
import { Drawer, List, SearchBar, Toast } from 'antd-mobile';
export default class Parent extends Component {
    state = {
        local: {
            username: localStorage.getItem("username")
        },
        open: false,
        data: [],
        imgHeight: 176,
        user:{
            img:'',
        }
    }
    componentDidMount() {
        this.$axios({
            url: '/banner',
        }).then(res => {
            this.setState({
                data: res.data.data
            });
        });
        this.$axios({
            url: '/findUser',
            method: 'post',
            data: {
                name: this.state.local.username
            }
        }).then(res => {
            this.setState({
                user: res.data.data[0]
            });
        });
    }
    onOpenChange = (...args) => {
        this.setState({ open: !this.state.open });
    }
    exit() {
        console.log(1111);
        this.$axios({
            url: '/exit',
        }).then(res => {
            if (res.data.isok === true) {
                localStorage.removeItem("username")
                this.props.history.push("/login");
                Toast.success(res.data.info, 1);
                return;
            } else {
                Toast.fail(res.data.info, 1);
            }
        })
    }
    render() {
        const sidebar = (
            <List>
                <div className="logo">
                    <div className="tou">
                        <img className="user_tou home_tou" src={this.state.user.img ? this.state.user.img : 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1407234108,864811063&fm=26&gp=0.jpg'} alt="" />
                    </div>
                    <span className="uname">{this.state.local.username}</span>
                </div>
                <NavLink activeClassName='select' className="select" to='/index/jiajiao'><span className="spicon iconfont icon icon-shequ"></span>找家教</NavLink>
                <NavLink activeClassName='select' to='/index/water'><span className="spicon iconfont icon icon-shui"></span>送水到家</NavLink>
                <NavLink activeClassName='select' to='/index/weixiu'><span className="spicon iconfont icon icon-weixiu"></span>维修服务</NavLink>
                <NavLink activeClassName='select' to='/index/jiazheng'><span className="spicon iconfont icon icon-swticonjiazhengyuan"></span>家政服务</NavLink>
                <a><span className="spicon iconfont icon icon-shequ"></span>社区互动</a>
                <a><span className="spicon iconfont icon icon-xiaoxi"></span>消息中心</a>
                <NavLink activeClassName='select' to='/index/collect'><span className="spicon iconfont icon icon-collection"></span>我的收藏</NavLink>
                <a><span className="spicon iconfont icon icon-fabu"></span>我的发布</a>
                <NavLink activeClassName='select' to='/index/user'><span className="spicon iconfont icon icon-zhanghaoshezhi"></span>账号设置</NavLink>
                <a onClick={() => this.exit()}><span className="spicon iconfont icon icon-tuichudenglu"></span>退出登录</a>
            </List>);
        return (
            <div className="login">
                <div className="head">
                    <div className="l_me men">
                        <img src={menu} onClick={this.onOpenChange} alt="" />
                    </div>
                    <div className="hw">龙山家园</div>
                    <div className="r_me">
                        <img src={us} alt="" />
                    </div>
                </div>
                <Drawer
                    className="my-drawer"
                    style={{ minHeight: document.documentElement.clientHeight }}
                    enableDragHandle
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                >
                    <div className="gong"></div>
                    <SearchBar placeholder="Search" maxLength={8} />
                    <div className="banw">
                        <Banner banner={this.state.data}></Banner>
                    </div>
                    <div className="midban">
                        <span className="iconfont icon icon-icon-"></span>
                        <div className="midl">
                            <span>多云/小雨 27/30C</span>
                            <span className="wind">3-4级/4-5级风</span>
                        </div>
                        <div className="midr">
                            <span>星期一</span>
                            <span className="wind">18:00</span>
                        </div>
                    </div>
                    <div className="web">
                        <div>
                            <NavLink to='/index/jiajiao'>
                                <img src={jiao} alt="" />
                                <p>找家教</p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to='/index/water'>
                                <img src={water} alt="" />
                                <p>送水到家</p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to='/index/weixiu'>
                                <img src={wei} alt="" />
                                <p>维修服务</p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to='/index/jiazheng'>
                                <img src={zheng} alt="" />
                                <p>家政</p>
                            </NavLink>
                        </div>
                        <div>
                            <a>
                                <img src={com} alt="" />
                                <p>社区互动</p>
                            </a>
                        </div>
                        <div>
                            <img src={more} alt="" />
                            <p>更多服务</p>
                        </div>
                    </div>
                </Drawer>
            </div>
        )
    }
}