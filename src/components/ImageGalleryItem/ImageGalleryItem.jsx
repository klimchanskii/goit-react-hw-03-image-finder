// import { Modal } from 'components/Modal/Modal'
import { Component } from 'react'
import {ImageGalleryItemImage,ImageGalleryItem} from './ImageGalleryItem.styled'


export class GalleryItems extends Component {
    // state = {
    //     modal: false,

    // }
    // closeModa;

    // openModal = () => {

    //     this.setState({
    //         modal: true,
      
    //     })
    // }
    // closeModal = () => {
    //       this.setState({
    //         modal: false,
      
    //     })
    // }
//     largeImageFind = event => {
//     const openImage = this.state.gallery.find(
//       image => image.webformatURL === event.currentTarget.src
//     ).largeImageURL;
//     return openImage;
//   };
    test = (e) => {
        console.log(e.currentTarget);
    } 


    render() {

        const {images} = this.props
       return (
        images.map(image => 
            <ImageGalleryItem key={image.id}
              
            >
                <ImageGalleryItemImage
                    onClick={this.props.test}
                    src={image.webformatURL} alt=""
               
                />
               
          </ImageGalleryItem>  

        )
        
    )
  
    }
    
   
}