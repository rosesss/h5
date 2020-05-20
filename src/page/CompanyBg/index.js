import React, { Component } from 'react';
import classNames from 'classnames';
import './index.scss';

class CompanyBg extends Component {

    addBgMove() {
        const companybg = document.getElementsByClassName('company-bg')[0];
        companybg.classList.add('bgMove')
    }

    addImgMove() {
        const companycenterimg = document.getElementsByClassName('companycenterimg')[0];
        companycenterimg.classList.add('centerImg')
    }

    addTitle() {
        const companytitle = document.getElementsByClassName('companytitle')[0];
        companytitle.classList.add('centertitle')
    }

    addLogo() {
        const companycentettitle = document.getElementsByClassName('companycentettitle')[0];
        companycentettitle.classList.add('centerlogo')
    }

    addInstro() {
        const companycenterinstro = document.getElementsByClassName('companycenterinstro')[0];
        companycenterinstro.classList.add('centerinstro')
    }

    remove() {
        const {index} = this.props;
        console.log(index, 'index11')
    }

    render() {
        const {index} = this.props;
        let companybgMove = '';
        let companycentershowClass = '';
        let compnayTitleClass = ''
        let companycenterTitleClass = ''
        let companyInstroClass = ''
        if (index === 11) {
            companybgMove = 'companyPageMove'
            companycentershowClass = 'showcenter'
            compnayTitleClass = 'showcompanytitle'
            companycenterTitleClass = 'showcompanycentertitle'
            companyInstroClass = 'showcompanyinstro'
        }
        return (
            <div className={classNames('company')} id="page12" onTouchEnd={() => this.remove()} >
                <img src={require('../../assets/images/companybg.jpeg')} id="page12" alt="" className={classNames('company-bg-img',companybgMove)}/>
                <img src={require('../../assets/images/companycenter.png')} id="page12" alt="" className={classNames(companycentershowClass, 'companycetner')} />
                <img src={require('../../assets/images/companytitle.png')} id="page12" alt="" className={classNames(compnayTitleClass,"companytitle")} onAnimationEnd={() => this.addLogo()}/>
                <img src={require('../../assets/images/companycentertitle.png')} id="page12" alt="" className={classNames(companycenterTitleClass,"companycentettitle")} onAnimationEnd={() => this.addInstro()} />
                <img src={require('../../assets/images/companyinstro.png')} id="page12" alt="" className={classNames(companyInstroClass, "companycenterinstro" )} />
            </div>
        );
    }
}

export default CompanyBg;