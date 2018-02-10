var ele = (function () {
    return {
        goods_catelog : $('.goods_catelog'),
        goods_panel : $('.goods_catelog .goods_panel'),
        goodsLev1 : $('.cate_level_1'),
        goodsLev2 : $('.cate_level_2'),
        goodsLev3 : $('.cate_level_3'),
        goodsLev1Li : $('.cate_level_1 li'),
        goodsLev2Div : $('.cate_level_2>div')
    }
})();

$(function () {
    ele.goods_catelog.hover(function () {
        ele.goods_panel.stop().fadeIn()
    }, function () {
        ele.goods_panel.stop().fadeOut()
    });

    ele.goodsLev1Li.hover(function(){
        var index = $(this).index();
        ele.goodsLev2Div.eq(index).removeClass('none').siblings('div').addClass('none')
    },function(){

    })

});