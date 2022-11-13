import { GalleryItems } from '../ImageGalleryItem/ImageGalleryItem'
import { Component } from 'react'
import {ImageGallery} from './ImageGallery.styled'


export class Gallery extends Component {
    
    render() {
    
        return (
        <>
       
        <ImageGallery className="gallery">
            <GalleryItems images={ this.props.log } test={this.props.test} />

        </ImageGallery> 
        
        
     </>
    
       

    )   
}
    

  

}