$(function() {
    var $btn=$('#main>input');
    var num = 0;
    function add(number){
        $btn.val('被按了'+num+'次');
    }
    add(num);
    $btn.click(function() {
        var url = location.origin + location.pathname + "#/" + ++num;
        history.pushState(null, null, url),
        add(num);
    })
    $(window).on("popstate", function() {
        add(num = "" === (num = location.href.match(/(\d*)$/)[0]) ? 0 : num)
    })
});
