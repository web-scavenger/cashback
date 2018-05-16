import React from 'react';
import $ from "jquery";

import StoreItem from './StoreItem.jsx'
import Modal from './Modal.jsx';
import './style/Stores.css';

import Partners from '../database/data.js'

export default class Stores extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.style = {};
        this.arr = [];
        this.data = Partners;
    }

    openModal(i) {
        $('#modal_block').slideUp(500);
        setTimeout(() => {
            this.setState(
                {
                    modal: true
                }
            )
        }, 900);

        this.arr = this.data[i];

    }
    closeModal() {
        $('.Modal').hide(600);

        setTimeout(() => {
            this.setState(
                { modal: false }
            )
        }, 700);

    }


    render() {
        if (this.state.modal) {
            return (
                <Modal key={this.arr.id}
                onClose={this.closeModal.bind(this)}
                storeName={this.arr.storeName}
                cashBack={this.arr.cashBack}
                waitTime={this.arr.waitTime}
                maxWaitTime={this.arr.maxWaitTime}
                siteLink={this.arr.siteLink}
                imgSrc={this.arr.imgSrc}
                />
            )
        } else {
            return (
                <div id="modal_block">{
                    this.data.map((work, i) => {
                        return (
                            <StoreItem key={i}
                                storeName={work.storeName}
                                cashBack={work.cashBack}
                                onClick={this.openModal.bind(this, i)} />
                        )
                    })}
                </div>
            )
        }
    }
}