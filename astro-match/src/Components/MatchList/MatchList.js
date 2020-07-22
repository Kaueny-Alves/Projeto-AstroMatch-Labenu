import React, { useEffect, useState } from 'react';
import MatchItem from './MatchItem';
import styled from 'styled-components';
import axios from 'axios';


const ListContainer = styled.div`
    padding: 8px;
`


function MatchList () {
    const [matches, setMatches] = useState([])

    useEffect(()=>{
        axios
      .get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kaueny/matches',
        
      )
      .then(response => {
       console.log(response.data.matches)
       setMatches(response.data.matches)
      })
      .catch(erro => {
        console.log(erro);
      });

    },[])
    

    return(
    <ListContainer>
      {matches.map(profile=>{
          return<MatchItem
            profile={profile}
          />
        })}
  
    </ListContainer>)
}

export default MatchList;