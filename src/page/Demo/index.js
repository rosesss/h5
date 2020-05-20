import React, { Component } from 'react';
import './index.scss';
import Introduce from '../Introduce/index';
import Map from '../Map/index';
import ProInstro from '../ProInstro/index';
import Upba from '../Upba/index';
import Advantage from '../Advantage';
import Toilet from '../Toilet';
import Dt from '../Dt';
import CompanyBg from '../CompanyBg';
import Honor from '../Honor';
import Menu from '../Menu';
import MainBuliding from '../MainBuliding';
import LeftBuliding from '../LeftBuliding';
import RightBuliding from '../RightBuliding'

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,                                     //滑动计数
            moveY: 0,                                           //滑动距离
            endY: 0,                                            //滑动停止的Y坐标
            endMove: 0,
            startY: 0,
            showMore: false,
            transformY: 0,
            ifShowMenu: false,
            showMenuImg: true,
            itemHeight: 0
        }
    }
   
    componentDidMount() {
        var wraper = document.getElementById('wraper')
        var itemHeight = wraper.offsetHeight
        this.setState({
            itemHeight: itemHeight
        })
    }
    touchStart(e) {
        var touch = e.touches[0];
        this.setState({
            startY: touch.pageY
        })
        const content = document.getElementById('content');
        const EndY = content.style.webkitTransform;
            if(!EndY){
                this.setState({
                    endY: 0,
                    // endMove: 0
                })
            }else{
                this.setState({
                    endY: parseInt(EndY.replace('translateY(','')),
                    // endMove: parseInt(EndY.replace('translateY(',''))
                })
            }
    }

    touchMove(e) {
        var wraper = document.getElementById('wraper')
        var itemHeight = wraper.offsetHeight
        const content = document.getElementById('content');
        var touch = e.touches[0];
        const moveY = touch.pageY - this.state.startY;
        var teacherGuild = Number(e.target.id.split('page')[1])
        //下一页
        if (teacherGuild === NaN) {
            return false;
        }
        
        if(moveY < 0) {
            if(teacherGuild == 13) {
                return false;
            }
            content.style.webkitTransform = 'translateY(-'+(itemHeight*teacherGuild)+'px)'
            this.setState({
                endMove: -itemHeight*teacherGuild,
                index: teacherGuild
            })
        }
        //上一页
        else if(moveY > 0) {
            if(teacherGuild == 1) {
                return false;
            } 
                content.style.webkitTransform = 'translateY('+(itemHeight+this.state.endY)+'px)'
                this.setState({
                    endMove: itemHeight+this.state.endY,
                    index: teacherGuild
                })
        }
        this.setState({
            transformY: itemHeight+this.state.endY
        })
    }

    touchEnd(e) {
        // var teacherGuild = Number(e.target.id.split('page')[1])
        // this.setState({
        //     index: teacherGuild
        // })
    }

    showMenu() {
        this.setState({
            showMenu: true,
            showMenuImg: false
        })
    }

    closeModal() {
        this.setState({
            showMenu: false,
            showMenuImg: true,
        })
    }

    setIndex(index) {
        this.setState({
            index: index
        })
    }

    changeMusic() {
        const moveMusic = document.getElementsByClassName('moveMusic')[0];
        const stopmusic = document.getElementsByClassName('stopmusic')[0];
        const music = document.getElementById('audio');
        moveMusic.style.display = 'none';
        stopmusic.style.display = 'block'
        music.pause()
    }

    openMusic() {
        const moveMusic = document.getElementsByClassName('moveMusic')[0];
        const stopmusic = document.getElementsByClassName('stopmusic')[0];
        const music = document.getElementById('audio');
        moveMusic.style.display = 'block';
        stopmusic.style.display = 'none'
        music.play()
    }

    render() {
        const {loading, closeModal} = this.props;
        return (
            <div id="wraper" ref="wraper" onTouchStart={(e) => this.touchStart(e)} onTouchMove={(e) => this.touchMove(e)} onTouchEnd={(e) => this.touchEnd(e)} >
                {
                    this.state.showMenuImg ?
                    <div className="menu-header">
                        <img src={require('../../assets/images/home.png')} alt="" className="homeImg" onClick={() => this.showMenu()}/>
                       <div className="choseOrOpen">
                        <img src={require('../../assets/images/music1.png')} alt="" className="moveMusic" onClick={() => this.changeMusic()}/>
                        <img src={require('../../assets/images/music2.png')} alt="" className="stopmusic" onClick={() => this.openMusic()}/>
                       </div>
                    </div>
                    : 
                    <Menu ifShowMenu={this.state.showMenu} index={this.state.index} setIndex={this.setIndex.bind(this)} itemHeight={this.state.itemHeight} closeModal={() => this.closeModal()} openModal={() => this.showMenu()} />
                }
                
                <div id="content">
                    
                   
                   {/* <div className="page" id="page2">
                        
                   </div> */}
                    <div className="page" id="page1" >
                        <Introduce loading={loading} index={this.state.index} endMove={this.state.endMove} itemHeight={this.state.itemHeight}/>
                    </div>
                    <div className="page" id="page2">
                        <Map index={this.state.index} endMove={this.state.endMove} itemHeight={this.state.itemHeight}/>
                    </div>
                   
                    <div className="page" id="page3">
                        <ProInstro index={this.state.index} />
                    </div>

                    <div className="page" id="page4">
                        <Upba index={this.state.index} changeIndex={this.setIndex.bind(this)} />
                    </div>

                    <div className="page" id="page5">
                        <MainBuliding index={this.state.index} changeIndex={this.setIndex.bind(this)} />
                    </div>

                    <div className="page" id="page6">
                        <LeftBuliding index={this.state.index} changeIndex={this.setIndex.bind(this)} />
                    </div>

                    <div className="page" id="page7">
                        <RightBuliding index={this.state.index} changeIndex={this.setIndex.bind(this)} />
                    </div>

                    <div className="page" id="page8">
                        <Advantage index={this.state.index} />
                    </div>

                    <div className="page" id="page9">
                        <Dt index={this.state.index} /> 
                    </div>

                    <div className="page" id="page10">
                        <Toilet index={this.state.index} />
                    </div>

                    <div className="page" id="page11">
                        <Honor index={this.state.index} />
                    </div>

                    <div className="page" id="page12">
                        <CompanyBg index={this.state.index}/>
                    </div>
                </div>
            </div>
         );
    }
}

export default Demo;