let intensite = 0
function bleu () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
}
function blanc () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function mauve () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
basic.forever(function () {
    intensite = pins.analogReadPin(AnalogPin.P0)
    if (intensite >= 700) {
        vert()
    } else if (intensite < 700 && intensite >= 600) {
        bleu()
    } else if (intensite < 500 && intensite >= 400) {
        rouge()
    } else if (intensite < 300 && intensite >= 200) {
        mauve()
    } else {
        blanc()
    }
})
