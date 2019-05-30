$(slides).css('transform', 'translateX(-400px)')
var intiImgeLength=$('img').length
console.log(intiImgeLength)
var cloneImg2 = $('#slides > img').eq(intiImgeLength-1).clone(true)
var cloneImg0 = $('#slides > img').eq(0).clone(true)
$('#slides').prepend(cloneImg2)
$('#slides').append(cloneImg0)
var current = 0
var next
//方方老师的主要是current就是当前的索引，当前第几张图，current+1就是下一张图的索引，也就是下一张图片就是就几+1张。
setInterval(() => {
    next = current + 1
    if (next > 2) {
        next = 0
    }
    console.log('current是', current)
    console.log('next是', next)
    // if (next <= 2) {
    if (current === 0 && next === 2) {
        // slides.addEventListener('click', function () {
        $(slides).css('transform', 'translateX(0px)')
            .one('transitionend', function () {
                $(slides).css({ 'transform': 'translateX(-1200px)' }).hide().offset()//这里的offset()会返回一个包含top 和 left属性的对象，如果不写这个offset()就不能偷梁换柱。
                $(slides).show()
            })
        // })
        console.log('-1200px')
        console.log(`-${(intiImgeLength)*400}px`)

        console.log('0px')

        console.log('0到2')
    }
    else if (current === 2 && next === 0) {
        $(slides).css('transform', 'translateX(-1600px)')
            .one('transitionend', function () {
                $(slides).css({ 'transform': 'translateX(-400px)' }).hide().offset()//这里的offset()会返回一个包含top 和 left属性的对象，如果不写这个offset()就不能偷梁换柱。
                $(slides).show()
            })
        console.log('-1600px')
        console.log(`-${(next+4)*400}px`)
        console.log(`-${(intiImgeLength+1)*400}px`)

        console.log('-400px')
        console.log(`-${(next+1)*400}px`)
        console.log('2到0')
    }
    else {
        // slides.addEventListener('click', function () {
        $(slides).css('transform', `translateX(-${(next+1)*400}px)`)
        console.log(`-800px`)
        console.log(`-${(next+1)*400}px`)
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

// $('button:first').on('click', function () {
//     $(slides).css('transform', 'translateX(-400px)')
// })
