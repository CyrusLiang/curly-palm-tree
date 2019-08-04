function loadHeader() {
    console.log("loadH");
    $('#load-header').load('https://cyrusliang.github.io/curly-palm-tree/globals/header.html #header');
}
function loadTitle() {
    console.log("loadT");
    $('#load-title').load('https://cyrusliang.github.io/curly-palm-tree/globals/title.html #title');
}

function doHeader() {
    var github = 'https://github.com/CyrusLiang/curly-palm-tree/';
    var curr = window.location.pathname.substr(17);
    if (curr) {
        github = github + 'blob/master/' + curr;
    }

    console.log(github);
    // $('.fork a').prop('href', github);
    $('.fork').empty();
    $('.fork').append('<a href="' + github + '">View This Page On GitHub</a>');
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

$(function() {
    var ver = $().jquery;
    console.log(ver + ' :> Hello!');
    loadHeader();
    loadTitle();
});
$(window).on('load', function() {
    doHeader();
    doTitle();
});