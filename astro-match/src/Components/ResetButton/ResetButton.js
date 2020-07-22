import React from 'react';
import axios from 'axios'


function ResetButton () {

    const onClickReset = () => {
        axios
          .put(
            'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kaueny/clear',
            
          )
          .then(resposta => {
            console.log(resposta.data)
            
          })
          .catch(erro => {
            console.log(erro);
          });
      };


    return(
    <div>
   <button
    onClick={onClickReset}
   >Resetar curtidas e matches</button>
    </div>)
}

export default ResetButton;