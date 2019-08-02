function loadHeader() {
    $('#load-header').load('https://cyrusliang.github.io/curly-palm-tree/globals/header.html #header');
    var github = 'https://github.com/CyrusLiang/curly-palm-tree/';
    var curr = window.location.pathname.substr(17);
    if (curr) {
        github = github + 'blob/master/' + curr;
    }

    console.log(github);
    $('a[href="https://github.com/CyrusLiang/curly-palm-tree"]').attr('href', github);
    $('a[href="https://github.com/CyrusLiang/curly-palm-tree"]').text('View This Page On GitHub');
}
function loadTitle() {
    $('#load-title').load('https://cyrusliang.github.io/curly-palm-tree/globals/title.html #title');
    var title = window.location.pathname;
    title = title.substr(1, title.length-2);
    if (title.includes('/')) {
        title = title.split('/').pop();
        title = title.substr(0, title.indexOf('.'));
    }
    title = title.replace(/\-/g, ' ');
    
    console.log(title);
    $('#title h1').html(title);
}

$(window).on('load', function() {
    var ver = $().jquery;
    console.log(ver + ':- Hello!');
    loadHeader();
    loadTitle();
});