var move = document.getElementById('move');
var small = document.getElementById('small');
var big = document.getElementById('big');
var look_girl = document.getElementById('look_girl');
small.onmousemove = function(event){
    event = event || window.event;
    this.style.cursor = 'move';
    // 计算move移动块的left值
    var move_left = event.clientX - this.offsetLeft - move.offsetWidth/2;
    //
    // 计算move移动块的top值
    var move_top = event.clientY - this.offsetTop - move.offsetHeight/2;
    // 超出左边界赋值为0
    move_left = move_left < 0 ? 0 : move_left;
    // 超出右边界赋值为盒子宽度-移动块的宽度
    move_left = move_left > this.offsetWidth - move.offsetWidth ? this.offsetWidth - move.offsetWidth : move_left;
    // 超出上边界赋值为0
    move_top = move_top < 0 ? 0 : move_top;
    // 超出下边界赋值为盒子高度-移动块高度
    move_top = move_top > this.offsetHeight - move.offsetHeight ? this.offsetHeight - move.offsetHeight : move_top;
    // 修改移动块left、top值
    move.style.left = move_left + 245 + 'px';
    move.style.top = move_top + 65 + 'px';
    /*
        计算图片需要移动的坐标

        距离左边left    图片宽度      盒子宽度          距离左边left    图片宽度           盒子宽度
        big_x/(look_girl.offsetWidth-big.offsetWidth) = move_left/(small.offsetWidth-move.offsetWidth);

        big_y/(look_girl.offsetHeight-big.offsetHeight) = move_top/(small.offsetHeight-move.offsetHeight);

    */

    var big_x = move_left/(small.offsetWidth-move.offsetWidth) * (look_girl.offsetWidth-big.offsetWidth);
    var big_y = move_top/(small.offsetHeight-move.offsetHeight) * (look_girl.offsetHeight-big.offsetHeight);
    // 修改图片定位
    look_girl.style.left = -big_x + 'px';
    look_girl.style.top = -big_y + 'px';
}

small.onmouseover = function(){
    move.style.display = 'block';
    big.style.display = 'block';
}

small.onmouseout = function(){
    move.style.display = 'none';
    big.style.display = 'none';
}