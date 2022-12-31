input.onButtonPressed(Button.A, function () {
    strip.setBrightness(100)
    for (let index = 0; index <= 7; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
        strip.show()
        basic.pause(100)
    }
    strip.clear()
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.forever(function () {
	
})
