var $timeButton=(function () { 
    // $btn.css({
    //     height:'50px',
    //     width:'100px'
    // })
    function show(conf) {  
        // Dom绘制
        // $(container).html(html);
        var timer,
        // html='<input class="time-button" type="button" value="同意(6s)" disabled>',
        cfg={
            container:'body',
            num:6,
            title:"发送验证码",
            onClick:null
        },
        num,
        $btn=$('<input class="time-button" type="button" disabled>');
        $(cfg.container).append($btn);
        $.extend(cfg,conf);
        num=cfg.num;
        // 事件绑定
        $btn.val(cfg.title+'('+num+'s)');
        // if(timer){
        //     clearInterval(timer);
        // }
        timer=setInterval(function () {  
            num--;
            if(num===0){
                clearInterval(timer);
                $btn.val("发送验证码");
                $btn.removeAttr("disabled");
            }else{
                $btn.val("发送验证码("+num+"s)");
            }
        },1000);
        $btn.click(function(){
            cfg.onClick();
        })
    }
    // $btn.click(function () {  
    //     alert("就知道你会同意！")
    // });
    return {
        show:show
    }
}())