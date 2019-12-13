import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
export default class Parent extends Component {
    render() {
        return (
            <div>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {this.props.banner.map(item => (
                            <img key={item.id}
                                src={item.img}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        ))}
                    </Carousel>
                </WingBlank>
            </div>
        )
    }
}