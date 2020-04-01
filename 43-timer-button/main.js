requirejs.config({
    paths: {
        jquery: "https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min"
    }
}),
require(['jquery'],function($){
    $(function () {  
        var $btnadd=$('#add');
        $btnadd.click(function(){
            require(['timer-button.js'],function(TimerButton){
                var tb=new TimerButton();
                tb.show({
                    num:6,
                    title:'同意',
                    onClick:function(){
                        alert('就知道你会同意的！')
                    }
                })
            }) 
        })
    })
})
