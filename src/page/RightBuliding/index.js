import React, { Component } from 'react';
import classNames from 'classnames';
import './index.scss';
class RightBuliding extends Component {

    gotoBack() {

    }

    removeClass() {
        const movetitle = document.getElementsByClassName('threeTitle')[0];
        const moveImg = document.getElementsByClassName('threeImg')[0]
        setTimeout(() => {
            movetitle.classList.remove('movetitle');
            moveImg.classList.remove('moveImg');
        },1000)
        const advantagetitle = document.getElementsByClassName('advantagetitle')[0];
        const bigoutimg = document.getElementsByClassName('big-out-img')[0];
        const lineImg = document.getElementsByClassName('big-line-img')[0];
        const advantageItemImg1 = document.getElementsByClassName('advantageItemImg1')[0]
        const advantageItemImg2 = document.getElementsByClassName('advantageItemImg2')[0]
        const advantageItemImg3 = document.getElementsByClassName('advantageItemImg3')[0]
        const advantageItemImg4 = document.getElementsByClassName('advantageItemImg4')[0]
        const advantageItemImg5 = document.getElementsByClassName('advantageItemImg5')[0]
        const advantageItemImg6 = document.getElementsByClassName('advantageItemImg6')[0]
        const advantageItemImg7 = document.getElementsByClassName('advantageItemImg7')[0]
        const centerCircle = document.getElementsByClassName('centerCircle')[0];
        const closecircle = document.getElementsByClassName('closecircle')[0];
        const circlelogo = document.getElementsByClassName('circlelogo')[0];
            advantagetitle.classList.add('advantageTitleMove')
            bigoutimg.classList.add('showBigcircle')
            lineImg.classList.add('lineIimgshow')
            advantageItemImg1.classList.add('showImg')
            advantageItemImg2.classList.add('showImg')
            advantageItemImg3.classList.add('showImg')
            advantageItemImg4.classList.add('showImg')
            advantageItemImg5.classList.add('showImg')
            advantageItemImg6.classList.add('showImg')
            advantageItemImg7.classList.add('showImg')
            centerCircle.classList.add('showcentercircle')
            closecircle.classList.add('showclosecircle')
            circlelogo.classList.add('logoShow')
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
        let moveTitle = '';
        let moveImg = '';
        if (index === 6 || index === 8) {
            moveTitle = 'movetitle'
            moveImg = 'moveimg'
        }
        return (
            <div className="rightbuliding" id="page7" >
                <div className="rightbuliding-header" id="page7">
                    {/* <img src={require('../../assets/images/home.png')} alt="" id="page7" className="backImg" onClick={() => this.gotoBack()} /> */}
                    <div className="geography" id="page7">
                        <p className={classNames(moveTitle,'threeTitle')}>商业3-4#</p>
                    </div>
                </div>
                <div className="business" id="page7">
                    <img className={classNames('threeImg',moveImg)} src={require('../../assets/images/rightbuliding.png')} alt="" id="page7" />
                </div>
                <div className="bottom-line" id="page7">
                    <img src={require('../../assets/images/line.png')} alt="" id="page7" />
                    <div className="back-btn" onClick={() => this.backupba()} id="page7">
                        BACK
                    </div>
                </div>
            </div>
        );
    }
}

export default RightBuliding;