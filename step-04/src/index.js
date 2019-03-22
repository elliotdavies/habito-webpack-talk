import runA from './A';
import runB from './B';

// v-- Reference main.scss
import './main.scss';

const body = document.querySelector('body');

const html = '<h1>Hello Habito</h1>' + runA() + runB();

body.innerHTML = html;
