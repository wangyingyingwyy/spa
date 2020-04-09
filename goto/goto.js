var $dlgGoto=(function () { 
    var cfg={
        container:'body',
        lineNum:1,
        totalLine:1,
        gotoHandler:null
    };
    var html= ``+`<div class="notepad_dlg_goto">`
                +`<div class="dialogbox">`
                    +`<div class="titlebar">`
                    +`<p class="title">转到指定行</p>`
                        +`<span class="close-btn">✖</span>`
                    +`</div>`
                    +`<div class="main">`
                        +`<label for="">行号(L_)</label>`
                        +`<br>`
                        +`<input class="txt-line-num" type="text" autofocus>`
                        +`<br>`
                        +`<input class="btn-goto" type="button" value="转到">`
                        +`<input class="btn-cancel" type="button" value="取消">`
                    +`</div>`
                +`</div>`
            +`</div>`;
    var $dlg=$(html);
    var $btnClose = $dlg.find('.close-btn'),
        $btnCancel = $dlg.find('.btn-cancel'),
        $btnGoto = $dlg.find('.btn-goto'),
        $txtLineNum = $dlg.find('.txt-line-num'),
        $titleBar = $dlg.find('.titlebar');
    //关闭
    function del() {  
        $dlg.remove();
    };
    // 转到&&集中校验
    function gotoHandler(){
        if(!validate()) return;
        cfg.gotoHandler($txtLineNum.val()); 
        del();
    }
    // 校验
    function filterKey(e) {
        if(!/[0-9]/.test(e.key)) {
          e.preventDefault();
          showErrMsg();
        }
      }
    
    function showErrMsg() {
        alert('你只能在此输入数字！');
    }
    function validate() {  
        if($txtLineNum.val()===''){
            alert("请输入要转到的行号！");
            return false;
        }
        var n=Number($txtLineNum.val());
        if(n===0 || n>cfg.totalLine){
            alert("行数超出总行数！");
            $txtLineNum.select();
            return false;
        }
        return true;
    }
    function show(conf) {  
        $.extend(cfg,conf); 
        $(cfg.container).append($dlg);
        $btnClose.click(del);
        $btnCancel.click(del);
        $btnGoto.click(gotoHandler);
        $txtLineNum.keypress(filterKey);
        $txtLineNum.val(cfg.lineNum);
        $txtLineNum.select();
    }
    return {
        show:show
    }
}())