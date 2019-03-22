import runA from './A';
import runB from './B';
import './main.scss';

// v-- Import images the same way we import other files. The result
// will be a file path to the image...
import jargon from './jargon_guy.png';

const body = document.querySelector('body');

const html = '<h1>Hello Habito</h1>'
           + runA()
           + runB()
           // ... which we can use like so
           + `<img src="${jargon}" alt="Jargon" />`;

body.innerHTML = html;
