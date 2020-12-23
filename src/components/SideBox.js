import React, {Component} from 'react'
import './SideBox.css';

export default class SideBox extends Component {
    render() {
        return (
            <div className="infoBox">
                <input type="checkbox" id="toggle" className="toggle__checkbox"/>
                <div className="box">
                    <label htmlFor="toggle" className="toggle">
                        <div className="icon"/>
                    </label>
                    <div className="infoSection">
                        <h2 style={{yIndex: 1}} className="box__item">Current Projects</h2>
                        <p style={{yIndex: 2}} className="box__item">81 guides</p>
                        <p style={{yIndex: 3}} className="box__item">Slide & Learn</p>
                        <p style={{yIndex: 4}} className="box__item">Piarka</p>
                        <p style={{yIndex: 5}} className="box__item">Yeşil Doğa</p>
                        <p style={{yIndex: 6}} className="box__item">Procedure Dungeons</p>
                        <p style={{yIndex: 7}} className="box__item">An Unusual Refugee </p>
                        <p style={{yIndex: 8}} className="box__item">piarkasoftware </p>
                    </div>
                </div>
            </div>
        )
    }
}
