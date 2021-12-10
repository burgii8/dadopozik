let numero = 0
input.onGesture(Gesture.Shake, function () {
    numero = randint(1, 6)
})
basic.forever(function () {
    basic.showNumber(numero)
})
basic.forever(function () {
    if (numero == 6) {
        basic.showIcon(IconNames.Happy)
    }
})
