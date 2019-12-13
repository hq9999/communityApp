import React, { Component } from 'react'
import './jiajiao.css'
import Banner from '../../views/Banner/Banner'
import Back from '../../views/Back/Back'
import us from '../../assets/images/user.png'
import xiaoxue from '../../assets/images/xiaoxue.jpg'
import chuzhong from '../../assets/images/chuzhong.jpg'
import gaozhong from '../../assets/images/gaozhong.jpg'
import xingqu from '../../assets/images/xingqu.jpg'
import { SearchBar } from 'antd-mobile';
export default class Parent extends Component {
    state = {
        local: {
            username: localStorage.getItem("username")
        },
        open: false,
        data: [],
        imgHeight: 176,
        pic: [],
    }
    componentDidMount() {
        this.$axios({
            url: '/teacherBanner',
        }).then(res => {
            this.setState({
                data: res.data.data
            });
        });
        this.$axios({
            url: '/teacherTop',
        }).then(res => {
            console.log(res);
            this.setState({
                pic: res.data.data
            });
        })
    }
    onOpenChange = (...args) => {
        this.setState({ open: !this.state.open });
    }
    render() {
        return (
            <div className="login">
                <div className="head">
                    <div className="l_me"><Back></Back></div>
                    <div className="hw">找家教</div>
                    <div className="r_me">
                        <img src={us} alt="" />
                    </div>
                </div>

                <SearchBar placeholder="Search" maxLength={8} />
                <div className="banw">
                    <Banner banner={this.state.data}></Banner>
                </div>
                <div className="midban">
                    <span className="ic iconfont icon icon-round"></span>
                    <div className="midl">
                        <span>周边老师</span>
                        <span className="wind">发现身边好老师</span>
                    </div>
                    <div className="midr">
                        <span className="ic iconc iconfont icon icon-tiwen"></span>
                        <div className="midr">
                            <span>我要提问</span>
                            <span className="wind">难题名师帮你解</span>
                        </div>
                    </div>
                </div>
                <div className='school'>
                    <div><img src={xiaoxue} alt="" /><p>小学</p></div>
                    <div><img src={chuzhong} alt="" /><p>初中</p></div>
                    <div><img src={gaozhong} alt="" /><p>高中</p></div>
                    <div><img src={xingqu} alt="" /><p>小学</p></div>
                </div>
                <div className="top">
                    <div className='xian'></div>
                    <h4 className="fl">top排行榜</h4>
                    <div className="top_context">
                        {this.state.pic.map(item => (
                            <div className="jia_top" key={item.id}>
                                <img src={item.img} alt="" />
                                <span>已经报名{item.num}人</span>
                                <div className="jigou">
                                    <img src={item.teacherImg} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}