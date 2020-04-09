/* exported $menubar*/
var $menubar = (function() {
    var $bar = $('<div class="notepad-menubar"></div>');
  
    var menuData;
    var menus = [];      
  
    // 标志位，判断菜单是否展开
    var open = -1;
  
    // 创建一级菜单
    function createMenuTitle() {
        var $menuTitle=$('<ul class="menu-title"></ul>');
        for(let i=0;i<menuData.length;i++){
            var $title=$(`<li class="title"></li>`);
            // console.log(menuData[i].title)
            $title.html(menuData[i].title);
            $title.attr('dataId',i)
            $menuTitle.append($title);
            // 菜单点击事件
            $title.click(function(){
                var n=this.getAttribute('dataId');
                if(open===-1){
                    menus[n].css({'display':'inline-block'});
                    open=n;
                }else if(open!==n){
                    menus[open].css({'display':'none'});
                    menus[n].css({'display':'inline-block'});
                    open=n;
                }else{
                    menus[n].css({'display':'inline-block'});
                    open=n;
                }
            })
            $title.hover(function () {  
                if(open!==-1){
                    var n=this.getAttribute('dataId');
                    menus[open].css({'display':'none'});
                    menus[n].css({'display':'inline-block'});
                    open=n;
                }
            })
            
        }
        $bar.append($menuTitle);
    }
    // 下拉菜单
    function createMenus() {
        for(let i=0;i<menuData.length;i++){
            var $menus=$(`<ul class="menus"></ul>`);
            var items=menuData[i].menuItems;
            for(let j=0;j<items.length;j++){
                // console.log(items.length)
                if(items[j].title==='hr'){
                    var $hr=$(`<li class="menu-hr"></li>`);
                    $menus.append($hr);
                    continue;
                }
                var $menuItem=$(`<li class="menu-item"></li>`);
                $menuItem.html(items[j].title);
                $menuItem.attr('x',i);
                $menuItem.attr('y',j);
                if(items[j].shortcut!==''){
                    var $shortcut=$(`<span class="shortcut"></span>`);
                    $shortcut.html(items[j].shortcut);
                    $menuItem.append($shortcut);
                }
                if(!items[j].enabled){
                    $menuItem.addClass('disabled');
                } 
                $menus.append($menuItem);
                $menuItem.click(function() {
                    if($(this).hasClass('disabled')) return;
                    var i = this.getAttribute('x');
                    var j = this.getAttribute('y');
                    menus[i].css({display: 'none'});
                    open = -1;
                    menuData[i].menuItems[j].handler();
                  });
            }
            $menus.css({
                'width':menuData[i].width,
                'left':menuData[i].left,
                display:'none'
            });
            $bar.append($menus);
            menus.push($menus);
            
        }
        console.log(menus)
    }
    function init() {
      createMenuTitle();
      createMenus();
      $('body').append($bar);
    }
  
    function show(data) {
      menuData = data;
      init();
    }
  
    return {
      show: show
    };
  }());