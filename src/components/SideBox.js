import React, {Component} from 'react'
import './SideBox.css';

export default class SideBox extends Component {
    render() {
        return (
            <div>
                <div className="infoBox">
                    <input type="checkbox" id="toggle" className="toggle__checkbox"/>
                    <div className="box">
                        <label htmlFor="toggle" className="toggle"><div className="icon"/></label>
                        <div className="infoSection">
                            <h2 style={{yIndex: 1}} className="box__item">Contract Information</h2>
                            <p style={{yIndex: 3}} className="box__item">facebook</p>
                            <p style={{yIndex: 4}} className="box__item">Wed : 4PM - 7PM</p>
                            <p style={{yIndex: 5}} className="box__item">Wed : 9AM - 11AM</p>
                            <p style={{yIndex: 6}} className="box__item">Wed : 9AM - 11AM</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
