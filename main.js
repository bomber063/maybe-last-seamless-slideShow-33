$(slides).css('transform', 'translateX(-400px)')
var intiImgeLength = $('img').length
console.log(intiImgeLength)
var cloneImgLast = $('#slides > img').eq(intiImgeLength - 1).clone(true)
var cloneImg0 = $('#slides > img').eq(0).clone(true)
$('#slides').prepend(cloneImgLast)
$('#slides').append(cloneImg0)
var current = 0
var next
//方方老师的主要是current就是当前的索引，当前第几张图，current+1就是下一张图的索引，也就是下一张图片就是就几+1张。
setInterval(() => {
    next = current + 1//这里把next设置为加1,为正向滚动，当然可以设置成减1，这样就可以倒着滚动轮播。
    if (next > intiImgeLength - 1) {
        next = 0
    }//该if是用在向右边滚动的的时候使用，因为是+1，那么就会超过长度，就需要调回第一个，也就是索引为0
    if (next < 0){
        next=intiImgeLength - 1
    }//该if是用在向左边滚动的的时候使用，也就是倒着滚动，因为是-1，那么就会小于0，就需要调回第最后一个，也就是索引为length-1
        console.log('current是', current)
    console.log('next是', next)
    // if (next <= 2) {
    if (current === 0 && next === intiImgeLength - 1) {
        // slides.addEventListener('click', function () {
        $(slides).css('transform', 'translateX(0px)')
            .one('transitionend', function () {
                $(slides).css({ 'transform': `translateX(-${(intiImgeLength) * 400}px)`}).hide().offset()//这里的offset()会返回一个包含top 和 left属性的对象，如果不写这个offset()就不能偷梁换柱。
                $(slides).show()
            })
        // })
        console.log('-1200px')
        console.log(`-${(intiImgeLength) * 400}px`)

        console.log('0px')

        console.log('0到2')
    }
    else if (current === intiImgeLength - 1 && next === 0) {
        $(slides).css('transform', `translateX(-${(intiImgeLength + 1) * 400}px)`)
            .one('transitionend', function () {
                $(slides).css({ 'transform': `translateX(-${(next + 1) * 400}px)` }).hide().offset()//这里的offset()会返回一个包含top 和 left属性的对象，如果不写这个offset()就不能偷梁换柱。
                $(slides).show()
            })
        console.log('-1600px')
        console.log(`-${(next + 4) * 400}px`)
        console.log(`-${(intiImgeLength + 1) * 400}px`)

        console.log('-400px')
        console.log(`-${(next + 1) * 400}px`)
        console.log('2到0')
    }
    else {
        // slides.addEventListener('click', function () {
        $(slides).css('transform', `translateX(-${(next + 1) * 400}px)`)
        console.log(`-800px`)
        console.log(`-${(next + 1) * 400}px`)
        console.log('0到1 或 1到2')
        // })
    }
    // else if (current === 1 && next === 2) {
    //     // slides.addEventListener('click', function () {
    //     $(slides).css('transform', 'translateX(-1200px)')
    //     console.log(`-1200px`)
    //     console.log(`-${(next+1)*400}px`)
    //     console.log('1到2')
    // })
    // }
    // }
    current = next
}, 2000)


// $(document).ready(function () {
// setTimeout(() => {
//     // slides.addEventListener('click',function(){
//     $(slides).css('transform', 'translateX(-800px)')
//     // })
//     current=2
// }, 2000)

// setTimeout(() => {
//     // slides.addEventListener('click',function(){
//     $(slides).css('transform', 'translateX(-1200px)')
//     // })
//     current=3
// }, 4000)

// setTimeout(() => {
//     // slides.addEventListener('click',function(){
//     $(slides).css('transform', 'translateX(-1600px)')
//         .one('transitionend', function () {
//             $(slides).css({ 'transform': 'translateX(-400px)' }).hide().offset()//这里的offset()会返回一个包含top 和 left属性的对象，如果不写这个offset()就不能偷梁换柱。
//             $(slides).show()
//         })
//     current=1
//     // })
// }, 6000)
// })

// setTimeout(() => {
//     // slides.addEventListener('click',function(){
//     $(slides).css('transform', 'translateX(0px)')
//         .one('transitionend', function () {
//             $(slides).css({ 'transform': 'translateX(-1200px)' }).hide().offset()//这里的offset()会返回一个包含top 和 left属性的对象，如果不写这个offset()就不能偷梁换柱。
//             $(slides).show()
//         })
//     current = 2
//     // })
// }, 2000)
// // })

$('button:first').on('click', function () {
    $(slides).css('transform', 'translateX(-400px)')
})
