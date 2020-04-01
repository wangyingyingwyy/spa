$(function(){
    $('input').click(function(){
        var $code=$('<div><pre class="javascript"></pre><i class="iconfont icon-clipboard" title="复制到剪贴板"></i><i class="iconfont icon-delete" title="删除"></i></div>');
        var $txt=$('textarea');

        if($txt.val()!==''){
            $code.find('pre').html($txt.val());
            hljs.highlightBlock($code.find('pre')[0]);
            $('.main').append($code);
        }
        var del =$code.find("i.icon-delete"),
            n = $code.find("i.icon-clipboard");
        del.click(function() {
            $code.remove()
        }),
        n.click(function() {
            var e = $code.find("pre"),
                del = document.createRange();
            del.selectNode(e[0]),
            window.getSelection().addRange(del),
            document.execCommand("copy"),
            window.getSelection().removeAllRanges()
        })
    })

})