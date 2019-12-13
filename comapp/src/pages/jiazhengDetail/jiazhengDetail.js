import React, { Component } from 'react'
import Back from '../../views/Back/Back'
import us from '../../assets/images/user.png'
import './jiazhengDetail.css'
export default class Parent extends Component {
    state = {
        data: {
            qualification: [],
            type: []
        },
    }
    componentDidMount() {
        this.$axios({
            url: '/findHomeWorker',
            params: {
                id: this.props.match.params.id,
            }
        }).then(res => {
            console.log(res);
            var data = res.data.data[0]
            if (data.qualification.indexOf("[") != -1) {
                data.qualification = JSON.parse(data.qualification)
                data.type = JSON.parse(data.type)
            } else {
                data.qualification = data.qualification.split(",")
                data.type = data.type.split(",")
            }
            this.setState({
                data: data
            });
        });
    }
    render() {
        console.log(this.state.data.qualification);
        return (
            <div className="login">
                <div className="head">
                    <div className="l_me"><Back></Back></div>
                    <div className="hw">{this.state.data.name}</div>
                    <div className="r_me">
                        <img src={us} alt="" />
                    </div>
                </div>
                <div className="water_context">
                    <div className="water_left">
                        <img src={this.state.data.img} alt="" />
                    </div>
                    <div className="jia_right">
                        <h4 className="jia_tit">
                            {this.state.data.name}
                            <span className="p1">{this.state.data.experience}年教龄</span>
                            <span className="p2">{this.state.data.vNum}</span>
                            <p className="jia_pr">
                                <span className="price pir">￥{this.state.data.price}</span>/小时
                                        </p>
                        </h4>
                        <div className="jia_c">
                            <span>{this.state.data.city}</span>|
                                        <span>{this.state.data.age}岁</span>|
                                        <span>{this.state.data.edu}</span>|
                                        <span>{this.state.data.year}年自营</span>
                        </div>
                        <p className="Num">
                            <span className="iconfont icon icon-guanzhu"></span>   {this.state.data.likeNum}
                            <span className="mar_l iconfont icon icon-xin"> {this.state.data.readNum}</span>
                        </p>
                    </div>
                    <div style={{ float: 'right', marginRight: '.5rem' }}>
                        <p><span className="iconfont icon icon-round"></span>距你{this.state.data.len}米</p>
                    </div>
                </div>
                <div className="pp_cot">
                    <h3>简介</h3>
                    <div className="pp_content">
                        <div>
                            <span className="bold">资格认证:</span>
                            {/* <span className="blue rove iconfont icon icon-approve">身份证</span> */}
                            {this.state.data.qualification.map(item => (
                                <span className="blue rove iconfont icon icon-approve" key={item}>{item}</span>
                            ))}
                        </div>
                        <div>
                            <span className="bold">资格认证:</span>
                            {this.state.data.type.map(item => (
                                <span className="rove" key={item}>{item}</span>
                            ))}
                        </div>
                        <div>
                            <span className="bold">自我评价:</span>
                            <span className="rove">{this.state.data.info}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}