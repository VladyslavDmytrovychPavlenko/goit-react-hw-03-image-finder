import React, { Component } from 'react';
import { Cont } from './Cont';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Rings } from 'react-loader-spinner';

export class App extends Component {
  state = {
    page: 1,
    searchQuery: '',
    data: [],
    showModal: false,
    modalImage: '',
    showLoader: false,
  };
  loadMore = () => {
    this.loaderToggle(true);
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  loaderToggle = bool => {
    return this.setState(({ showLoader }) => ({ showLoader: bool }));
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  setModalImage = linkImg => {
    return this.setState(({ modalImage }) => ({ modalImage: linkImg }));
  };
  openLargeImage = linkImg => {
    this.setModalImage(linkImg);
    this.toggleModal();
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.searchQuery !== this.state.searchQuery
    ) {
      fetch(
        `https://pixabay.com/api/?key=34889854-1af62613b01e34ca3c220e7a9&q=${this.state.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.state.page}&per_page=12`
      )
        .then(res => res.json())
        .then(data => {
          const newData = data.hits;
          let newArray = [];
          newArray = [...this.state.data, ...newData];
          this.loaderToggle(false);
          this.setState(({ data }) => ({ data: newArray }));
        });
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
    this.setState({ page: 1, data: [] });
  };

  render() {
    return (
      <Cont as="div" p={0}>
        {this.state.showModal && (
          <Modal closeFn={this.toggleModal} loader={this.loaderToggle}>
            <img src={this.state.modalImage} alt="modal" />
          </Modal>
        )}
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery
          searchQuery={this.state.searchQuery}
          page={this.state.page}
          data={this.state.data}
          modalFn={this.openLargeImage}
          loader={this.loaderToggle}
        ></ImageGallery>

        {this.state.data.length >= 12 && (
          <Cont
            as="div"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            pt={30}
            pb={30}
          >
            {this.state.showLoader && (
              <Rings
                visible={true}
                height="80"
                width="80"
                radius="6"
                ariaLabel="rings-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
              />
            )}
            <Button onClick={this.loadMore}></Button>
          </Cont>
        )}
      </Cont>
    );
  }
}
