basic.showString("hola micro mundo")
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
})
