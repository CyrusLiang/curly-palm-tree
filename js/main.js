function()

$(document).ready(function() {
    console.log('Hello!');
    $('#header').load('https://cyrusliang.github.io/curly-palm-tree/globals/header.html #header-nav');
    $('section').load('https://cyrusliang.github.io/curly-palm-tree/globals/title.html #title');
    console.log(window.location.pathname);
});