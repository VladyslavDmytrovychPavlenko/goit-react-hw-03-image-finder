import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';
class ImageGalleryItem extends Component {
  render() {
    return (
      <GalleryItem key={this.props.id}>
        <GalleryItemImg
          src={this.props.webformatURL}
          alt={this.props.tags}
          onClick={e => {
            this.props.modalFn(e.target.attributes[2].value);
          }}
          data-large={this.props.largeImageURL}
        />
      </GalleryItem>
    );
  }
}
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  modalFn: PropTypes.func.isRequired,
};
