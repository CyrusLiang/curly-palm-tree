function loadHeader() {
    $('#load-header').load('https://cyrusliang.github.io/curly-palm-tree/globals/header.html #header');
}
function loadTitle() {
    $('#load-title').load('https://cyrusliang.github.io/curly-palm-tree/globals/title.html #title');
}

function doHeader() {
    var github = 'https://github.com/CyrusLiang/curly-palm-tree/';
    var curr = window.location.pathname.substr(17);
    if (curr) {
        github = github + 'blob/master/' + curr;
    }

    console.log(github);
    document.querySelector('#header .fork a').href = github;
    document.querySelector('#header .fork a').innerHTML = 'View This Page On GitHub';
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
    document.querySelector('#title h1').innerHTML = title;
}

$(window).on('load', function() {
    console.log('Hello!');
    loadHeader();
    loadTitle();
    doHeader();
    doTitle();
});