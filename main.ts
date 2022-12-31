input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 7; index++) {
        lampjes.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
        lampjes.show()
        basic.pause(100)
    }
    lampjes.clear()
    lampjes.show()
})
input.onButtonPressed(Button.B, function () {
	
})
input.onSound(DetectedSound.Loud, function () {
	
})
let lampjes: neopixel.Strip = null
lampjes = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
let spel_loopt = true
lampjes.setBrightness(100)
basic.forever(function () {
    while (spel_loopt) {
    	
    }
})
