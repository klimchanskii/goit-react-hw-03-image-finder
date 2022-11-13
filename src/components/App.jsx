import { Component } from "react";
import axios from "axios";
import { Searchbar } from './Searchbar/Searchbar';
import { Gallery } from "./ImageGallery/ImageGallery";
import { Button } from './Button/Button'
import { Modal } from "./Modal/Modal";
import {Loader} from './Loader/Loader'

  axios.defaults.baseURL = 'https://pixabay.com/api';

export class App extends Component{

  state = {
    search: '',
    data: [],
    page: 1,
    showModal: false,
    modalImage: '',
    loader: false,
    status:'idle'

  };

 componentDidUpdate(pP, pS) {
   if (pS.search !== this.state.search) {
     this.setState({ status: 'pending'})

     this.appService(this.state.search, 1).then(
       data => {
         if (!data.hits.length) {
           this.setState({ data: []})
            return  alert(
              'There is no images found with this search request'
            );
           
          }
         this.setState({ data: data.hits,  status:'resolve' })
       } )
     return
   }
   
   if (pS.page !== this.state.page) {
    //  this.setState({ status: 'pending'})
     this.appService(this.state.search, this.state.page).then(
       data => { this.setState({ data:[...this.state.data, ...data.hits],status:'resolve'})}
     )  } }

  
  appService = async (search, page) => {
    
try {
  const response = await axios.get( `/`,{
        params: {
          key:process.env.REACT_APP_API_KEY,
          q: `${search}`,
          page: `${page}`,
          image_type: "photo",
          orientation: "horizontal",
          per_page: 12
       }
     })

return response.data

} catch (error) {
  console.log(error.message);
}
     
    
  }
  
  handelFormSubmit = (search) => { this.setState({ search }) }
  
  incrementPage = () => {
    this.setState({ page: this.state.page + 1 })
 
  }

    closeModal = () => {
          this.setState({
            showModal: false,
      
        })
    }
  
  
  test = (e) => {
    this.setState({ status:'pending'  })
const largeImg = e.currentTarget.src

    setTimeout(() =>{
   
    const img = this.state.data.find(el => el.webformatURL === largeImg).largeImageURL
    this.setState({ modalImage: img,showModal: true,status:'resolve' })},1000) } 


  render() {
    if (this.state.status === 'pending') {
      return  <Loader/>
    }

     if (this.state.status === 'resolve') {
       return <>
         <Searchbar onSubmit={this.handelFormSubmit} />
         <Gallery log={this.state.data} test={this.test} />
         {this.state.data.length > 0 && <Button incrementPage={this.incrementPage} />}
       {this.state.showModal && <Modal image={ this.state.modalImage} closeModal={this.closeModal} />}
       </>
     }
    if (this.state.status === 'idle') {
      
    return  <Searchbar onSubmit={this.handelFormSubmit} />
    }

}
}
  
