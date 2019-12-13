import React, { Component } from 'react'
import './weixiuList.css'
import Back from '../../views/Back/Back'
import search from '../../assets/images/search.png'
import Score from '../../views/Score/Score'
export default class Parent extends Component {
    state = {
        data: [],
    }
    toDetail(id) {
        console.log(id);
        this.props.history.push("/index/weixiu/weixiuDetail/" + id);
    }
    componentDidMount() {
        this.$axios({
            url: '/findRepair',
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
                    <div className="hw">商家列表</div>
                    <div className="r_me">
                        <img src={search} alt="" />
                    </div>
                </div>
                <div className="water_box">
                    {
                        this.state.data.map(item => (
                            <div className="water_context weixiu" key={item.id} onClick={this.toDetail.bind(this, item.id)}>
                                <div className="water_right">
                                    <h3 className="water_tit">
                                        {item.name}<Score num={item.score} />
                                    </h3>
                                    <p>{item.info}</p>
                                    <p><span className="iconfont icon icon-round"></span>{item.address}</p>
                                </div>
                                <div className="fl_r">
                                    <div className="tel wei_r">
                                        <span className="iuo iconfont icon icon-tel"></span>
                                    </div>
                                    <p>{item.len}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
// icon-sousuo