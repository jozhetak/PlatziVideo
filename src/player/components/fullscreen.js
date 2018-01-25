import React from 'react';
import FullScreenIcon from '../../icons/components/fullscreen.js';
import './fullscreen.css';

const FullScreen = props =>(
  <div 
    className="FullScreen"
    onClick={props.handleFullScreen}
  >
    <FullScreenIcon 
      color="lightgray"
      size={23}
    />
  </div>
)

export default FullScreen;