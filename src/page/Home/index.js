import React, { Component } from 'react';
import './index.scss';
import Demo from '../Demo';
import img1 from '../../assets/images/bg.jpg';
import img2 from '../../assets/images/bigcenter.png';
import img3 from '../../assets/images/bottom.png';
import img4 from '../../assets/images/bottommove.gif';
import img5 from '../../assets/images/business1.png';
import img6 from '../../assets/images/business2.png';
import img7 from '../../assets/images/center1.png';
import img8 from '../../assets/images/center2.png';
import img9 from '../../assets/images/center3.png';
import img10 from '../../assets/images/centercircle.png';
import img11 from '../../assets/images/companybg.jpeg';
import img12 from '../../assets/images/companycenter.png';
import img13 from '../../assets/images/companycentertitle.png';
import img14 from '../../assets/images/companyinstro.png';
import img15 from '../../assets/images/companyinstro1.png';
import img16 from '../../assets/images/companyinstro2.png';
import img17 from '../../assets/images/companyinstro3.png';
import img18 from '../../assets/images/companytitle.png';
import img19 from '../../assets/images/diantiheight.png';
import img20 from '../../assets/images/diantilong.png';
import img21 from '../../assets/images/diantiweight.png';
import img22 from '../../assets/images/diantiwidth.png';
import img23 from '../../assets/images/downfloor.png';
import img24 from '../../assets/images/dt.png';
import img25 from '../../assets/images/dtbg.jpg';
import img26 from '../../assets/images/dtInstro.png';
import img27 from '../../assets/images/five.png';
import img28 from '../../assets/images/floor.png';
import img29 from '../../assets/images/four.png';
import img30 from '../../assets/images/heightfloor.png';
import img31 from '../../assets/images/home.png';
import img32 from '../../assets/images/homebg.jpeg';
import img33 from '../../assets/images/honorbg.jpeg';
import img34 from '../../assets/images/honorcenter.png';
import img35 from '../../assets/images/honorinstro.png';
import img36 from '../../assets/images/honorLogo.png';
import img37 from '../../assets/images/honortitle.png';
import img38 from '../../assets/images/instro.png';
import img39 from '../../assets/images/instromove.gif';
import img40 from '../../assets/images/leftfloorborder.png';
import img41 from '../../assets/images/leftmask.png';
import img42 from '../../assets/images/leftmask1.png';
import img43 from '../../assets/images/line.png';
import img44 from '../../assets/images/logo.png';
import img45 from '../../assets/images/logo1.png';
import img46 from '../../assets/images/logocircle.png';
import img47 from '../../assets/images/logooutcircle.png';
import img48 from '../../assets/images/mainfloorborder.png';
import img49 from '../../assets/images/mainPlan.png';
import img50 from '../../assets/images/mainStand.png';
import img51 from '../../assets/images/map.png';
import img52 from '../../assets/images/map1.png';
import img53 from '../../assets/images/map2.png';
import img54 from '../../assets/images/mapcar.png';
import img55 from '../../assets/images/mapfly.png';
import img56 from '../../assets/images/maplogo.png';
import img57 from '../../assets/images/mapsubway.png';
import img58 from '../../assets/images/maptrain.png';
import img59 from '../../assets/images/music1.png';
import img60 from '../../assets/images/music2.png';
import img61 from '../../assets/images/one.png';
import img62 from '../../assets/images/pro1.png';
import img63 from '../../assets/images/pro2.png';
import img64 from '../../assets/images/pro3.png';
import img65 from '../../assets/images/pro4.png';
import img66 from '../../assets/images/pro5.png';
import img67 from '../../assets/images/pro6.png';
import img68 from '../../assets/images/probg.jpeg';
import img69 from '../../assets/images/proInstro.png';
import img70 from '../../assets/images/rightbuliding.png';
import img71 from '../../assets/images/rightfloorborder.png';
import img72 from '../../assets/images/rightmask.png';
import img73 from '../../assets/images/rightmask1.png';
import img74 from '../../assets/images/seven.png';
import img75 from '../../assets/images/six.png';
import img76 from '../../assets/images/space1.png';
import img77 from '../../assets/images/space2.png';
import img78 from '../../assets/images/space3.png';
import img79 from '../../assets/images/space4.png';
import img80 from '../../assets/images/space5.png';
import img81 from '../../assets/images/space6.png';
import img82 from '../../assets/images/space7.png';
import img83 from '../../assets/images/spacemask1.png';
import img84 from '../../assets/images/spacemask2.png';
import img85 from '../../assets/images/spacemask3.png';
import img86 from '../../assets/images/spacemask4.png';
import img87 from '../../assets/images/spacemask5.png';
import img88 from '../../assets/images/spacemask6.png';
import img89 from '../../assets/images/spacemask7.png';
import img90 from '../../assets/images/table.png';
import img91 from '../../assets/images/techright1.png';
import img92 from '../../assets/images/techright2.png';
import img93 from '../../assets/images/techright3.png';
import img94 from '../../assets/images/techright4.png';
import img95 from '../../assets/images/techright5.png';
import img96 from '../../assets/images/techtitle.png';
import img97 from '../../assets/images/three.png';
import img98 from '../../assets/images/tolietBg.jpg';
import img99 from '../../assets/images/toiletTitle.png';
import img100 from '../../assets/images/tolietBg.jpg';
import img101 from '../../assets/images/tolietdesc.png';
import img102 from '../../assets/images/tolietman.png';
import img103 from '../../assets/images/tolietspace.png';
import img104 from '../../assets/images/tolietwoman.png';
import img105 from '../../assets/images/two.png';
import img106 from '../../assets/images/之.png';
import img107 from '../../assets/images/天.png';
import img108 from '../../assets/images/江.png';
import img109 from '../../assets/images/滨.png';
import img110 from '../../assets/images/籁.png';
import img111 from '../../assets/images/藏.png';
import img112 from '../../assets/images/赏.png'; 
const imgData = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19,img20,img21,img22, img23,img24,img25,img26,img27,img28,img29,img30,
img31,img32,img33,img34,img35,img36,img37,img38,img39,img40,img41,img42,img43,img44,img45,img46,img47,img48,img49,img50,img51,img52,img53,img54,img55,img56,img57,img58,img59,img60,img61,img62,img63,img64,img65,
img66,img67,img68,img69,img70,img71,img72,img73,img74,img75,img76,img77,img78,img79,img80,img81,img82,img83,img84,img85,img86,img87,img88,img89,img90,img91,img92,img93,img94,img95,img96,img97,img98,img99,img100,img101,img102,img103,img104,img105,img106,
img107,img108,img109,img110,img111,img112];


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            ifShowMenu: false,
            ifShowImg: true,
            count: 0,
            percent: ''
        }
    }

    
   

    preload() {
        let imgs = imgData;
        let {count} = this.state;
        for (let img of imgs) {
          let image = new Image()
          image.src = img
          image.onload = () => {
              this.setState({
                  count: count ++
              })
            // 计算图片加载的百分数，绑定到percent变量
            let percentNum = Math.floor(this.state.count / 112 * 100)
            this.setState({
                percent: `${percentNum}%`
            })
          }
        }
    }
    componentDidMount() {
        this.preload()
        document.addEventListener("visibilitychange", function() {
            if(document.hidden) {
                // Howler.volume(0);
            }else{
                var soundStatus=localStorage.getItem("soundStatus");
                if(soundStatus){
                    // Howler.volume(soundStatus);
                }else{
                    // Howler.volume(1);
                }
        
            }
        });
    }
  
    

    setSession() {
        sessionStorage.setItem('firstInsidejinbo', 'firstInsidejinbo');
        const loading = document.getElementById('loading');
        const home = document.getElementById('home');
        const music = document.getElementById('audio');
        setTimeout(() => {
            home.removeChild(loading)
            this.setState({
                loading: false
            })
            // function audioAutoPlay() {
            //     music.play();
            //     document.addEventListener("WeixinJSBridgeReady", function () {
            //         music.play();
            //     }, false);
            // }
            // audioAutoPlay();
            function musicInWeixinHandler() {
                musicPlay(true);
                document.addEventListener("WeixinJSBridgeReady", function () {
                    musicPlay(true);
                }, false);
                document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
            }
            document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
            function musicPlay(isPlay) {
                if (isPlay && music.paused) {
                    music.play();
                }
                if (!isPlay && !music.paused) {
                    music.pause();
                }
            }
        }, 200)
        
    }

    showMenu() {
        this.setState({
            ifShowMenu: true,
            ifShowImg: false
        })
        // localStorage.removeItem('showMenuName')
    }

    closeModal() {
        this.setState({
            ifShowMenu: false,
            ifShowImg: true,
            loading: false
        })
    }

    render() {
        const firstInsidejinbo = sessionStorage.getItem('firstInsidejinbo');
        let showNewPage = '';
        if (firstInsidejinbo) {
            showNewPage = 'show'
        } else {
            showNewPage = 'hide'
        }
        return (
            <div id="home">
                
                <div className="loading" id="loading" >
                    <div className="loading-box">
                        <div className="upbox" onAnimationEnd={() => this.setSession()}></div>
                        <img className='play' src={require('./../../assets/images/logo.png')} alt=""  />
                    </div>
                </div>
                {
                    !this.state.loading ? 
                    <div className={showNewPage}>
                        <Demo loading={this.state.loading} closeModal={() => this.closeModal()} />
                    </div>
                    :''
                }
            </div>
        )
    }
}

export default Home;