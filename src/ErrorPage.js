import React from 'react';


const errorPage = (props) => {
    return (
        <div>
        
  <div className="ui active dimmer">
    <div className="ui big indeterminate text loader">{props.err} </div>
  </div>
  <p></p>
</div>

    );
}

errorPage.defaultProps ={
    err : 'To get the best result for this app you need to enable access to your location'
}


export default errorPage;