import React from 'react';
import './play-pause.css';
import Play from '../../icons/components/play.js';
import Puase from '../../icons/components/pause.js';

function PlayPuse(props) {
  return(
    <div className="PlayPuse">
      {
        props.pause ?
        <button
          onClick={props.handleClick}
          >
            <Play
              size={25}
              color="lightgray"
            />
          </button>
        :
        <button
          onClick={props.handleClick}
          >
            <Puase
              size={25}
              color="lightgray"
            />
          </button>
      }

    </div>
  )
}

export default PlayPuse;
