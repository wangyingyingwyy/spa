$(function () {  
    var progress=$('progress'),
        $start=$('#start'),
        $reset=$('#reset'),
        $stop=$('#stop'),
        num=0,
        timer=0;
    $start.click(function(){
        if(timer===0){
            timer=setInterval(function(){
                progress.attr("value",num++)
            },100) 
        }    
    }),
    $stop.click(function(){
        clearInterval(timer);
        timer=0;
    }),
    $reset.click(function(){
        progress.attr("value",num=0);
    })
})