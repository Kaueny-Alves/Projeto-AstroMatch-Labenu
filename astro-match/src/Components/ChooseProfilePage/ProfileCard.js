import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
     root: {
       maxWidth: 300,
       textAlign:"center",
       display:"block",
       margin:" auto",
       marginTop: 20,
     },
     
   });
   


const ProfileContainer = styled.div` 
     margin: 16px;
    

`;

const ProfileImg = styled.img` 
     width: 100%;
     height: 350px;
     display: block;
`;

const ProfileInfo = styled.div` 
     padding: 0 16px;
`;



function ProfileCard (props) {
     const profile = props.profile
     const classes = useStyles()

    return(
     <Card className={classes.root} >
          <ProfileContainer>
          <ProfileImg src={profile.photo} alt="imagem"/>
          <ProfileInfo>
          <Typography gutterBottom variant="h5" component="h2" >{profile.name}, {profile.age}</Typography>
          <Typography variant="body1"  component="p" >{profile.bio}</Typography>
          </ProfileInfo>
          </ProfileContainer>
     </Card>
    )
}

export default ProfileCard
;