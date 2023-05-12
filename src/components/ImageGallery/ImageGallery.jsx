import React, { Component } from 'react';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
export class ImageGallery extends Component {
  render() {
    return (
      <Gallery>
        {this.props.data.map(
          ({ webformatURL, id, tags, largeImageURL }, index) => (
            <ImageGalleryItem
              webformatURL={webformatURL}
              key={id}
              index={index}
              tags={tags}
              largeImageURL={largeImageURL}
              modalFn={this.props.modalFn}
            ></ImageGalleryItem>
          )
        )}
      </Gallery>
    );
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  modalFn: PropTypes.func.isRequired,
  loader: PropTypes.func.isRequired,
};
