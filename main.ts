function titila4vecesledcentral () {
    for (let index = 0; index < 4; index++) {
        led.plot(2, 2)
        basic.pause(1000)
        led.unplot(2, 2)
        basic.pause(1000)
    }
}
function palabrahello () {
    basic.showString("Hello!")
}
function mostrarcorazon () {
    basic.showIcon(IconNames.Heart)
}
titila4vecesledcentral()
mostrarcorazon()
palabrahello()
