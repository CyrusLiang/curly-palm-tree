function loadHeader() {
    $('#header').load('https://cyrusliang.github.io/curly-palm-tree/globals/header.html #header-nav');
    var github = 'https://github.com/CyrusLiang/curly-palm-tree/';
    var curr = window.location.pathname.substr(17);
    if (curr) {
        github = github + 'blob/master/' + curr;
    }
    console.log(github);
}
function loadTitle() {
    $('#load-title').load('https://cyrusliang.github.io/curly-palm-tree/globals/title.html #title');
    var title = window.location.pathname;
    title = title.substr(1, title.length-2);
    console.log(title);
    if (title.indexOf('/')) {
        title = title.split('/').pop();
        title = title.substr(0, title.indexOf('.'));
    }
    title = title.replace('-', ' ');
    console.log(title);
}

$(document).ready(function() {
    console.log('Hello!');
    loadHeader();
    loadTitle();
    console.log(window.location.pathname);
});