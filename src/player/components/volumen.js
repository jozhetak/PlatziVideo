import React from 'react';
import IconVol from '../../icons/components/volume.js';
import IconVolMute from '../../icons/components/volume-mute.js';
import './volumen.css';

const Volumen = (props) =>{
  return(
    <div className="Volume" >
      {
        props.volume ? 
      <div onClick={props.handleClick} >
        <IconVol
          color="lightgray"
          size={25}
        />
      </div>
      :
      <div onClick={props.handleClick} >
        <IconVolMute
            color="lightgray"
            size={25}
          />
      </div>
      }
      <div className="Volume-range" >
        <input
          type="range" 
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
          value={props.volume}
        />
      </div>
    </div>
  )
}

export default Volumen;