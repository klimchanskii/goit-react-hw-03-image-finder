import { Component } from "react";
import { Searchbar } from './Searchbar/Searchbar';
import { Gallery } from "./ImageGallery/ImageGallery";
import { Button } from './Button/Button'
import { Modal } from "./Modal/Modal";
import { Loader } from './Loader/Loader'
import { appService } from './Api'

export class App extends Component{

  state = {
    search: '',
    data: [],
    page: 1,
    showModal: false,
    modalImage: '',
    loader: false,
    status: 'idle',
    totalHits: null,

  };

 componentDidUpdate(pP, pS) {
   if (pS.search !== this.state.search || pS.page !== this.state.page) {
     this.setState({ status: 'pending' })
      

     appService(this.state.search, this.state.page).then(
       data => {
          console.log(data);
         if (!data.hits.length) {
           this.setState({ data: []})
            return  alert(
              'There is no images found with this search request'
            );          
         }
         this.setState({ data: [...this.state.data, ...data.hits], status: 'resolve', totalHits:data.totalHits })
       } )
     return
   }
   
 }
  
  handelFormSubmit = (search) => { this.setState({ search,page:1,data:[] }) }
  
  incrementPage = () => {
    this.setState({ page: this.state.page + 1 })
  }
    closeModal = () => {
          this.setState({
            showModal: false,
      
        })
    }

  
  selectedPicture = (e) => {
    this.setState({ status:'pending'  })
    const largeImg = e.currentTarget.src
    console.log(e.target);
 
     const img = this.state.data.find(el => el.webformatURL === largeImg).largeImageURL
    this.setState({ modalImage: img,showModal: true,status:'resolve' }) } 


  render() {
    const { status, data, page, totalHits, showModal, modalImage } = this.state
    
    if (status === 'pending') {
      return  <Loader/>
    }

     if (status === 'resolve') {
       return <>
         <Searchbar onSubmit={this.handelFormSubmit} />
         <Gallery log={data} selectedPicture={this.selectedPicture} />
         {(page < Math.ceil(totalHits/12)) && <Button incrementPage={this.incrementPage} />}
       {showModal && <Modal image={ modalImage} closeModal={this.closeModal} />}
       </>
     }
    if (status === 'idle') {
      
    return  <Searchbar onSubmit={this.handelFormSubmit} />
    }

}
}
  
