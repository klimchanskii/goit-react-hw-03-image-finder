import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled'
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root')



export class Modal extends Component {

    componentDidMount() {

    
        window.addEventListener('keydown', this.handleKeyDown ) 
    }

 componentWillUnmount() {
        
        window.removeEventListener('keydown', this.handleKeyDown)
    }


    handleKeyDown = e => {
        if (e.code === `Escape`) {
                // console.log(e.code);
                this.props.closeModal()
                
            }
       }

    hendelClick = e => {
        if (e.target === e.currentTarget) {
        this.props.closeModal()
    }
}
    
   




   
    render() {
        
        return  createPortal(<Overlay onClick={this.hendelClick} >
            <ModalWindow>
                <img src={this.props.image} alt="" />
          
         </ModalWindow>
        </Overlay >,modalRoot  )
      }
    
   
}