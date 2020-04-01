$(function(){
    window.onhashchange = function(){  
        var $block= $('.main');
        var strHash= window.location.hash;
        var color= strHash.substring(3,strHash.length);
        console.log(color);
        $block.css({
            'background-color':color
        })
    }
})