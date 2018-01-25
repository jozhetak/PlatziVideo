import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home.js';
import data from '../api.json';

const homeContainer = document.getElementById('home-container');

// ReactDOM.render(que voy a renderizar, donde lo hare)
//Cuando ejecutamos un component con HTML, lo ponemos como una etiqueta
// A esto le podemos pasar propiedades
render(<Home data={data}/>, homeContainer);
