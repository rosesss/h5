import React, { Component } from 'react';
import classNames from 'classnames';
import './index.scss';
class Honor extends Component {

    remove(e) {
        const {index} = this.props;
        if (e.target.id === 'page11' || index === 11) {
            return
        }

    }
    render() {
        const {index} = this.props;
        let honormaskClass = ''
        let honortitleClass = ''
        let honorlogoClass = ''
        let honornum1Class = ''
        let honornum2Class = ''
        let honornum3Class = ''
        if ( index === 10 || index === 12) {
            honormaskClass = 'maskMove'
            honortitleClass = 'honortitleshow'
            honorlogoClass = 'honorlogoshow'
            honornum1Class = 'honornum1show'
            honornum2Class = 'honornum2show'
            honornum3Class = 'honornum3show'
        }
        return (
            <div className= {classNames('eliteEnterprise', )} id="page11" onTouchEnd={(e) => this.remove(e)}>
                <div className="inSideEliteEnterprise" id="page11">
                    <img src={require('../../assets/images/honorbg.jpeg')} id="page11" alt="" className="honorbg" />
                    <img src={require('../../assets/images/honorcenter.png')} id="page11"  className={classNames('honorcenter',honormaskClass)} alt='' id="page11" />
                    <img src={require('../../assets/images/honortitle.png')} id="page11"  className={classNames('honortitle',honortitleClass )} alt='' id="page11" />
                    <img src={require('../../assets/images/honorLogo.png')} id="page11"  className={classNames('honor-logo-img',honorlogoClass )} alt='' id="page11" />
                    <img src={require('../../assets/images/companyinstro1.png')} id="page11"  alt="" className={classNames('companyonstro1',honornum1Class)}/>
                    <img src={require('../../assets/images/companyinstro2.png')} id="page11"  alt="" className={classNames('companyonstro2',honornum2Class)}/>
                    <img src={require('../../assets/images/companyinstro3.png')} id="page11"  alt="" className={classNames('companyonstro3',honornum3Class)}/>
                </div>
            </div>
        );
    }
}

export default Honor;