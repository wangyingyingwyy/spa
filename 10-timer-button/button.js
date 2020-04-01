$(function () {  
    var timer,
        a=$('input[type="button"]'),
        e=6;
    a.val("同意("+e+"s)");
    a.attr('disabled',"disabled");
    timer=setInterval(function () {  
        e--;
        if(e===-1){
            clearInterval(timer);
            a.val("同意");
            a.removeAttr("disabled");
        }else{
            a.val("同意("+e--+"s)");
        }
    },1000)
    a.click(function () {  
        alert("就知道你会同意！")
    })
})