var React = require('react');
var ImagePreload = require('react-img-preload');

var Component = React.createClass({
  render: function render() {
    
    if (this.props.imgStatus === ImagePreload.STATUS_PENDING) {
    
      // Render something to show that image is loading
    //   content = <div>Image is loading...</div>;
    console.log('qingqiuzhong')
    } else if (this.props.imgStatus === ImagePreload.STATUS_LOADED) {
    console.log('qingqiujieshu')
      // Image is loaded, render it
    //   content = <img src={this.props.img} />
    } else if (this.props.imgStatus === ImagePreload.STATUS_FAILED) {
        console.log('qingqiushibai')
      // Image is failed to load, render default one instead
    //   content = <img src="http://dummyimage.com/600x400/000/fff&text=Default+image" />
    }

  }
});

// ImagePreload will know that it should preload image with src specified via "img" prop.
// It will update the loading status of the image through imgStatus prop.
var EnhancedComponent = ImagePreload(Component, ['img']);

React.render(
    <EnhancedComponent img="http://38.media.tumblr.com/tumblr_lrbu1l9BJk1qgzxcao1_250.gif"/>,
    document.getElementById('app')
);