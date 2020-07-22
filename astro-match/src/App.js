import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import Main from './Components/Main/Main';
import  ResetButton from './Components/ResetButton/ResetButton';
import styled from 'styled-components';

const MainContainer = styled(Card)` 
  border-radius: 3px;
  width: 400px;
  height: 600px;
  margin: 50px;
`;


function App() {
  

  return (
    <>
    <MainContainer>
      <Main/>
   </MainContainer>
   <ResetButton/>
   </>
  );
}

export default App;


