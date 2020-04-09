$(function () {
    //get dom elem
    var $width=$('#width'),
        $height=$('#height'),
        $btnCal=$('#calculate'),
        $perimeter=$('#perimeter'),
        $area=$('#area');
        $form=$('form');
    /**calc button click event */
    $form.submit(function(e){
        e.preventDefault();
        //get value
        var w=Number($width.val()),
            h=Number($height.val());
        //calculate
        var p=roundFloat(2*(w+h),2),
            a=roundFloat(w*h,2);
        //output
        $perimeter.val(p);
        $area.val(a);
    })

    function roundFloat(x,n){
        return Math.round(x* Math.pow(10,n)) / Math.pow(10, n);
    }
   
});
