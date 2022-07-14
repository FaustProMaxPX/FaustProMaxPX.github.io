var OriginTitle = document.title; 
var titleTime; 
document.addEventListener('visibilitychange', function () { 
    if (document.hidden) { 
        $('[rel="icon"]').attr('href', "/favicon.png"); 
        document.title = '你一定会回来的！'; 
        clearTimeout(titleTime); 
    } else { 
        $('[rel="icon"]').attr('href', "/favicon.png"); 
        document.title = '哈哈，我就知道！' + OriginTitle; 
        titleTime = setTimeout(function () { 
            document.title = OriginTitle; 
        }, 
        2000); 
    } 
});

