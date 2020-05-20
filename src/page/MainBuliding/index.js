import React, { Component } from 'react';
import classNames from 'classnames';
import './index.scss';

class MainBuliding extends Component {
    
    gotoBack() {
        // this.props.history.goBack()
    }

    changeStand() {
        const standTitle = document.getElementById('standTitle');
        standTitle.classList.add('standMoveTitle');
    }

    changeStandImg() {
        const standImg = document.getElementById('standImg');
        standImg.classList.add('standMoveImg')
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
        let mainFloorHeader = '';
        let planMoveImg = '';
        let standMoveImg = '';
        let standMovetitle = '';
        if (index === 4 || index === 6) {
            mainFloorHeader = 'geographyMove';
            planMoveImg = 'planImgMove'
            standMoveImg = 'standImgMove'
            standMovetitle = 'standTitleMove';
        }
        return (
            <div className="main-buliding" id="page5" >
                <div className="map-header" id="page5">
                   <div className=""></div>
                    <div className={classNames(mainFloorHeader, "geography")}>
                        <p >主楼平面图</p>
                    </div>
                </div>
               <div className="plan" id="page5" >
                    <img className={planMoveImg} id="page5" src={require('../../assets/images/mainPlan.png')} alt="" />
               </div>
                <p className={classNames(standMovetitle,"standTitle" )} id="page5" >
                    主楼立面图
                </p>
                <div className="stand" id="page5">
                    <img className={classNames(standMoveImg)} src={require('../../assets/images/mainStand.png')} id="page5" alt="" />
                </div>
               <div className="technical-detail" id="page5">
                   
                   <div className="map-bottom-box">
                        <img src={require('../../assets/images/line.png')} alt="line" id="page5" className="line-img" />
                    </div>
               </div>
               <div className="back-btn" onClick={() => this.backupba()} id="page5">BACK</div>
            </div>
        );
    }
}

export default MainBuliding;