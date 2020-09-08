$(function(){
    $(".btn-gnavi").on("click", function(){
        // ハ
        var rightVal = 0;
        if($(this).hasClass("open")) {
            // 位置を移動させメニューを開いた状態にする
            rightVal = -300;
            // 
            $(this).removeClass("open");
        } else {
            // 
            $(this).addClass("open");
        }

        $("#global-navi").stop().animate({
            right: rightVal
        }, 200);
    });
});
