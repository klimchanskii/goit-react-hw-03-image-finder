import { ButtonMore } from "./Button.styled"



export const Button = ({incrementPage}) => {
    

    return (
        
        <ButtonMore onClick={() => incrementPage()}>
            Load more
        </ButtonMore>
    )
}