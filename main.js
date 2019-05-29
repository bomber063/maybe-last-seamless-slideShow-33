$(slides).css('transform', 'translateX(-400px)')
var cloneImg2 = $('#slides > img').eq(2).clone(true)
var cloneImg0 = $('#slides > img').eq(0).clone(true)
$('#slides').prepend(cloneImg2)
$('#slides').append(cloneImg0)

// $(document).ready(function () {
    setTimeout(() => {
        // slides.addEventListener('click',function(){
        $(slides).css('transform', 'translateX(-800px)')
        // })
    }, 2000)

    setTimeout(() => {
        // slides.addEventListener('click',function(){
        $(slides).css('transform', 'translateX(-1200px)')
        // })
    }, 4000)

    setTimeout(() => {
        // slides.addEventListener('click',function(){
        $(slides).css('transform', 'translateX(-1600px)')
            .one('transitionend', function () {
                $(slides).css({ 'transform': 'translateX(-400px)' }).hide().offset()//这里的offset()会返回一个包含top 和 left属性的对象，如果不写这个offset()就不能偷梁换柱。
                $(slides).show()
            })
        // })
    }, 6000)
// })

$('button:first').on('click',function(){
    $(slides).css('transform', 'translateX(-400px)')
})
console.log($('button:first'))
