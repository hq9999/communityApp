import React, { Component } from 'react'
import './jiazhengList.css'
import Back from '../../views/Back/Back'
import search from '../../assets/images/search.png'
export default class Parent extends Component {
    state = {
        data: [],
    }
    toDetail(id) {
        console.log(id);
        this.props.history.push("/index/jiazheng/jiazhengDetail/" + id);
    }
    componentDidMount() {
        this.$axios({
            url: '/findHomeWorker',
            params: {
                type: this.props.match.params.type,
            }
        }).then(res => {
            console.log(res);
            this.setState({
                data: res.data.data
            });
        });
    }
    render() {
        return (
            <div className="login">
                <div className="head">
                    <div className="l_me"><Back></Back></div>
                    <div className="hw">{this.props.match.params.type}</div>
                    <div className="r_me">
                        <img src={search} alt="" />
                    </div>
                </div>
                <div className="water_box">
                    {
                        this.state.data.map(item => (
                            <div className="water_context" key={item.id} onClick={this.toDetail.bind(this, item.id)}>
                                <div className="water_left">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="jia_right">
                                    <h4 className="jia_tit">
                                        {item.name}
                                        <span className="p1">{item.experience}年教龄</span>
                                        <span className="p2">{item.vNum}</span>
                                        <p className="jia_pr">
                                            <span className="price pir">￥{item.price}</span>/小时
                                        </p>
                                    </h4>
                                    <div className="jia_c">
                                        <span>{item.city}</span>|
                                        <span>{item.age}岁</span>|
                                        <span>{item.edu}</span>|
                                        <span>{item.year}年自营</span>
                                    </div>
                                    <p>{item.info}</p>
                                    <p className="Num">
                                        <span className="iconfont icon icon-guanzhu"></span>   {item.likeNum}
                                        <span className="mar_l iconfont icon icon-xin"> {item.readNum}</span>
                                    </p>
                                </div>
                                <div>
                                <p><span className="iconfont icon icon-round"></span>距你{item.len}米</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}