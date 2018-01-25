import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './media.css';

// Nombre de la clase, nombre del archivo
class Media extends PureComponent{

  state = {
    author: 'Lucas Villarreal'
  }

  handleClick = e =>{
    this.props.openModal(this.props)
  }

  render(){
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red'
      }
    }
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            className="Media-image"
            src={this.props.cover}
            alt=""
            width={240}
            height={160}
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}
// Con esto validamos los datos que llegan
Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;
