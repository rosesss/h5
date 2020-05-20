import React, { Component } from 'react';
import classNames from 'classnames';
import './index.scss';
class LeftBuliding extends Component {

    changeTitle() {
        const businessTitle1 = document.getElementById('businessTitle1');
        businessTitle1.classList.add('businessTitle1')
    }

    changeSecondImg() {
        const business2 =document.getElementById('business2');
        business2.classList.add('business2')
    }

    changeSecondTitle() {
        const businessTitle2 =document.getElementById('businessTitle2');
        businessTitle2.classList.add('businessTitle2')
    }

    removeClass() {
        const titleMove1 = document.getElementById('businessTitle1');
        const titleMove2 = document.getElementsByClassName('titleMove2')[0];
        const imgMove1 = document.getElementsByClassName('imgMove1')[0];
        const imgMove2 = document.getElementsByClassName('imgMove2')[0];
        setTimeout(() => {
            titleMove1.classList.remove('titleMove1')
            titleMove2.classList.remove('titleMove2')
            imgMove1.classList.remove('imgMove1')
            imgMove2.classList.remove('imgMove2')
        }, 1000)
    }

    backupba() {
        const content = document.getElementById('content');
        var wraper = document.getElementById('wraper')
        var itemHeight = wraper.offsetHeight
        content.style.webkitTransform = 'translateY(-'+(itemHeight*3)+'px)'
        this.props.changeIndex(5)
    }

    render() {
        const {index} = this.props;
        let businessTitle1 = '';
        let businessImg1 = '';
        let businessTitle2 = '';
        let businessImg2 = '';
        let backMoveBtn = '';
        if (index === 5 || index === 7) {
            businessTitle1 = 'titleMove1';
            businessImg1 = 'imgMove1'
            businessTitle2 = 'titleMove2';
            businessImg2 = 'imgMove2';
            backMoveBtn = 'btnMove';
        }
        return (
            <div className="leftbuliding" id="page6" >
                <div></div>
                <div className="business" id="page6">
                    <img src={require('../../assets/images/business1.png')} className={businessImg1} id="page6" alt="" />
                    <p id="businessTitle1" className={businessTitle1} >商业1#</p>
                </div>
                <div className="business business2" id="page6">
                    <img src={require('../../assets/images/business2.png')} className={businessImg2} alt="" id="page6" />
                    <p id="businessTitle2" className={businessTitle2}>商业2#</p>
                </div>
                <div className="bottom-line" id="page6">
                    <img src={require('../../assets/images/line.png')} id="page6" alt="" />
                    <div className={classNames(backMoveBtn, "back-btn")} onClick={() => this.backupba()} id="page6">
                        BACK
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftBuliding;