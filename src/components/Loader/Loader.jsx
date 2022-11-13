import { TailSpin } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Wrapper} from './Loader.styled'


export const Loader =() => {

    return <Wrapper> <TailSpin
  height="80"
  width="80"
  color="#1c134e"
  ariaLabel="tail-spin-loading"
  radius="2"
        wrapperStyle={{
           
            position: "absolute",
            top:' 50%',
            left:' 50%',
}}

  visible={true}/>
</Wrapper>
    
}

   