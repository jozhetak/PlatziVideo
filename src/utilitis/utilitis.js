import React from 'react';

// Con esta funcion lo que hacemos es agregar a los segundos 2 digitos
// para que nuestro diseño no se rompa al ir sumando
const leftPad = (n) => {
  const pad = '00';
  // con subString estamos diciendo que desde el primer elemento (pos: 0) hasta la pos: 1 que borre el texto, quedaria '0' y luego hacemos una suma de strings
  // quedando '00' '01' '02' ...
  return pad.substring(0, pad.length - n.length) + n;
}

// Con esta funcion lo que hacemos es calcular los minutos y lo segundos
// para la funcion leftPad transformamos los segundos en un string
const formattedTime = (s) =>{
  const minutes = parseInt(s / 60, 10)
  const seconds = parseInt(s % 60, 10)
  return `${minutes}:${leftPad(seconds.toString())}`
}

export default formattedTime;