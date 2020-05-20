import React, { Component } from 'react';
import classNames from 'classnames';
import './index.scss';
class Upba extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showClass: false,
            showMainFloor: false,
            showLeftFloor: false,
            showRightFloor: false
        }
    }

    addTech() {
        const tables = document.getElementsByClassName('tables')[0];
        tables.classList.add('tableMove')
    }

    addValClass() {
        const tableVal = document.getElementsByClassName('tableVal')[0]
        tableVal.classList.add('tableValMove');
    }

    addRightClass() {
        const technicalRight = document.getElementsByClassName('technical-right')[0];
        technicalRight.classList.add('technicalRightMove')
    }

    removeClass() {
        const {index} = this.props;
        const tabletitle = document.getElementsByClassName('tabletitle')[0];
        const tables = document.getElementsByClassName('tables')[0];
        const technicalRight = document.getElementsByClassName('technical-right')[0];
        const floorImg = document.getElementsByClassName('floor-img')[0];
        const mainborder = document.getElementsByClassName('mainborder')[0];
        const leftborder = document.getElementsByClassName('leftborder')[0];
        const rightborder = document.getElementsByClassName('rightborder')[0];
        if (index !== 5) {
            setTimeout(() => {
                tabletitle.classList.remove('techMoveTitle')
                tables.classList.remove('tableMove')
                technicalRight.classList.remove('techRightMove')
                floorImg.classList.remove('techMoveImg')
                mainborder.classList.remove('showMainBorder')
                leftborder.classList.remove('showleftBoder')
                rightborder.classList.remove('showrightborder')
            }, 100)
        }
        
    }

    changeState() {
        var wraper = document.getElementById('wraper')
        var itemHeight = wraper.offsetHeight
        const content = document.getElementById('content');
        content.style.webkitTransform = 'translateY(-'+(itemHeight*4)+'px)'
        this.props.changeIndex(4)
    }

    gotoLeft() {
        var wraper = document.getElementById('wraper')
        var itemHeight = wraper.offsetHeight
        const content = document.getElementById('content');
        content.style.webkitTransform = 'translateY(-'+(itemHeight*5)+'px)' 
        this.props.changeIndex(7)
    }

    gotoRight() {
        var wraper = document.getElementById('wraper')
        var itemHeight = wraper.offsetHeight
        const content = document.getElementById('content');
        content.style.webkitTransform = 'translateY(-'+(itemHeight*6)+'px)' 
        this.props.changeIndex(6)
    }
    
    render() {
        const {index} = this.props;
        let headerImg = '';
        let upbaFloorMoveClass = '';
        let tableMoveClass = '';
        let technicalRightClass = '';
        let activeTextClass = '';
        let mainBorderClass = '';
        let leftFloorClass = '';
        let rightFloorClass = '';
        if (index === 3 || index === 5 || this.state.showClass) {
            headerImg = 'techMoveTitle'
            upbaFloorMoveClass = 'techMoveImg'
            tableMoveClass = 'tableMove'
            technicalRightClass = 'techRightMove';
            activeTextClass = 'activeText'
            mainBorderClass = 'showMainBorder';
            leftFloorClass = 'showleftBoder';
            rightFloorClass ='showrightborder';
        }
        return (
            <div className="upba" id="page4" >
                <div className="inMap" id="page4">
                <div className="map-header">
                    <div className="backImg"></div>
                    <div className={classNames('tabletitle', headerImg)} id="page4" >
                        <img src={require('../../assets/images/techtitle.png')} alt="" id="page4" />
                    </div>
                </div>
               <div className="technical-floor" id="page4">
                    <img src={require('../../assets/images/mainfloorborder.png')} id="page4" alt="" className={classNames(mainBorderClass, 'mainborder')} onClick={() => this.changeState()}/>
                    <img src={require('../../assets/images/leftfloorborder.png')} id="page4" alt="" className={classNames(leftFloorClass, 'leftborder')} onClick={() => this.gotoLeft()}/>
                    <img src={require('../../assets/images/rightfloorborder.png')} id="page4" alt="" className={classNames(rightFloorClass, 'rightborder')} onClick={() => this.gotoRight()} />
                    <img src={require('../../assets/images/floor.png')} id="page4" alt="" className={classNames(upbaFloorMoveClass,"floor-img")}/>
               </div>
                <div className={classNames(activeTextClass, "activeShowText")} id="page4">
                    <img src={require('../../assets/images/check.png')} alt="" />
                </div>
               <div className="technical-detail" id="page4">
                   <div className="technical-left">
                       <img src={require('../../assets/images/table.png')} id="page4" alt="" className={classNames(tableMoveClass,'tables')} />
                   </div>
                   <div className={classNames(technicalRightClass,"technical-right" )} id="pege4">
                    <div className="floorItem">
                        <img src={require('../../assets/images/techright1.png')} id="page4" alt="" />
                    </div>
                    <div className="floorItem">
                        <img src={require('../../assets/images/techright2.png')} id="page4" alt="" />
                    </div>
                    <div className="floorItem">
                        <img src={require('../../assets/images/techright3.png')} id="page4" alt="" />
                    </div>
                    <div className="floorItem">
                        <img src={require('../../assets/images/techright4.png')} id="page4" alt="" />
                    </div>
                    <div className="floorItem">
                        <img src={require('../../assets/images/techright5.png')} id="page4" alt="" />
                    </div>
                   </div>
                   <div className="map-bottom-box">
                        <img src={require('../../assets/images/line.png')} alt="line" id="page4" className="line-img" />
                    </div>
               </div>
                </div>
            </div>
        );
    }
}

export default Upba;