const $ = require('jquery');


const sayHello = () => console.log('Hello');

sayHello();

$(document).ready(() => $('body').css('background-color', 'yellow'));


