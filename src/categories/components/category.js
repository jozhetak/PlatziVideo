import React from 'react';
import Playlist from '../../playlist/components/playlist.js';
import './category.css';

function Category(props) {
  return(
    <div className="Category">
      <div>
        <h1 className="title">{props.title}</h1>
        <p className="description">{props.description}</p>
      </div>
      <Playlist
        playlist={props.playlist}
        handleOpenModal={props.handleOpenModal}
      />
    </div>
  )
}

export default Category;
