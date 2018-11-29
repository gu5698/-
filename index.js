var swiper1 = new Swiper ('#swiper1', {
    // 橫向捲動
    direction: 'horizontal',
    // 自動迴圈
    loop: true,

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        // 分页器控制切换
        clickable :true,
    },
    //自动滑动
    autoplay: true,

    // // 操作包括触碰，拖动，点击pagination等，自动切换不会停止
    // autoplay: {
    //     disableOnInteraction: false,
    // },
})
//鼠标覆盖停止自动切换
swiper1.el.onmouseover = function(){
    swiper1.autoplay.stop();
}
//鼠标離開開始自动切换
swiper1.el.onmouseout = function(){
    swiper1.autoplay.start();
}