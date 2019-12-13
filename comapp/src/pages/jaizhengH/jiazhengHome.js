import React, { Component } from 'react'
import './jiazhengHome.css'
import Banner from '../../views/Banner/Banner'
import Back from '../../views/Back/Back'
import us from '../../assets/images/user.png'
import xiaoxue from '../../assets/images/xiaoxue.jpg'
import chuzhong from '../../assets/images/chuzhong.jpg'
import gaozhong from '../../assets/images/gaozhong.jpg'
import xingqu from '../../assets/images/xingqu.jpg'
import jiadian from '../../assets/images/jiadian.jpg'
import jiaju from '../../assets/images/jiaju.jpg'
import xinju from '../../assets/images/xinju.jpg'
import morer from '../../assets/images/morer.jpg'
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
            url: '/homeBanner',
        }).then(res => {
            this.setState({
                data: res.data.data
            });
        });
    }
    onOpenChange = (...args) => {
        this.setState({ open: !this.state.open });
    }
    findZ(type){
        console.log(type);
        this.props.history.push("/index/jiazheng/jiazhengList/"+type);
    }
    render() {
        return (
            <div className="login">
                <div className="head">
                    <div className="l_me"><Back></Back></div>
                    <div className="hw">找家政</div>
                    <div className="r_me">
                        <img src={us} alt="" />
                    </div>
                </div>

                <SearchBar placeholder="Search" maxLength={8} />
                <div className="banw">
                    <Banner banner={this.state.data}></Banner>
                </div>
                <div className='school jiaz'>
                    <div><img src={xiaoxue} onClick={()=>this.findZ('钟点工')} alt="" /><p>钟点工</p></div>
                    <div><img src={chuzhong} alt="" onClick={()=>this.findZ('保姆')} /><p>保姆</p></div>
                    <div><img src={gaozhong} alt="" onClick={()=>this.findZ('月嫂')} /><p>月嫂</p></div>
                    <div><img src={xingqu} alt="" onClick={()=>this.findZ('保洁')} /><p>专业保洁</p></div>
                    <div><img src={jiadian} alt="" onClick={()=>this.findZ('家电清洗')} /><p>家电清洗</p></div>
                    <div><img src={jiaju} alt="" onClick={()=>this.findZ('家具保养')} /><p>家具保养</p></div>
                    <div><img src={xinju} alt="" onClick={()=>this.findZ('新居开荒')} /><p>新居开荒</p></div>
                    <div><img src={morer} alt="" /><p>更多</p></div>
                </div>
            </div>
        )
    }
}