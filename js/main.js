function loadHeader() {
    $('#header').load('https://cyrusliang.github.io/curly-palm-tree/globals/header.html #header-nav');
    var github = 'https://github.com/CyrusLiang/curly-palm-tree/blob/master/' + window.location.pathname.substring(16);
    console.log(github);
}
function loadTitle() {
    $('section').load('https://cyrusliang.github.io/curly-palm-tree/globals/title.html #title');
    console.log(window.location.pathname.split('/').pop());
}

$(document).ready(function() {
    console.log('Hello!');
    loadHeader();
    loadTitle();
    console.log(window.location.pathname);
});