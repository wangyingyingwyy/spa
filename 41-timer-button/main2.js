function TimerButton() {  
    var $btn=$('<input class="time-button" type="button" disabled>');
    var  cfg={
        container:'body',
        num:6,
        title:"发送验证码",
        onClick:null
    };
    var num;
    var timer;
    this.show=function(conf){
        // Dom绘制
        $(cfg.container).append($btn);
        $.extend(cfg,conf);
        num=cfg.num;
        // 事件绑定
        $btn.val(cfg.title+'('+num+'s)');
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
}