import React, { Component } from 'react';
import classNames from 'classnames';
import './index.scss';
class Toilet extends Component {

    showbgImg() {

    }

    render() {
       
        const {index} = this.props;
        // let bgMoveClass = ''
        let floorbgMoveClass = '';
        let titleMoveClass = '';
        let bottomClass = ''
        let tolietrightClass = ''
        let tolietspaceClass = ''
        let tolietmanClass = ''
        let tolietwomanClass = ''
        if(index === 9 || index === 11) {
            floorbgMoveClass = 'movedtBg'
            titleMoveClass = 'dtmove'
            bottomClass = 'dtbottompngMove'
            tolietspaceClass = 'tolietspacemove'
            tolietmanClass = 'tolietmanmove'
            tolietwomanClass = 'tolietwowanmove'
            tolietrightClass = 'tolietrightmove'
        }
        return (
             <div className="toilet" id="page10" >
                 <img src={require('../../assets/images/toiletTitle.png')} id="page10" className={classNames('dttitle',titleMoveClass)} alt="" />
                 <img src={require('../../assets/images/dtbg.jpg')} id="page10" alt="" className={classNames('dttbg', floorbgMoveClass)} />
                 <div className="toiletInstro" id="page10">
                    <img src={require('../../assets/images/bottom.png')} id="page10" alt=""  className={classNames('dtbottomnot',bottomClass)}/>
                    <img src={require('../../assets/images/bottommove.gif')} alt="" className={classNames('bottomtolietright', tolietrightClass)} />
                    <img src={require('../../assets/images/tolietspace.png')} alt="" className={classNames('tolietspace', tolietspaceClass)} />
                    <img src={require('../../assets/images/tolietman.png')} alt="" className={classNames('tolietman', tolietmanClass)} />
                    <img src={require('../../assets/images/tolietwoman.png')} alt="" className={classNames('tolietwoman', tolietwomanClass)} />
                    {/* <img src={require('../../assets/images/tolietdesc.png')} id="page10" alt="" className={classNames('dtdescbottom',descClass)} /> */}
                 </div>
         </div>
        );
    }
}

export default Toilet;