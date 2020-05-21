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
const imgData = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
let loading = false

var promiseAll = imgData.map(function (item, index) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function () {
        img.onload = null;
        resolve(img);
      };
      img.error = function () {
        reject('图片加载失败');
      };
      img.src = item;
    });
  });

  Promise.all(promiseAll).then(
    function () {
      // 图片全部加载完成，进行下一步
      // todo
      console.log('success')
      loading = true
      const loadings = document.getElementsByClassName('loading')[0];
      console.log(loadings)
      loadings.style.display = 'none'
    },
    function (err) {
      console.log(err);
    }
  );

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
        let imgs = [
          img1,img2,img3,img4,img5,img6,img7,img8, img9
        ]
        let {count, percent} = this.state;
        for (let img of imgs) {
          let image = new Image()
          image.src = img
          image.onload = () => {
              this.setState({
                  count: count ++
              })
            // 计算图片加载的百分数，绑定到percent变量
            let percentNum = Math.floor(this.state.count / 9 * 100)
            this.setState({
                percent: `${percentNum}%`
            })
          }
        }
    }
    componentDidMount() {
        this.preload()
        console.log(this.state.count)
    }
  
    

    setSession() {
        sessionStorage.setItem('firstInsidejinbo', 'firstInsidejinbo');
        const loading = document.getElementById('loading');
        const home = document.getElementById('home');
        const music = document.getElementById('audio');
        setTimeout(() => {
            home.removeChild(loading)
            // this.setState({
            //     loading: false
            // })
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
                    !loading ? 
                    <div className={showNewPage}>
                        <Demo loading={loading} closeModal={() => this.closeModal()} />
                    </div>
                    :''
                }
            </div>
        )
    }
}

export default Home;