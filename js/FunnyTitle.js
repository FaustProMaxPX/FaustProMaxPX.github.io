var OriginTitle = document.title; 
var titleTime; 
document.addEventListener('visibilitychange', function () { 
    if (document.hidden) { 
        $('[rel="icon"]').attr('href', "/favicon.png"); 
        document.title = '如果我是DJ你会爱我吗'; 
        clearTimeout(titleTime); 
    } else { 
        $('[rel="icon"]').attr('href', "/favicon.png"); 
        document.title = '爱情不是你想买，想买就能买' + OriginTitle; 
        titleTime = setTimeout(function () { 
            document.title = OriginTitle; 
        }, 
        2000); 
    } 
});

