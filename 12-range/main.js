$(function () {  
   var $range=$('#range');
   var $age=$('#age');

   $range.change(function () {  
       $age.html($range.val());
   })
})