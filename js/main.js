function loadHeader() {
    $('#header').load('https://cyrusliang.github.io/curly-palm-tree/globals/header.html #header-nav');
    var github = 'https://github.com/CyrusLiang/curly-palm-tree/blob/master/' + window.location.pathname.substring(17);
    console.log(github);
}
function loadTitle() {
    $('#title').load('https://cyrusliang.github.io/curly-palm-tree/globals/title.html #title');
    console.log(window.location.pathname.split('/').pop());
}

$(document).ready(function() {
    console.log('Hello!');
    loadHeader();
    loadTitle();
    console.log(window.location.pathname);
});