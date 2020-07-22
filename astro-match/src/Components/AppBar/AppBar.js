import React from 'react';
import styled from 'styled-components';
import PeopleIcon from '@material-ui/icons/People';
import Typography from '@material-ui/core/Typography';

const AppBarContainer = styled.div` 
     display: flex;
     justify-content: space-between;
     border-bottom: 1px solid lightgrey;
     align-items: center;
     padding: 10px;
`;

function AppBar (props) {
    return(
    <AppBarContainer>
    <button onClick={props.goToChooseProfilePage}>Escolher</button>
    <Typography>Astromatch</Typography>
    <PeopleIcon onClick={props.goToMacthListPage}>List</PeopleIcon>

    </AppBarContainer>)
}

export default AppBar;