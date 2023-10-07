import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let text = document.getElementById('text');
let text2 = document.getElementById('text2');
let back1 = document.getElementById('back1');
let back2 = document.getElementById('back2');
let back3 = document.getElementById('back3');
let back5 = document.getElementById('back5');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  text.style.marginTop = value * 2.5 + 'px';
  text2.style.marginTop = value * 2.5 + 'px';
  back1.style.left = value * 2.5 + 'px';
  back2.style.left = value * -1.5 + 'px';
  back3.style.top = value * 2.5 + 'px';
  back5.style.top = value * 2.5 + 'px';
});

window.addEventListener('scroll', function () {
  var textBox1 = document.getElementById('text-container');
  var textBox2 = document.getElementById('textcontainer2');
  var triggerPoint1 = textBox1.offsetTop - window.innerHeight + textBox1.offsetHeight;
  var triggerPoint2 = textBox2.offsetTop - window.innerHeight + textBox2.offsetHeight;

  if (window.pageYOffset >= triggerPoint1) {
    textBox1.classList.add('animate');
  }

  if (window.pageYOffset >= triggerPoint2) {
    textBox2.classList.add('animate');
  }
});
var activeLink = null;
function toggleBackground(event) {
  var clickedLink = event.target;
  if (activeLink !== null) {
    activeLink.classList.remove('active');
  }
  if (activeLink !== clickedLink) {
    clickedLink.classList.add('active');
    activeLink = clickedLink;
  } else {
    activeLink = null;
  }
}


