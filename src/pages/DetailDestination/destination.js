import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import logo from '../DetailDestination/images/logo/indonesiaku.png';
import $ from 'jquery'
import dataJson from '../destination.json'

window.addEventListener('load', () => {
    document.querySelector('.logo').setAttribute('src', logo);
})
window.onscroll = function() { myFunction() };

var navbar = document.getElementsByTagName("header");
var sticky = navbar.offsetDown;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}