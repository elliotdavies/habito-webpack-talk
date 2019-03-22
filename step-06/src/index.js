import runA from './A';

// v-- This is now a .purs file, which exports a `main` function.
// We rename it to `runB` for consistency with the existing code
import { main as runB } from './B.purs'; 

import './main.scss';
import jargon from './jargon_guy.png';

const body = document.querySelector('body');

const html = '<h1>Hello Habito</h1>'
           + runA()
           + runB()
           + `<img src="${jargon}" alt="Jargon" />`;

body.innerHTML = html;
