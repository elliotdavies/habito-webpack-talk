import runA from './A';
import runB from './B';
import './main.css';

const body = document.querySelector('body');

const html = '<h1>Hello Habito</h1>' + runA() + runB();

body.innerHTML = html;
