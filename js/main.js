function loadHeader() {
    $('#header').load('https://cyrusliang.github.io/curly-palm-tree/globals/header.html #header-nav');
}
loadHeader();
function loadTitle() {
    $('#load-title').load('https://cyrusliang.github.io/curly-palm-tree/globals/title.html #title');
}
loadTitle();

function doHeader() {
    var github = 'https://github.com/CyrusLiang/curly-palm-tree/';
    var curr = window.location.pathname.substr(17);
    if (curr) {
        github = github + 'blob/master/' + curr;
    }
    console.log(github);
    $('.fork a').attr('href', github);
    $('.fork a').text('View This Page On GitHub');
}
function doTitle() {
    var title = window.location.pathname;
    title = title.substr(1, title.length-2);
    if (title.includes('/')) {
        title = title.split('/').pop();
        title = title.substr(0, title.indexOf('.'));
    }
    title = title.replace(/\-/g, ' ');
    console.log(title);
    $('#title h1').text(title);
}

$(document).ready(function() {
    console.log('Hello!');
    document.doHeader();
    document.doTitle();
});