$(function(){
    var $url=$('input[type="text"]');
    var $btnSave=$('input[type="button"]');
    var $img=$('img');
    // 定义一个临时图片，内存中的图片
    var $tpmImg=$('<img>');

    // 
    var strImg=window.localStorage.getItem('img');
    if(strImg!==''){
        $img.attr('src',strImg)
    }
    $btnSave.click(function(){
        // 验证url地址时候否为空
        var url=$url.val();
        if(url===''){
            return;
        }
        // 把url地址的图片加载到tmpImg临时图片上
        $tpmImg.attr('crossOrigin','Anonymous');
        $tpmImg.attr('src',url);
    })
    // 临时图片加载
    $tpmImg.load(function(){
            //create canvas
            var can=$('<canvas>').get(0);
            var ctx=can.getContext('2d');
            ctx.width=$tpmImg.get(0).width;
            ctx.height=$tpmImg.get(0).height;
            //canvas fill tmpImg
            ctx.drawImage($tpmImg.get(0),0,0,can.width,can.height);
            //canvas output base64 string
            var str=can.toDataURL();
            //存储图片的base64编码
            window.localStorage.setItem('img',str);
            // 读取图片
            var strImg=window.localStorage.getItem('img');
            $img.attr('src',strImg);
    })
})