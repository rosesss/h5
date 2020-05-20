import React, { Component } from 'react';
import classNames from 'classnames';
import './index.scss';
class Advantage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maskId: ''
        }
    }
    
    componentDidMount() {
     
    }

    async closeMask(str, e) {
        await this.setState({
            maskId: str
        })
    }

    removeClass(e) {
        if (e.target.className !== 'spacemask') {
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
            setTimeout(() => {
                advantagetitle.classList.remove('advantageTitleMove')
                bigoutimg.classList.remove('showBigcircle')
                lineImg.classList.remove('lineIimgshow')
                advantageItemImg1.classList.remove('showImg')
                advantageItemImg2.classList.remove('showImg')
                advantageItemImg3.classList.remove('showImg')
                advantageItemImg4.classList.remove('showImg')
                advantageItemImg5.classList.remove('showImg')
                advantageItemImg6.classList.remove('showImg')
                advantageItemImg7.classList.remove('showImg')
                centerCircle.classList.remove('showcentercircle')
                closecircle.classList.remove('showclosecircle')
                circlelogo.classList.remove('logoShow')
            }, 1000);
        }
        
       
    }

    render() {
        const {index} = this.props;
        let proInstroMove = '';
        let logoShowClass = ''
        let showcloseLogoClass = ''
        let showlineCircleClass = ''
        let showcentercircleClass =''
        let showImgClass = ''
        let showbigcircleClass = ''
        if (index === 7 || index === 9) {
            proInstroMove = 'advantageTitleMove'
            logoShowClass = 'logoShow'
            showcloseLogoClass = 'showclosecircle'
            showlineCircleClass = 'lineIimgshow'
            showcentercircleClass = 'showcentercircle'
            showImgClass = 'showImg'
            showbigcircleClass = 'showBigcircle'
        }
        return (
            <div className="advantage" id="page8" onTouchEnd={(e) => this.removeClass(e)}>
                {/* <div className="advantageMask" onTouchEnd={() => this.removeClass()}></div> */}
                <div className="advantage-title">
                    <img src={require('../../assets/images/advantageTitle.png')} alt="" className={classNames(proInstroMove, 'advantagetitle')} />
                </div>
                <div className="circleBox" id="page8">
                    <div className="bigCircle" id="page8">
                        <img src={require('../../assets/images/bigcenter.png')} alt="" id="page8" className={classNames(showbigcircleClass, "big-out-img") } />
                        <img src={require('../../assets/images/centercircle.png')} alt="" id="page8" className={classNames(showlineCircleClass,"big-line-img")} />
                        <div className="advantageList" id="page8">
                            <div className={classNames(showImgClass, "advantageItemImg", "advantageItemImg1")} id="page8"  >
                                <img src={require('../../assets/images/spacemask1.png')} id="page8" alt="" className={classNames(this.state.maskId === '1' ? 'nomask' : 'spacemask')} onClick={(e) => this.closeMask('1',e)} />
                                <img src={require('../../assets/images/space1.png')} id="page8" alt="" />
                            </div>
                            <div className={classNames(showImgClass, "advantageItemImg", "advantageItemImg2")} id="page8">
                                <img src={require('../../assets/images/spacemask2.png')} id="page8" alt="" className={this.state.maskId === '2' ? 'nomask' : 'spacemask'} onClick={(e) => this.closeMask('2',e)} />
                                <img src={require('../../assets/images/space2.png')} id="page8" alt="" />
                            </div>
                            <div className={classNames(showImgClass, "advantageItemImg", "advantageItemImg3")} id="page8">
                                <img src={require('../../assets/images/spacemask3.png')} id="page8" alt="" className={this.state.maskId === '3' ? 'nomask' : 'spacemask'} onClick={(e) => this.closeMask('3',e)} />
                                <img src={require('../../assets/images/space3.png')} id="page8" alt="" />
                            </div>
                            <div className={classNames(showImgClass, "advantageItemImg", "advantageItemImg4")} id="page8">
                                <img src={require('../../assets/images/spacemask4.png')} id="page8" alt="" className={this.state.maskId === '4' ? 'nomask' : 'spacemask'} onClick={(e) => this.closeMask('4',e)} />
                                <img src={require('../../assets/images/space4.png')} id="page8" alt="" />
                            </div>
                            <div className={classNames(showImgClass, "advantageItemImg", "advantageItemImg5")} id="page8">
                                <img src={require('../../assets/images/spacemask5.png')} id="page8" alt="" className={this.state.maskId === '5' ? 'nomask' : 'spacemask'} onClick={(e) => this.closeMask('5',e)} />
                                <img src={require('../../assets/images/space5.png')} id="page8" alt="" />
                            </div>
                            <div className={classNames(showImgClass, "advantageItemImg", "advantageItemImg6")} id="page8">
                                <img src={require('../../assets/images/spacemask6.png')} id="page8" alt="" className={this.state.maskId === '6' ? 'nomask' : 'spacemask'} onClick={(e) => this.closeMask('6',e)} />
                                <img src={require('../../assets/images/space6.png')} id="page8" alt="" />
                            </div>
                            <div className={classNames(showImgClass, "advantageItemImg", "advantageItemImg7")} id="page8">
                                <img src={require('../../assets/images/spacemask7.png')} id="page8" alt="" className={this.state.maskId === '7' ? 'nomask' : 'spacemask'} onClick={(e) => this.closeMask('7',e)} />
                                <img src={require('../../assets/images/space7.png')} id="page8" alt="" />
                            </div>
                        </div>
                        <div className="bolidcircle" id="page8">
                            <img src={require('../../assets/images/logooutcircle.png')} id="page8" alt="" className={classNames(showcentercircleClass,"centerCircle")} />
                            <img src={require('../../assets/images/logocircle.png')} id="page8" alt="" className={classNames(showcloseLogoClass,"closecircle")} />
                            <img src={require('../../assets/images/circlelogo.png')} id="page8" alt="" className={classNames(logoShowClass, "circlelogo" )} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Advantage;