def titila4vecesledcentral():
    for index in range(4):
        led.plot(2, 2)
        basic.pause(1000)
        led.unplot(2, 2)
        basic.pause(1000)
def palabrahello():
    basic.show_string("Hello!")
def mostrarcorazon():
    basic.show_icon(IconNames.HEART)
titila4vecesledcentral()
mostrarcorazon()
palabrahello()