input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("DECLINED")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "DUCKS") {
        basic.showIcon(IconNames.Duck)
    } else {
        basic.showString(receivedString)
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("DUCKS")
})
radio.setGroup(-1e-308)
basic.forever(function () {
	
})
