import React, { Component } from 'react';
import './index.scss';
import classNames from 'classnames';
class Introduce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ifshowBg: false,
            ifShowLogo: true
        }
    }


    endMoveImg() {
        const content = document.getElementsByClassName('coverImg')[0];
        // content.classList.add('circularImg')
        content.classList.add('showCoverImg')
    }

    changeClass() {
        const content = document.getElementsByClassName('coverImg')[0];
        content.classList.remove("circularImg")
        // const showFinal = document.getElementsByClassName('showFinal')[0];
    }

    changeLogoClass() {
        const content = document.getElementsByClassName('logoimgs')[0];
        const coverImg = document.getElementsByClassName('coverImg')[0];
        coverImg.classList.remove('showCoverImg')
        coverImg.classList.add('showcircleImg');
        coverImg.classList.add('circularImg')
        content.classList.remove("logoImg")
        // const instro  =document.getElementsByClassName('instro')[0];
        // 
        // setTimeout(() => {
        //     instro.classList.add('moveInstro');
        // }, 1000)
    }

    changeInstroClass() {
        const coverImg = document.getElementsByClassName('coverImg')[0];
        coverImg.classList.add('circularImg')
        const content = document.getElementsByClassName('instro')[0];
        content.classList.remove("moveInstro")
        const instroimg1 = document.getElementsByClassName('instroimg1')[0];
        const instroimg2 = document.getElementsByClassName('instroimg2')[0];
        const instroimg3 = document.getElementsByClassName('instroimg3')[0];
        const instroimg4 = document.getElementsByClassName('instroimg4')[0];
        const instroimg5 = document.getElementsByClassName('instroimg5')[0];
        const instroimg6 = document.getElementsByClassName('instroimg6')[0];
        const instroimg7 = document.getElementsByClassName('instroimg7')[0];
        const instroimg8 = document.getElementsByClassName('instroimg8')[0];
        setTimeout(() => {
            instroimg1.classList.add('moveimg1');
            instroimg2.classList.add('moveimg2');
            instroimg3.classList.add('moveimg3');
            instroimg4.classList.add('moveimg4');
            instroimg5.classList.add('moveimg5');
            instroimg6.classList.add('moveimg6');
            instroimg7.classList.add('moveimg7');
            instroimg8.classList.add('moveimg8');
        },1000)
        const showFinal = document.getElementsByClassName('showFinal')[0];
        if (showFinal) {
            coverImg.classList.remove('circularImg')
        }
    }

    hideFinal() {
        const instroimg1 = document.getElementsByClassName('instroimg1')[0];
        const instroimg2 = document.getElementsByClassName('instroimg2')[0];
        const instroimg3 = document.getElementsByClassName('instroimg3')[0];
        const instroimg4 = document.getElementsByClassName('instroimg4')[0];
        const instroimg5 = document.getElementsByClassName('instroimg5')[0];
        const instroimg6 = document.getElementsByClassName('instroimg6')[0];
        const instroimg7 = document.getElementsByClassName('instroimg7')[0];
        const instroimg8 = document.getElementsByClassName('instroimg8')[0];
        instroimg1.classList.remove('moveimg1');
        instroimg2.classList.remove('moveimg2');
        instroimg3.classList.remove('moveimg3');
        instroimg4.classList.remove('moveimg4');
        instroimg5.classList.remove('moveimg5');
        instroimg6.classList.remove('moveimg6');
        instroimg7.classList.remove('moveimg7');
        instroimg8.classList.remove('moveimg8');

    }

    changeFinalClass() {
        const coverImg = document.getElementsByClassName('coverImg')[0];
        coverImg.classList.remove('circularImg')
        // coverImg.classList.add('showCoverImg')
        const final  = document.getElementsByClassName('final')[0];
        final.classList.add('showFinal')
    }

    removeClass() {
        // const {index, itemHeight, endMove} = this.props;
        // const coverimgmove = document.getElementsByClassName('coverImg')[0];
        // const playimg = document.getElementsByClassName('bgimg')[0]
        // if(endMove === -itemHeight) {
        //     setTimeout(() => {
        //         coverimgmove.classList.remove('showcircleImg')
        //         playimg.classList.remove('playimg')
        //     }, 1000)
            
        // }
    }

    render() {
        const {index, itemHeight, endMove} = this.props;
        console.log(index, '1')
        let bgimgClass = '';
        let logoImg = '';
        let coverClass = '';
        let instroClass = '';
        if (endMove === 0) {
            logoImg = 'logoImg'
            bgimgClass = 'playimg'
            coverClass = 'coverimgmove'
            instroClass = 'instroshow'
        } 
        return (
            <div className={classNames('instroduce')} id="page1" onTouchEnd={() => this.removeClass()}>
                <img className={classNames('bgimg', bgimgClass)} id="page1" src={require('../../assets/images/homebg.jpeg')} alt="" onAnimationEnd={() => this.endMoveImg()}/>
                    <div className={classNames('bgBox')} id="page1">
                        <div className="logo" id="page1">
                            <img id="page1" className={classNames('coverImg', coverClass)} src={require('../../assets/images/circular.png')} alt="" onAnimationEnd={() => this.changeClass()}/>
                            <img className={classNames('logoimgs',logoImg)} src={require('../../assets/images/center1.png')} alt="" onAnimationEnd={() => this.changeLogoClass()}/>
                            <img className={classNames(instroClass,'instro')} src={require('../../assets/images/center2.png')} alt="" onAnimationEnd={() => this.changeInstroClass()}/>
                            <div className="final" id="page1">
                                <div className="finalLeft" id="page1">
                                    <img src={require('../../assets/images/天.png')} id="page1" alt="" className="instroimg1" />
                                    <img src={require('../../assets/images/籁.png')} id="page1" alt="" className="instroimg2" />
                                    <img src={require('../../assets/images/之.png')} id="page1" alt="" className="instroimg3" />
                                    <img src={require('../../assets/images/赏.png')}  id="page1"alt="" className="instroimg4" />
                                </div>
                                <div className="finalRight" id="page1">
                                    <img src={require('../../assets/images/滨.png')} id="page1" alt="" className="instroimg5" />
                                    <img src={require('../../assets/images/江.png')} id="page1" alt="" className="instroimg6" />
                                    <img src={require('../../assets/images/之.png')} id="page1" alt="" className="instroimg7" />
                                    <img src={require('../../assets/images/藏.png')} id="page1" alt="" className="instroimg8" onAnimationEnd={() => this.hideFinal()} />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Introduce;