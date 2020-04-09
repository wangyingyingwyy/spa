var $dlgFont=(function(){
    var $html=$(
        `<div class="notepad-dlg-font">`
        +`<div class="dialogbox">`
            +`<div class="notepad-dlg-titlebar">`
              +`<p class="title">字体</p>`
                +`<span class="close-btn">✖</span>`
            +`</div>`
            +`<div class="main notepad-dlg-main">`
                +`<div class="font-family"><p>字体(F):</p></div>`
                +`<div class="font-style"><p>字形(Y):</p></div>`
                +`<div class="font-size"><p>大小(S):</p></div>`
                +`<fieldset class="sample">`
                    +`<legend>示例</legend>`
                    +`<p class="sample-txt">AaBbYyZz</p>`
                +`</fieldset>`
                +`<div class="script">`
                    +`<lable>`
                      +`脚本(R):<br>`
                       +`<select name="" id="">`
                            +`<option value="西欧语言">西欧语言</option>`
                            +`<option value="中文GB2312">中文GB2312</option>`
                        +`</select>`
                    +`</lable>`
                +`</div>`
                +`<input class="btn btn-ok" type="button" value="确定">`
                +`<input class="btn btn-cancel" type="button" value="取消">`
            +`</div>`
        +`</div>`
    +`</div>`
    );
    var $btnOk = $html.find('.btn-ok');
    var $btnClose = $html.find('.close-btn');
    var $btnCancel = $html.find('.btn-cancel');
    var $sample = $html.find('.sample-txt');
    var $titleBar = $html.find('.notepad-dlg-titlebar');
    // font-family列表
    var fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'];
    // font-style列表
    var styles = ['常规', '斜体', '粗体', '粗偏斜体'];
    // font-size列表
    var sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];
    // 初始化字体
    var cfg = {
        family: 'Arial',
        style: '常规',
        size: '16',
        okHandler: null
      };
    function sample() {
        $sample.css({ 
            'font-family': cfg.family, 
            'font-size': cfg.size + 'px' 
        });
    
        if(cfg.style === '斜体') {
          $sample.css({'font-style': 'italic'});
          $sample.css({'font-weight': ''});
          return;
        }
    
        if(cfg.style === '粗体') {
          $sample.css({'font-style': ''});
          $sample.css({'font-weight': 'bold'});
          return;
        }
        if(cfg.style === '粗偏斜体') {
          $sample.css({'font-style': 'italic'});
          $sample.css({'font-weight': 'bold'});
          return;
        }
    }
    // 初始化
    function init(){
        // font-family列表
        var list1=new comList();
        // font-style列表
        var list2=new comList();
        // font-size列表
        var list3=new comList();
        list1.show({
            container: '.notepad-dlg-font .font-family',
            width: '176px',
            list: fonts,
            select: fonts.indexOf(cfg.family),
            isFont: true,
            selectHandler: function(e) {
              cfg.family = fonts[e];
              sample();
            }
        });
        list2.show({
            container: '.notepad-dlg-font .font-style',
            width: '132px',
            list: styles,
            select: styles.indexOf(cfg.style),
            isFontStyle: true,
            selectHandler: function(e) {
              cfg.style = styles[e];
              sample();
            }
        });
        list3.show({
            container: '.notepad-dlg-font .font-size',
            width: '64px',
            list: sizes,
            select: sizes.indexOf(cfg.size),
            selectHandler: function(e) {
              cfg.size = sizes[e];
              sample();
            }
        });
        sample();
    }
    function del(){
        $html.remove();
    }
    function show(conf){
        $.extend(cfg,conf);
        $('body').append($html);
        init();
        // $html.find('.dialogbox').draggable({handle: $titleBar});
        $btnClose.click(del);
        $btnCancel.click(del);
        $btnOk.click(function() {
            cfg.okHandler({
                family: cfg.family,
                style: cfg.style,
                size: cfg.size
            });
            del();
        });
    }
    return {show: show};
}());