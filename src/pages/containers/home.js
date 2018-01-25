import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related.js';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../errors/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player.js';

class Home extends Component {
  state = {
    modalVisible: false,
  }
  //abrimos el modal
  handleOpenModal = (media) =>{
    this.setState({
      modalVisible: true,
      // media: media
      media
    })
  }
  //cerramos el modal
  handleCloseModal = (e) => {
    this.setState({
      modalVisible: false,
    })
  }

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.data.categories}
            handleOpenModal={this.handleOpenModal}
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal 
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer 
                  autoPlay
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>

    )
  }
}

export default Home
