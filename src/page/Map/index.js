import React, { Component } from 'react';
import classNames from 'classnames';
import './index.scss';

class Map extends Component {

    addMapDesc() {
        const mapImg = document.getElementsByClassName('map-img')[0];
        mapImg.classList.add('mapMoveRight')
    }

    changeDesc() {
        const mapLogoMove = document.getElementsByClassName('map-logo-img')[0];
        mapLogoMove.classList.add('map-logo-move')
        const mapDesc = document.getElementsByClassName('map-desc')[0];
        mapDesc.classList.add('mapDescMove')
        const advantageItem = document.getElementsByClassName('advantageItem')[0];
        const advantageItem2 = document.getElementsByClassName('advantageItem2')[0];
        const advantageItem3 = document.getElementsByClassName('advantageItem3')[0];
        const advantageItem4 = document.getElementsByClassName('advantageItem4')[0];
        advantageItem.classList.add('addItem');
        advantageItem2.classList.add('addItem1');
        advantageItem3.classList.add('addItem2');
        advantageItem4.classList.add('addItem3')
    }

    removeClass(e) {
        const {index} = this.props;
        if (e.target.id === 'page2' || index === 2) {
            return;
        }
    }

    additem() {
        const advantageItem = document.getElementsByClassName('advantageItem')[0];
        const advantageItem2 = document.getElementsByClassName('advantageItem2')[0];
        const advantageItem3 = document.getElementsByClassName('advantageItem3')[0];
        const advantageItem4 = document.getElementsByClassName('advantageItem4')[0];
        advantageItem.classList.add('addItem');
        advantageItem2.classList.add('addItem1');
        advantageItem3.classList.add('addItem2');
        advantageItem4.classList.add('addItem3')
    }

    addSecondItem() {
        // const advantageItem2 = document.getElementsByClassName('advantageItem2')[0];
        // advantageItem2.classList.add('addItem')
    }

    addThirdItem() {
        // const advantageItem3 = document.getElementsByClassName('advantageItem3')[0];
        // advantageItem3.classList.add('addItem')
    }

    addFourthItem() {
        // const advantageItem4 = document.getElementsByClassName('advantageItem4')[0];
        // advantageItem4.classList.add('addItem')
    }

    showprompt() {
        const logoprompt = document.getElementsByClassName('logoprompt')[0];
        logoprompt.classList.add('moveLogoPrompt');
    }

    render() {
        const {index, endMove, itemHeight} = this.props;
        console.log(index, '2')
        let headerImg = '';
        let mapAllClass = '';
        let mapfromRightClass = ''
        let mapdescmMveClass = ''
        let moveitem1Class= ''
        let moveitem2Class= ''
        let moveitem3Class= ''
        let moveitem4Class= ''
        let moveLogoClass = ''
        let mpaplogoShowClass = ''
        if (index === 1 || index === 3) {
            mapAllClass = 'mapMoveAll'
            headerImg = 'moveHeaderImg'
            mapfromRightClass = 'mapMoveRight'
            mapdescmMveClass = 'mapDescMove'
            moveitem1Class = 'addItem1'
            moveitem2Class = 'addItem2'
            moveitem3Class = 'addItem3'
            moveitem4Class = 'addItem4'
            moveLogoClass = 'moveLogoPrompt'
            mpaplogoShowClass = 'map-logo-move'
        }
        return (
            <div className={classNames('mapPage', mapAllClass)} id="page2" onTouchEnd={(e) => this.removeClass(e)}>
                <div className="map-header" id="page2">
                        <div className="backImg"></div>
                        <div className={classNames('map-geography', headerImg)} >
                            <img src={require('../../assets/images/map1.png')} alt="" />
                        </div>
                    </div>
                <div className="insideMap" id="page2">
                    <div className={classNames(mapfromRightClass,"map-img")} id="page2" >
                        <img src={require('../../assets/images/map.png')} className="mapimgs" alt="" id="page2" />
                        <a className="send" href="http://api.map.baidu.com/marker?location=31.208553,121.499422&title=我的位置&content=世博滨江大厦&output=html">
                            <img src={require('../../assets/images/logo1.png')} className={classNames("map-logo-img",mpaplogoShowClass )} alt="" id="page2" />
                        </a>
                    </div>
                    <img src={require('../../assets/images/maplogo.png')} alt="" className={classNames(moveLogoClass,"logoprompt")} />
                    <img src={require('../../assets/images/map2.png')} alt="" className={classNames('map-desc',mapdescmMveClass)} />
                    <div className="map-advantage" id="page2">
                        <div className={classNames(moveitem1Class, "advantageItem")} >
                            <img src={require('../../assets/images/mapfly.png')} className="signimg" id="page2" alt=""  />
                        </div>
                        <div className={classNames(moveitem2Class,"advantageItem2")} id="page2" > 
                            <img src={require('../../assets/images/maptrain.png')} className="signimg" id="page2" alt="" />
                        </div>
                        <div className={classNames(moveitem3Class,"advantageItem3")} id="page2">
                            <img src={require('../../assets/images/mapsubway.png')} className="signimg" id="page2" alt="" />
                        </div>
                        <div className={classNames(moveitem4Class,"advantageItem4")} id="page2" onAnimationEnd={() => this.showprompt()}>
                            <img src={require('../../assets/images/mapcar.png')} className="signimg" id="page2" alt="" />
                        </div>
                    </div>
                    <div className="map-bottom-box" id="page2">
                        <img src={require('../../assets/images/line.png')} id="page2" alt="line" className="line-img" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Map;