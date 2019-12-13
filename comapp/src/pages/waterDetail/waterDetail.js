import React, { Component } from 'react'
import './waterDetail.css'
import Back from '../../views/Back/Back'
import us from '../../assets/images/user.png'
import Score from '../../views/Score/Score'
import { Modal } from 'antd-mobile';
const prompt = Modal.prompt;
export default class Parent extends Component {
    state = {
        data: [],
        comment: [],
        addCom: {
            username: localStorage.getItem("username"),
            waterId: this.props.match.params.id,
            time: new Date().getTime(),
            content: ""
        }
    }
    findComment() {
        this.$axios({
            url: '/findComment',
            params: {
                waterId: this.props.match.params.id
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
            url: '/findWater',
            params: {
                id: this.props.match.params.id
            }
        }).then(res => {
            this.setState({
                data: res.data.data[0]
            });
        });
        this.findComment();
    }
    render() {
        return (
            <div className="login">
                <div className="head">
                    <div className="l_me"><Back></Back></div>
                    <div className="hw">详细</div>
                    <div className="r_me">
                        <img src={us} alt="" />
                    </div>
                </div>
                <div className="water_context">
                    <div className="water_left">
                        <img src={this.state.data.img} alt="" />
                    </div>
                    <div className="water_right con">
                        <h3 className="water_tit">{this.state.data.name}</h3>
                        <Score num={parseFloat(this.state.data.score)} /><span className="mar_l">月售{this.state.data.count}桶</span>
                        <p><span className="price">￥{this.state.data.price}</span>/桶</p>
                        <p className="Num">
                            <span className="iconfont icon icon-dianzan"></span>{this.state.data.likeNum}
                            <span className="mar_l">浏览数:{this.state.data.readNum}</span>
                        </p>
                    </div>
                </div>
                <div className="water_context">
                    <div className="de_left">
                        <p><span className="iconfont icon icon-round"></span>{this.state.data.len}</p>
                        <p className="mar_l" style={{ marginTop: '0.2rem' }}>{this.state.data.address}</p>
                    </div>
                    <div className="de_right center">
                        <div className="iuu">
                            <span className="font iconfont icon icon-tel"></span>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <p>商家信息</p>
                    <div className="jie">
                        {this.state.data.des}
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
                                url: '/addComment',
                                params: this.state.addCom,
                            }).then(res => {
                                this.findComment();
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
        )
    }
}