import React, {Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout.js';
import Video from '../components/video.js';
import Title from '../components/title.js';
import PlayPuse from '../components/play-pause.js';
import Timer from '../components/timer.js';
import Controls from '../components/video-player-controls.js';
import formattedTime from '../../utilitis/utilitis.js';
import ProgressBar from '../components/progress-bar.js';
import Spinner from '../components/spinner.js';
import Volumen from '../components/volumen.js';
import FullScreen from '../components/fullscreen.js';

class VideoPlayer extends Component{
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    durationFloat: 0,
    timeFloat: 0,
    loading: false,
    volume: 1,
    lastVolumeState: null,
  }
  // Comporbamos el estado del video si esta o no en pause 
  // y si esta en uno al hacer click cambiamos el estado
  togglePlay = (e) =>{
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount(){
    this.setState({
      pause: (!this.props.autoPlay)
    })
  }
  handleLoadedMetaData = (e) =>{
    this.video = e.target;
    this.setState({
      duration: formattedTime(this.video.duration),
      durationFloat: this.video.duration
    })
  }
  handleTimeUpdate = (e) =>{
    this.setState({
      currentTime: formattedTime(this.video.currentTime),
      timeFloat: this.video.currentTime
    })
  }
  handleProgressChange = (e) =>{
    // e.target.value;
    this.video.currentTime = e.target.value;
  }
  handleSeeking = (e) =>{
    this.setState({
      loading: true,
    })
  }
  handleSeeked = (e) =>{
     this.setState({
      loading: false,
    })
  }
  handleVolumeChange = (e) =>{
    this.video.volume = e.target.value
    this.setState({
      volume: this.video.volume
    })
  }
   mute = ()  => {
    const lastState = this.video.volume
    this.setState({
      lastVolumeState: lastState,
      volume: 0
    })
    this.video.volume = 0
  }

  unmute = () => {
    this.setState({
      volume: this.state.lastVolumeState
    })
    this.video.volume = this.state.lastVolumeState
  }

  handleVolumeMute = e => {
    // console.log(this.video.volume)
    this.video.volume !== 0 ? this.mute() : this.unmute()
    // console.log(this.video.volume)
  }

  // Con esta funcion lo que hacemos es tomar al elemento 
  // VideoPlayerLayout para maximizar todo el reprod.
  setRef = e => {
    this.player = e
  }

  // Aca validamos si estamos o no el fullscreen para 
  // poner o no en ese estado dependiendo que navegador se use
  handleFullScreen = e =>{
    if(document.webkitIsFullScreen){
      document.webkitExitFullscreen()
    } else if(document.mozFullScreen) {
      document.mozCancelFullScreen()
    } else{
      if ( this.player.webkitRequestFullscreen ) {
        this.player.webkitRequestFullscreen()
      } else if ( this.player.mozRequestFullScreen ) {
        this.player.mozRequestFullScreen()
      }
    }
  }
  render(){
    return(
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title
          title={this.props.title}
        />
        <Controls>
          <PlayPuse
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer 
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <Volumen 
            handleVolumeChange={this.handleVolumeChange}
            handleClick={this.handleVolumeMute}
            volume={this.state.volume}
          />
          <ProgressBar
            value = {this.state.timeFloat}
            duration = {this.state.durationFloat}
            handleProgressChange={this.handleProgressChange}
          />
          
          <FullScreen
            handleFullScreen={this.handleFullScreen}
          />
        </Controls>
        <Spinner 
          active={this.state.loading}
        />
        <Video
          src={this.props.src}
          pause={this.state.pause}
          autoPlay={this.props.autoPlay}
          handleLoadedMetaData={this.handleLoadedMetaData}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;
