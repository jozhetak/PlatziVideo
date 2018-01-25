import React from 'react';
import Media from './media.js';
import './playlist.css';

function Playlist(props){
  return(
    <div>
      <div className="Playlist">
        {
          props.playlist.map((item)=>{
            return <Media
              {...item}
              key={item.id}
              openModal={props.handleOpenModal}
            />
          })
        }
      </div>
    </div>
  )
}

export default Playlist;
