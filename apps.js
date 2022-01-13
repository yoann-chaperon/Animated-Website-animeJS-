var animation = anime.timeline({
    autoplay: false
});

animation
.add({
    targets:'#btn',
    top: '1500px',
    duration: 500,
    easing:'easeInOutSine'
})


.add({
    targets:'#star',
    top: '0px',
    duration: 1000,
    easing:'easeInOutSine'
})

.add({
    targets:'#mountains_behind',
    top: '0px',
    duration: 1000,
    easing:'easeInOutSine'
})

.add({
    targets:'#mountains_front',
    top: '0px',
    duration: 1000,
    easing:'easeInOutSine'
})

.add({
    targets:'#moon',
    top: '0px',
    duration: 1000,
    easing:'easeInOutBack'
})

.add({
    targets:'#text',
    marginRight: '0px',
    duration: 1000,
    easing:'easeInOutBack'
})

.add({
    targets:'#btn',
    top: '50%',
    duration: 1000,
    easing:'easeInOutBack'
})
document.querySelector('#btn').onclick = animation.play;