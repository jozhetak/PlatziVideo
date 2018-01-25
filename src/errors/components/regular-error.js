import React from 'react';
import './regular-error.css';

function RegularError(props) {
  return(
    <div className="regultarError">
      <p className="regularErrorDescription">Ah ocurrido un error...</p>
      <h1 className="regularErrorIcons">🙈🙊🙉</h1>
      <p className="regularErrorDescription">Vuelva a intentarlo en unos segundos</p>
    </div>

  )
}

export default RegularError;
