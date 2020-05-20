import React, { Component } from 'react';
import './index.scss';
class EliteEnterprise extends Component {
    render() {
        return (
            <div className="eliteEnterprise">
                <img src={require('../../assets/images/home.png')} alt="" className="goHomeImg" />
                <img src={require('../../assets/images/enterprise.png')} alt="" className="enterprise" />
            </div>
        );
    }
}

export default EliteEnterprise;