import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import back from '../../assets/images/back.png'
class Parent extends Component {
    goBack() {
        this.props.history.go(-1)
    }
    render() {
        return (
            <div>
                <img style={{display:"block"}} src={back} onClick={() => this.goBack()} alt=""/>
            </div>
        )
    }
}

export default withRouter(Parent)