function doHeader() {
    var github = 'https://github.com/CyrusLiang/curly-palm-tree/';
    var curr = window.location.pathname.substr(17);
    if (curr) {
        github = github + 'blob/master/' + curr;
    }

    console.log(github);
    $('.fork a').prop('href', github);
    $('.fork a').append('View This Page On GitHub');
}
function loadHeader(callback) {
    $('#load-header').load('https://cyrusliang.github.io/curly-palm-tree/globals/header.html #header');
    callback();
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
    $(title).appendTo('#title h1');
}
function loadTitle(callback) {
    $('#load-title').load('https://cyrusliang.github.io/curly-palm-tree/globals/title.html #title');
    callback();
}

$(window).on('load', function() {
    var ver = $().jquery;
    console.log(ver + ' :> Hello!');
    loadHeader(doHeader);
    loadTitle(doTitle);
});