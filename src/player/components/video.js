import React, {Component} from 'react';
import './video.css';

class Video extends Component{
  tooglePlay(){
    if(this.props.pause){
      this.video.play()
    }else {
      this.video.pause()
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.pause !== this.props.pause) {
      this.tooglePlay();
    }
  }
  setRef = e => {
    this.video = e;
  }
  render(){
    const {
      handleLoadedMetaData,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked,
    } = this.props;
    return(
      <div className="Video">
        <video
          ref={this.setRef}
          autoPlay={this.props.autoPlay}
          src={this.props.src}
          onLoadedMetadata={handleLoadedMetaData}
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
        />
      </div>
    
    )
  }
}

export default Video;
