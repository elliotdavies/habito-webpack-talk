import runA from './A';
import runB from './B';
import './main.scss';
import jargon from './jargon_guy.png';

const body = document.querySelector('body');

const html = '<h1>Hello Habito</h1>'
           + runA()
           + runB()
           + `<img src="${jargon}" alt="Jargon" />`;

body.innerHTML = html;
