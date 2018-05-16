import React from 'react';

import './style/StoreItem.css';

export default class StoresItem extends React.Component {

    render() {
        return (
            <div className="StoreItem">
                <h2>{this.props.storeName}</h2>
                <p>
                    Вам повернеться: <br/>
                    {this.props.cashBack}
                </p>
                <button className="openModal" onClick={this.props.onClick}>Інформація про магазин</button>
            </div>
        )
    }
}