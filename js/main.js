$(document).ready(function() {
    console.log('Hello!');
    $('#header').load('https://cyrusliang.github.io/curly-palm-tree/globals/header.html #header-nav');
    console.log(window.location.pathname);
});