let n = 0;
let itemLength = $("#wraper .item").length;

!function init() {
    for(let i = 0; i<itemLength; i++){
        let span = document.createElement('span');
        $("#wraper .pagination").append(span);
    }
    $("#wraper .pagination span").eq(0).addClass('on');
}();

function slide(index){
    if(index === "prev"){
        n --;
        if(n < 0){
            n = itemLength - 1
        }
    }else if(index === "next"){
        n ++;
        if(n >= itemLength){
            n = 0
        }
    }else{
        n = index
    }
    let p = -$("#wraper").width()*n;
    $("#wraper .container").css({"transform":"translateX("+p+"px)"});
    $("#wraper .pagination span").eq(n).addClass('on');
    $("#wraper .pagination span").eq(n).siblings().removeClass('on');
    return n;
}

$("#wraper .pagination li").on('click', function () {
    slide($(this).index());
});

$("#wraper .btn-prev").on('click', () => slide('prev'));
$("#wraper .btn-next").on('click', () => slide('next'));

let timerId = setTimer();

function setTimer() {
    return setInterval( () => slide('next') ,3000);
}

$("#wraper").on('mouseenter', () => {
    clearInterval(timerId);
});

$("#wraper").on('mouseleave', () => {
    timerId = setTimer();
});