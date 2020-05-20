import React, { Component } from 'react';
import './index.scss';
import classNames from 'classnames';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstMenu: '',
            secondMenu: '',
            thirdmenu: '',
            fourthMenu: '',
            fifthMenu: '',
            sixthMenu: '',
            seventhMenu: '',
            ifShowClear: false,
            id: '',
        }
    }
    
    setStorage(str) {
        localStorage.setItem('showMenuName', str)
        const {itemHeight} = this.props;
        const content = document.getElementById('content');
        switch (str) {
            case 'firstMenu':
                this.setState({
                    firstMenu: 'firstMenu',
                })
                content.style.webkitTransform = 'translateY(-'+(itemHeight*3)+'px)'
                this.props.setIndex(3)
                break;
            case 'secondMenu':
                this.setState({
                    secondMenu: 'secondMenu'
                })
                content.style.webkitTransform = 'translateY(-'+(itemHeight*1)+'px)'
                this.props.setIndex(1)
                break;
            case 'thirdmenu':
                this.setState({
                    thirdmenu: 'thirdmenu'
                })
                content.style.webkitTransform = 'translateY(-'+(itemHeight*7)+'px)'
                this.props.setIndex(7)
                break;
            case 'fourthMenu':
                this.setState({
                    fourthMenu: 'fourthMenu'
                })
                content.style.webkitTransform = 'translateY(-'+(itemHeight*2)+'px)'
                this.props.setIndex(2)
                break;
            case 'fifthMenu':
                this.setState({
                    fifthMenu: 'fifthMenu'
                })
                    break;
            case 'sixthMenu':
                this.setState({
                    sixthMenu: 'sixthMenu'
                })
                content.style.webkitTransform = 'translateY(-'+(itemHeight*10)+'px)'
                this.props.setIndex(10)
                break;
            case 'seventhMenu':
                this.setState({
                    seventhMenu: 'seventhMenu'
                })
                content.style.webkitTransform = 'translateY(-'+(itemHeight*11)+'px)'
                this.props.setIndex(11)
                break;
            default:
                break;
        }
        setTimeout(() => {
            this.props.closeModal()
        },800)
       
    }

    changeMenu() {
        const menu2 = document.getElementsByClassName('menu2')[0];
        menu2.classList.add('menuMove2')
    }

    changeMenu2() {
        const menu3 = document.getElementsByClassName('menu3')[0];
        menu3.classList.add('menuMove3')
    }

    changeMenu3() {
        const menu4 = document.getElementsByClassName('menu4')[0];
        menu4.classList.add('menuMove4')
    }

    showMenuItem() {
        const menu1 = document.getElementsByClassName('menu1')[0];
        menu1.classList.add('menuMove');
    }

    closeModal() {
        this.props.closeModal()
    }

    render() {
        const {ifShowMenu} = this.props;

        let leftMoveClass = '';
        let rightMoveClass = '';
        if (ifShowMenu) {
            leftMoveClass = 'menuItemLeftMove';
            rightMoveClass ='menuItemRightMove'
        }
        const showMenuName = localStorage.getItem('showMenuName');
        let showImg1 = ''
        let showImg2 = ''
        let showImg3 = ''
        let showImg4 = ''
        let showImg5 = ''
        let showImg6 = ''
        let showImg7 = ''
        showImg1 = showMenuName === 'firstMenu' ? 'showimg1' : '';
        showImg2 = showMenuName === 'secondMenu' ? 'showimg2' : '';
        showImg3 = showMenuName === 'thirdmenu' ? 'showimg3' : '';
        showImg4 = showMenuName === 'fourthMenu' ? 'showimg4' : '';
        showImg5 = showMenuName === 'fifthMenu' ? 'showimg5' : '';
        showImg6 = showMenuName === 'sixthMenu' ? 'showimg6' : '';
        showImg7 = showMenuName === 'seventhMenu' ? 'showimg7' : '';
        
        return (
            <div className="menu" >
                <div className="line-img">
                    <img src={require('../../assets/images/line.png')} alt=""/>
                </div>
                <div className="menu-page" >
                    <div className={classNames(leftMoveClass, "menuItem menuItemLeft" )} >
                        <div className="menu-left" id="mask1" onClick={(e) => this.setStorage('firstMenu', 4)}>
                            {
                                showMenuName === 'firstMenu' ? 
                                null:
                                <div className="mask"   >
                                    <img src={require('../../assets/images/leftmask.png')}  alt="" />
                                </div>
                            }
                            <p className="text" >UBPA</p>
                            <img  src={require('../../assets/images/one.png')} className={showImg1} alt="" />
                        </div>
                        <div className="menu-right"  onClick={() => this.setStorage('secondMenu',2)}>
                            {
                                showMenuName === 'secondMenu' ? 
                                null:
                                <div className="mask" >
                                    <img src={require('../../assets/images/rightmask.png')}   alt="" />
                                </div>
                            }
                            <p className="text" >便捷交通</p>
                            <img  src={require('../../assets/images/two.png')} className={showImg2} alt="" />
                        </div>
                    </div>


                    <div className={classNames(rightMoveClass,"menuItem2 menu2")}  >
                        <div className="menu-left" onClick={() => this.setStorage('thirdmenu',7)} >
                            {
                                showMenuName === 'thirdmenu' ? 
                                <div className="desctext" >
                                </div> :
                                <div className="mask " >
                                    <img src={require('../../assets/images/leftmask1.png')}  alt="" />
                                </div>
                            }
                            <p className="text" >优势空间</p>
                            <img src={require('../../assets/images/three.png')}  className={showImg3} alt="" />
                        </div>
                        <div className="menu-right"  onClick={() => this.setStorage('fourthMenu',3)}>
                            {
                                showMenuName === 'fourthMenu' ? 
                                <div className="desctext"  >
                                </div>:
                                <div className="mask"  >
                                    <img src={require('../../assets/images/rightmask1.png')}  alt="" />
                                </div>
                            }
                            <p className="text" >项目介绍</p>
                            <img  src={require('../../assets/images/four.png')} className={showImg4} alt="" />
                        </div>
                    </div>


                    <div className={classNames(leftMoveClass,"menuItem3 menu3")}  >
                        <div className="menu-left" onClick={() => this.setStorage('fifthMenu')}>
                            {
                                showMenuName === 'fifthMenu' ? 
                                <div className="desctext" >
                                </div> :
                                <div className="mask " id="mask5">
                                    <img src={require('../../assets/images/leftmask.png')}  alt="" />
                                </div>
                            }
                             <p className="text" >精英企业</p>
                            <img  src={require('../../assets/images/five.png')} className={showImg5} alt="" />
                        </div>
                        <div className="menu-right" onClick={() => this.setStorage('sixthMenu')}>
                            {
                                showMenuName === 'sixthMenu' ? 
                                <div className="desctext" >
                                </div>:
                                <div className="mask " id="mask6">
                                    <img src={require('../../assets/images/rightmask.png')}  alt="" />
                                </div>
                            }
                             <p className="text" >项目荣誉</p>
                            <img src={require('../../assets/images/six.png')}  className={showImg6} alt="" />
                        </div>
                    </div>


                    <div className={classNames(rightMoveClass, "menuItem4 menu4")} >
                        <div className="menu-left" onClick={() => this.setStorage('seventhMenu')}>
                            {
                                showMenuName === 'seventhMenu' ? 
                                <div className="desctext" >
                                </div> :
                                <div className="mask " >
                                    <img src={require('../../assets/images/leftmask1.png')}  alt="" />
                                </div>
                            }
                            <p className="text">集团背景</p>
                            <img src={require('../../assets/images/seven.png')}  className={showImg7} alt="" />
                        </div>
                        <div className="menu-right" onClick={() => this.closeModal()}>
                            <p className="text">BACK</p>
                            <img src={require('../../assets/images/back.png')}  alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;