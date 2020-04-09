$(function () {
    //get dom elem
    var $width=$('#width'),
        $height=$('#height'),
        $btnCal=$('#calculate'),
        $perimeter=$('#perimeter'),
        $area=$('#area');
    /**calc button click event */
    $btnCal.click(function(){
        // 数据合法性校验
        // if error return;
        if(!validate('#width') || !validate('#height')){
            return;
        }
        //get value
        var w=Number($width.val()),
            h=Number($height.val());
        //calculate
        var p=roundFloat(2*(w+h),2),
            a=roundFloat(w*h,2);
        // var p=2*(w+h),
        //     a=w*h;
        //output
        $perimeter.val(p);
        $area.val(a);
    });
    // 字符校验
    /**
     * event keypress
     * event argument get key value e.key and e.target.value
     * 非法键
     * 
     */
    $width.keypress(function (e) {
        console.log('keypress');
        var pos=e.target.selectionStart,
        con=e.target.value;
        if(e.key==='e'){
            if(pos==0 ||con.indexOf('e')!==-1||con.indexOf('E')!==-1){
                e.preventDefault();
                return;
            }
            if(pos===1 && con.substring(0,1)==='-'){
                e.preventDefault();
                return;
            }
        }
        if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
            e.preventDefault();
            return;
        } 
    });
    /**
     * 合法字符e
     * 允许出现在非科学计数法的数字末尾
     * 允许出现在非科学计数法的数字中间
     * 不允许出现在非科学计数法的数字前面
     * 不允许出现在空文本
     * 不允许出现在负号后边
     * 不允许出现在科学计数法（e和E）数字的末尾
     * 不允许出现在科学计数法数字的中间
     * 不允许出现在科学计数法数字的前边
     * 
     */

    $height.keypress(function (e) {
        if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
            e.preventDefault();
            return;
        } 
    });
    // 字段校验
    $width.focusout(function () {
        // if(!validate(width)) select this;  
        if(!validate('#width')){
            $width.select();
        }
    });
    $height.focusout(function () {  
        // if(!validate(height)) select this;  
        if(!validate('#height')){
            $height.select();
        }
    });
    function roundFloat(x,n){
        return Math.round(x* Math.pow(10,n)) / Math.pow(10, n);
    }
    // 表单校验，集中校验
    function validate(field) {
        // 获取错误提示信息的DOM对象
        var $data=$(field),
            $msg=$(field+'-validation-msg');
        // 检验是否为空
        if($data.val()===''){
            $msg.html('不能为空');
            $data.select();
            return false;
        }
        // 验收是否为数值
        if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
            $msg.html('必须为数值');
            $data.select();
            return false;
        }
        // 验证数值大于0
        if(Number($data.val())<0){
            $msg.html('必须大于零');
            $data.select();
            return false;
        }
        // 不通过提示错误信息return false;

        // 通过返回true
        $msg.html('');
        return true;
    }
});

// 表单校验，集中校验
function validate(field) {
    // 获取错误提示信息的DOM对象
    var $data=$(field),
        $msg=$(field+'-validation-msg');
    // 检验是否为空
    if($data.val()===''){
        $msg.html('不能为空');
        $data.select();
        return false;
    }
    // 验收是否为数值
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
        $msg.html('必须为数值');
        $data.select();
        return false;
    }
    // 验证数值大于0
    if(Number($data.val())<0){
        $msg.html('必须大于零');
        $data.select();
        return false;
    }
    // 不通过提示错误信息return false;

    // 通过返回true
    $msg.html('');
    return true;
}