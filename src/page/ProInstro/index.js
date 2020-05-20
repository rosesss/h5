import React, { Component } from 'react';
import './index.scss';
import classNames from 'classnames';

class ProInstro extends Component {
    
    showbgImg() {
        // const floorBgImg = document.getElementsByClassName('floor-bg-img')[0];
        // floorBgImg.classList.add('floorBgImg')
    }

    showLeftImg() {
        const instroTitle = document.getElementsByClassName('instroTitle')[0];
        instroTitle.classList.add('moveHeaderImg')
        const instroTopImg = document.getElementById('instro-top-img');
        instroTopImg.classList.add('instroImgMove')
    }

    showItem2() {
        // const instroItem1 = document.getElementById('instroItem1');
        // instroItem1.classList.add('moveInstroItem')
    }

    showItem3() {
        // const instroItem2 = document.getElementById('instroItem2');
        // instroItem2.classList.add('moveInstroItem')
    }

    showItem4() {
        // const instroItem3 = document.getElementById('instroItem3');
        // instroItem3.classList.add('moveInstroItem')
    }

    showItem5() {
        // const instroItem4 = document.getElementById('instroItem4');
        // instroItem4.classList.add('moveInstroItem')
    }

    showItem6() {
        // const instroItem5 = document.getElementById('instroItem5');
        // instroItem5.classList.add('moveInstroItem')
    }



    showInstro() {
        const instroItem = document.getElementById('instroItem');
        const instroItem1 = document.getElementById('instroItem1');
        const instroItem2 = document.getElementById('instroItem2');
        const instroItem3 = document.getElementById('instroItem3');
        const instroItem4 = document.getElementById('instroItem4');
        const instroItem5 = document.getElementById('instroItem5');
        
        instroItem.classList.add('moveInstroItem')
        instroItem1.classList.add('moveInstroItem1')
        instroItem2.classList.add('moveInstroItem2')
        instroItem3.classList.add('moveInstroItem3')
        instroItem4.classList.add('moveInstroItem4')
        instroItem5.classList.add('moveInstroItem5')
    }

    removeClass() {
        const {index} = this.props;
        if (index === 3) {
            return
        }
    }

    render() {
        const {index} = this.props;
        let proTitle = '';
        let floorbgMoveClass = '';
        let rightMoveClass = ''
        let instroitem1moveClass = ''
        let instroitem2moveClass = '';
        let instroitem3moveClass = '';
        let instroitem4moveClass = '';
        let instroitem5moveClass = '';
        let instroitem6moveClass = ''
        console.log(index, '3')
        if (index === 2 || index === 4) {
            proTitle = 'moveproTitleImg'
            floorbgMoveClass = 'floorBgImg'
            rightMoveClass = 'instroImgMove'
            instroitem1moveClass = 'moveInstroItem'
            instroitem2moveClass = 'moveInstroItem1'
            instroitem3moveClass = 'moveInstroItem2'
            instroitem4moveClass = 'moveInstroItem3'
            instroitem5moveClass = 'moveInstroItem4'
            instroitem6moveClass = 'moveInstroItem5'
        }
        return (
            <div className="proInstro" id="page3" onTouchEnd={() => this.removeClass()}>
                <div className="proHeader" id="page3"  >
                    <div className="homeImgs"></div>
                    <img src={require('../../assets/images/proInstro.png')} alt="" className={classNames('instroTitle',proTitle )} />
                </div>
                <div className="proInstro-floor" id="page3">
                    <img src={require('../../assets/images/probg.jpeg')} id="page3" alt="" className={classNames("floor-bg-img",floorbgMoveClass )} />
                </div>
                <div className="floor-instro" id="page3" >
                    <div className={rightMoveClass} id="instro-top-img">
                        <img src={require('../../assets/images/instro.png')} alt=""  />
                        <img src={require('../../assets/images/instromove.gif')}  alt=""  />
                    </div>
                    
                    <div className="instroList-floor" id="page3" >
                        <div className={classNames(instroitem1moveClass, "instroItem")} id="instroItem" onAnimationEnd={() => this.showItem2()} >
                            <img src={require('../../assets/images/pro1.png')} alt="" id="groundUp" />
                        </div>
                        <div className={classNames(instroitem2moveClass, "instroItem")} id="instroItem1" onAnimationEnd={() => this.showItem3()}>
                            <img src={require('../../assets/images/pro2.png')} alt="" id="work" />
                        </div>
                        <div className={classNames(instroitem3moveClass,"instroItem")} id="instroItem2" onAnimationEnd={() => this.showItem4()}>
                            <img src={require('../../assets/images/pro3.png')} alt="" id="buy" />
                            
                        </div>
                        <div className={classNames(instroitem4moveClass, "instroItem")} id="instroItem3" onAnimationEnd={() => this.showItem5()}>
                            <img src={require('../../assets/images/pro4.png')} alt="" id="workget" />
                            
                        </div>
                        <div className={classNames(instroitem5moveClass, "instroItem")} id="instroItem4" onAnimationEnd={() => this.showItem6()}>
                            <img src={require('../../assets/images/pro5.png')} alt="" id="green" />
                            
                        </div>
                        <div className={classNames(instroitem6moveClass, "instroItem")} id="instroItem5">
                            <img src={require('../../assets/images/pro6.png')} alt="" id="parking" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProInstro;