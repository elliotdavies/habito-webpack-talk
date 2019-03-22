import runA from './A';
import runB from './B';

// v-- Build up some HTML instead of calling console.log
const body = document.querySelector('body');

const html = '<h1>Hello Habito</h1>' + runA() + runB();

body.innerHTML = html;
