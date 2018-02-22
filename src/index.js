
const helloThere = require('./say-hello.js');


const $ = require('jquery');


const sayHello = () => console.log('Hello');

sayHello();

$(document).ready(() => $('body').append('<h1>It wooooooorks!</h1>').css({backgroundColor:'blue', color:'white',}));

helloThere();

