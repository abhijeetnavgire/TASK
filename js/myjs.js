$(document).ready(function(){
    $(".table td a").click(function()
                           {
                            alert('hi');
                           });
    $(".table td a").popover({ 
    trigger: 'hover',
    placement: function(pop,ele){
        if($(ele).parent().is('td:last-child')){
        return 'left'
        }else{
        return 'top'
        }
    }
});

$("ul li").popover({ 
    trigger: 'hover',
    placement: function(pop,ele){
        if($(ele).is('li:last-child')){
        return 'top'
        }else{
        return 'bottom'
        }
    }
});
    
    
});


function my(s) {
    s.document.s
    //code
}