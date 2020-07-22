import React from 'react';
import styled from 'styled-components';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CancelIcon from '@material-ui/icons/Cancel';


const ButtonContainer = styled.div` 
     display: flex;
     justify-content: space-around;
     padding: 10px;
     align-items: center;
    
`;

function ChooseButton (props) {
    
    return(
        
        <ButtonContainer>
        <CancelIcon onClick={props.onClickNo}></CancelIcon>
        <FavoriteIcon onClick={props.onClickYes}></FavoriteIcon>
        </ButtonContainer>

    )
}

export default ChooseButton;