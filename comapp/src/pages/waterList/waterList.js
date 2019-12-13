import React, { Component } from 'react'
import Back from '../../views/Back/Back'
import './waterList.css'
import Score from '../../views/Score/Score'
import us from '../../assets/images/user.png'
export default class Parent extends Component {
    state = {
        data: [],
    }
    toDetail(id) {
        console.log(id);
        this.props.history.push("/index/water/waterDetail/" + id);
    }
    componentDidMount() {
        this.$axios({
            url: '/findWater',
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
                    <div className="hw">送水到家</div>
                    <div className="r_me">
                        <img src={us} alt="" />
                    </div>
                </div>
                <div className="water_box">
                    {
                        this.state.data.map(item => (
                            <div className="water_context" key={item.id} onClick={this.toDetail.bind(this, item.id)}>
                                <div className="water_left">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="water_right">
                                    <h3 className="water_tit">
                                        {item.name}<Score num={item.score} />
                                    </h3>
                                    <p>{item.des}</p>
                                    <p><span className="iconfont icon icon-round"></span>{item.address}</p>
                                </div>
                                <div className="water_tel">
                                    <div className="iuu">
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