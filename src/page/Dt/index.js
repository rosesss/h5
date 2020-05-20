import React, { Component } from 'react';
import classNames from 'classnames';
import './index.scss';
class Dt extends Component {

    removeClass() {
        const toiletitle = document.getElementsByClassName('toiletitle')[0];
        const toiletbg = document.getElementsByClassName('toiletbg')[0];
        const bottomnot = document.getElementsByClassName('bottomnot')[0];
        // const descbottom = document.getElementsByClassName('descbottom')[0];
        setTimeout(() => {
            toiletitle.classList.remove('titlemove');
            toiletbg.classList.remove('moveBg');
            bottomnot.classList.remove('bottompngMove');
            // descbottom.classList.remove('toiletdescMove');
        })
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

    showbgImg() {

    }

    render() {
        const {index} = this.props;
        // let bgMoveClass = ''
        let floorbgMoveClass = '';
        let titleMoveClass = '';
        let bottomClass = ''
        let bottomrightmoveClass = ''
        let descClass = ''
        let floorheightClass = ''
        let floordownClass = ''
        let diantispaceClass = ''
        let diantiwidthClass = ''
        let diantiheightClass = ''
        let diantiweightClass = ''
        if(index === 8 || index === 10) {
            floorbgMoveClass = 'moveBg'
            titleMoveClass = 'titlemove'
            bottomClass = 'bottompngMove'
            bottomrightmoveClass = 'bottomrightmove'
            descClass = 'toiletdescMove'
            floorheightClass = 'heightmove'
            floordownClass = 'downmove'
            diantispaceClass = 'dtspacemove'
            diantiwidthClass = 'dtwidthmove'
            diantiheightClass = 'dtheightmove'
            diantiweightClass = 'dtweightmove'
        }
        return (
             <div className="dt" id="page9" onTouchEnd={() => this.removeClass()}>
                 <img src={require('../../assets/images/dt.png')} id="page9" className={classNames('toiletitle',titleMoveClass)} alt="" />
                 <img src={require('../../assets/images/tolietBg.jpg')} id="page9" alt="" className={classNames('toiletbg', floorbgMoveClass)} />
                 <div className="toiletInstro">
                    <img src={require('../../assets/images/bottom.png')} alt=""  id="page9" className={classNames('bottomnot',bottomClass)}/>
                    <img src={require('../../assets/images/bottommove.gif')} alt=""  id="page9" className={classNames('bottomright',bottomrightmoveClass)}/>
                    {/* <img src={require('../../assets/images/dtInstro.png')} alt="" id="page9" className={classNames('descbottom',descClass)} /> */}
                    <img src={require('../../assets/images/heightfloor.png')} alt="" id="page9" className={classNames('heightfloor',floorheightClass)} />
                    <img src={require('../../assets/images/downfloor.png')} alt="" id="page9" className={classNames('downfloor',floordownClass)} />
                    <img src={require('../../assets/images/diantilong.png')} alt="" id="page9" className={classNames('dtlong',diantispaceClass)} />
                    <img src={require('../../assets/images/diantiwidth.png')} alt="" id="page9" className={classNames('dtwidth',diantiwidthClass)} />
                    <img src={require('../../assets/images/diantiheight.png')} alt="" id="page9" className={classNames('dtheight',diantiheightClass)} />
                    <img src={require('../../assets/images/diantiweight.png')} alt="" id="page9" className={classNames('dtweight',diantiweightClass)} />
                 </div>
         </div>
        );
    }
}

export default Dt;