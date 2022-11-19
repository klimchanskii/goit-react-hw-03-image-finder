// import { Modal } from 'components/Modal/Modal'
import { Component } from 'react'
import {ImageGalleryItemImage,ImageGalleryItem} from './ImageGalleryItem.styled'


export class GalleryItems extends Component {
 
    render() {

        const {images} = this.props
       return (
        images.map(image => 
            <ImageGalleryItem key={image.id}
              
            >
                <ImageGalleryItemImage
                    onClick={this.props.selectedPicture}
                    src={image.webformatURL} alt=""
               
                />
               
          </ImageGalleryItem>  

        )
        
    )
  
    }
    
   
}