import React from 'react';

import './style/Modal.css';

export default class Modal extends React.Component {
    render() {
        return (
            <div className="Modal">
                <div className="closeBtn" onClick={this.props.onClose}>
                    <img src="http://cdn.onlinewebfonts.com/svg/img_305752.png" alt=""/>
                </div>
                <div className="container">
                    <div className="half">
                        <img src={this.props.imgSrc} alt=""/>
                        <p> До {this.props.cashBack}</p> <br/>
                        <span>кешбек</span>
                    </div>
                    <div className="left__side">
                        <h4>Покупки в {this.props.storeName} з кешбеком</h4>
                        <hr />
                        <p>Час нарахування кешбеку :
                    <br />
                            <span>Середній час очікування кешбеку:  {this.props.waitTime} днів</span>
                            <br />
                            <span>Максимальний час очікування кешбеку: {this.props.maxWaitTime} днів</span>
                        </p>
                        <button className='goTo'><a href={this.props.siteLink}>відвідати сайт</a></button>
                    </div>

                </div>

            </div>
        )
    }
}