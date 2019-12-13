import React, { Component } from 'react'
import Back from '../../views/Back/Back'
import Score from '../../views/Score/Score'
import us from '../../assets/images/user.png'
import './weixiuDetail.css'
import { Modal } from 'antd-mobile';
const prompt = Modal.prompt;
export default class Parent extends Component {
    state = {
        data: [],
        comment: [],
        addCom: {
            name: localStorage.getItem("username"),
            repairId: this.props.match.params.id,
            time: new Date().getTime(),
            content: ""
        }
    }
    findWX() {
        this.$axios({
            url: '/findRepairComment',
            params: {
                repairId: this.props.match.params.id
            }
        }).then(res => {
            console.log(res);
            this.setState({
                comment: res.data.data
            });
        });
    }
    componentDidMount() {
        // console.log(this.props.match.params.id);
        this.$axios({
            url: '/findRepair',
            params: {
                id: this.props.match.params.id
            }
        }).then(res => {
            // console.log(res);

            this.setState({
                data: res.data.data[0]
            });
        });
        this.findWX();
    }
    render() {
        return (
            <div className="login">
                <div className="head">
                    <div className="l_me"><Back></Back></div>
                    <div className="hw">商家详情</div>
                    <div className="r_me">
                        <img src={us} alt="" />
                    </div>
                </div>
                <div className="water_box">
                    <div className="wei_h3">
                        <h3>{this.state.data.name}</h3>
                        <Score num={this.state.data.score} />
                    </div>
                    <div className="wei_h3">
                        <p><span className="iconfont icon icon-round"></span>距你{this.state.data.len}</p>
                        <p className="mar_l" style={{ marginTop: '0.2rem' }}>{this.state.data.address}</p>
                        <p className="mar_l" style={{ marginTop: '0.2rem' }}>营业时间:09:00-18:00</p>
                        <p className="Num">
                            <span className="iconfont icon icon-guanzhu"></span>   {this.state.data.likeNum}
                            <span className="mar_l iconfont icon icon-xin"> {this.state.data.readNum}</span>
                        </p>
                        <div className="tlt">
                            <div className="tel wei_r">
                                <span className="iuo iconfont icon icon-tel"></span>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <p>商家信息</p>
                        <div className="jie">
                            {this.state.data.info}
                        </div>
                    </div>
                    <div className="info">
                        <p>TA们都在说<span className="xie iconfont icon-xieyingping" onClick={() => prompt(
                            '评论',
                            '请输入评论',
                            content => {
                                this.state.addCom.content = content
                                console.log(this.state.addCom)
                                this.$axios({
                                    url: '/addRepairComment',
                                    params: this.state.addCom,
                                }).then(res => {
                                    console.log(res);
                                    this.findWX();
                                })
                            },
                            'text',
                        )}> 写评论</span></p>
                        {
                            this.state.comment.map(item => {
                                let time = new Date(Number(item.time))
                                let timeStamp = parseInt(Number(item.time) / 1000)
                                let current = new Date()
                                let currentStamp = parseInt(current.getTime() / 1000)
                                time = time.toLocaleDateString()
                                let moment = currentStamp - timeStamp
                                if (moment < 86400 && moment > 3600) {
                                    time = parseInt(moment / 3600) + '小时前'
                                }
                                if (moment < 3600 && moment > 60) {
                                    time = parseInt(moment / 60) + '分钟前'
                                }
                                if (moment < 60 && moment > 0) {
                                    time = moment + '秒前'
                                }
                                return <div className="commond" key={item.id}>
                                    <div style={{ float: "left" }}>
                                        <img className="user_tou" src={item.ava ? item.ava : 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1407234108,864811063&fm=26&gp=0.jpg'} alt="" />
                                    </div>
                                    <div className="co_con">
                                        <h2>{item.name}</h2>
                                        <p>{item.content}</p>
                                        <span className="af_time">
                                            {time}
                                        </span>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}